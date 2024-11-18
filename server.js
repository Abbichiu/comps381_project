const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

// Global variable to store champion data
let championData = null;

// Fetch champion data on server start
async function fetchChampionData() {
  try {
    // Get latest version
    const versionResponse = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json');
    const latestVersion = versionResponse.data[0];

    // Fetch champion data
    const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    championData = response.data.data; // Ensure this is assigned correctly
    console.log('Champion data loaded.');
  } catch (error) {
    console.error('Error fetching champion data:', error.message);
  }
}

// Call the function to fetch champion data
fetchChampionData();

// Function to normalize champion names
function normalizeName(name) {
  return name.replace(/\s|'|\./g, '').toLowerCase();
}

// Replace with your MongoDB connection string
mongoose.connect('mongodb+srv://Comps381f:Comps381f@cluster0.wfzat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const User = require('./models/User');
const FavoriteChampion = require('./models/FavoriteChampion');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Session middleware
app.use(
  session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://Comps381f:Comps381f@cluster0.wfzat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' }),
  })
);

// Authentication middleware
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// Routes

// Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// Registration Page
app.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// Handle Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('register', { error: 'Username already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    req.session.userId = user._id;
    res.redirect('/favorites');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'An error occurred. Please try again.' });
  }
});

// Login Page
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// Handle Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user._id;
      res.redirect('/favorites');
    } else {
      res.render('login', { error: 'Invalid username or password.' });
    }
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'An error occurred. Please try again.' });
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// Favorites List
app.get('/favorites', isAuthenticated, async (req, res) => {
  try {
    const favorites = await FavoriteChampion.find({ userId: req.session.userId });
    res.render('favorites', { favorites });
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'An error occurred while fetching favorites.' });
  }
});

// Add Favorite Champion Form
app.get('/favorites/add', isAuthenticated, (req, res) => {
  res.render('addFavorite', {
    error: null,
    championName: '',
    role: '',
    notes: '',
    championData: championData ? Object.keys(championData).map(key => ({
      id: championData[key].id,
      name: championData[key].name,
      roles: championData[key].tags // Store all roles
    })) : [] // Ensure this is an array
  });
});

// Handle Add Favorite Champion
app.post('/favorites/add', isAuthenticated, async (req, res) => {
  let { championName, role, notes } = req.body;
  try {
    const normalizedChampionName = normalizeName(championName);
    const championKey = Object.keys(championData).find(key => normalizeName(key) === normalizedChampionName);

    if (championKey) {
      const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championKey}_0.jpg`;

      const favorite = new FavoriteChampion({
        userId: req.session.userId,
        championName: championKey,
        role,
        notes,
        championImage,
      });
      await favorite.save();
      res.redirect('/favorites');
    } else {
      res.render('addFavorite', { error: 'Champion does not exist.', championName, role, notes, championData: Object.keys(championData).map(key => ({ id: championData[key].id, name: championData[key].name })) });
    }
  } catch (err) {
    console.error(err);
    res.render('addFavorite', {
      error: 'An error occurred while adding the favorite champion.',
      championName,
      role,
      notes,
      championData: Object.keys(championData).map(key => ({ id: championData[key].id, name: championData[key].name })),
    });
  }
});

// Edit Favorite Champion Form
app.get('/favorites/edit/:id', isAuthenticated, async (req, res) => {
  try {
    const favorite = await FavoriteChampion.findOne({
      _id: req.params.id,
      userId: req.session.userId,
    });
    if (favorite) {
      res.render('editFavorite', { favorite, error: null, championData: Object.keys(championData).map(key => ({ id: championData[key].id, name: championData[key].name })) });
    } else {
      res.render('error', { message: 'Favorite champion not found.' });
    }
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'An error occurred.' });
  }
});

// Handle Edit Favorite Champion
app.post('/favorites/edit/:id', isAuthenticated, async (req, res) => {
  let { championName, role, notes } = req.body;
  try {
    const normalizedChampionName = normalizeName(championName);
    const championKey = Object.keys(championData).find(key => normalizeName(key) === normalizedChampionName);

    if (championKey) {
      const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championKey}_0.jpg`;

      await FavoriteChampion.findOneAndUpdate(
        { _id: req.params.id, userId: req.session.userId },
        { championName: championKey, role, notes, championImage }
      );
      res.redirect('/favorites');
    } else {
      const favorite = await FavoriteChampion.findById(req.params.id);
      res.render('editFavorite', {
        favorite,
        error: 'Champion does not exist.',
        championData: Object.keys(championData).map(key => ({ id: championData[key].id, name: championData[key].name })),
      });
    }
  } catch (err) {
    console.error(err);
    res.render('error', {
      message: 'An error occurred while updating the favorite champion.',
    });
  }
});

// Handle Delete Favorite Champion
app.post('/favorites/delete/:id', isAuthenticated, async (req, res) => {
  try {
    await FavoriteChampion.findOneAndDelete({ _id: req.params.id, userId: req.session.userId });
    res.redirect('/favorites');
  } catch (err) {
    console.error(err);
    res.render('error', { message: 'An error occurred while deleting the favorite champion.' });
  }
});

// Refresh Champion Data
app.post('/favorites/refresh', async (req, res) => {
  await fetchChampionData();
  res.redirect('/favorites/add');
});

// Error Handling
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found.' });
});

// Start the server
app.listen(8080, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:8080');
});
