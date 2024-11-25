Certainly! Here’s a structured `README.md` that you can use for your project:

```markdown
# League Of Legends Champion Manager

## Project Info

### Project Name
**League Of Legends Champion Manager**

### Group Info
- **Group No:** 3

#### Group Members
- **Lee Ho Ming** (S12883890)
- **Chiu Kwan Yuk** (S12887330)

## Project File Introduction

### 1. `server.js`

#### Setup and Dependencies
This script uses:
- **Express** for web server functionality.
- **Mongoose** for MongoDB interactions.
- Various libraries for session handling, password hashing, and making HTTP requests.

#### Champion Data Fetching
- **Function:** `fetchChampionData()`
  - On server startup, it fetches the latest champion data from the League of Legends API and stores it in a global variable called `championData`.

#### User Authentication
- **Function:** `isAuthenticated(req, res, next)`
  - Middleware that checks if a user is logged in by verifying the session. Redirects to the login page if not authenticated.

### 2. API Routes
| Route                           | Description                                                          |
|---------------------------------|----------------------------------------------------------------------|
| `/`                             | Renders the main index page.                                        |
| `/register`                     | Displays the registration form and handles new user registrations.  |
| `/login`                        | Displays the login form and authenticates users.                    |
| `/logout`                       | Logs out the user by destroying the session.                        |
| `/favorites`                    | Displays the user's favorite champions (requires authentication).    |
| `/favorites/add`                | Displays a form to add a new favorite champion.                     |
| `/favorites/edit/:id`           | Displays a form to edit an existing favorite champion.              |
| `/favorites/delete/:id`         | Deletes a specified favorite champion.                              |
| `/favorites/refresh`            | Refreshes the champion data from the API for recommendation.        |

### 3. `package.json`
```json
{
  "name": "381project-group3",
  "version": "1.0.0",
  "description": "Favorite Champions Manager",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "Group 3",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.5.0",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "connect-mongo": "^4.6.0",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "mongoose": "^7.3.1"
  }
}
```

### 4. Public Assets
- **Logo**: ![League of Legends Logo][]### 5. Views- [View Directory](https://github.com/Abbichiu/comps381_project/tree/main/views)  - `addFavorite.ejs`  - `editFavorite.ejs`  - `error.ejs`  - `favorites.ejs`  - `index.ejs`  - `login.ejs`  - `register.ejs`### 6. Models- [Model Directory](https://github.com/Abbichiu/comps381_project/tree/main/models)  - `FavoriteChampion.js`  - `User.js`## Cloud-based URL[Live Project](https://comps381-project-3.onrender.com)## Operation Guides### API Endpoints| Feature           | HTTP Request Type | Path URI                                                              | Description                                        ||-------------------|-------------------|-----------------------------------------------------------------------|----------------------------------------------------|| Home Page         | GET               | `https://comps381-project-3.onrender.com/`                           | Renders the home page.                             || Registration Page | GET               | `https://comps381-project-3.onrender.com/register`                   | Renders the registration page.                     ||                   | POST              | `https://comps381-project-3.onrender.com/register`                   | Creates a new user account.                        || Login Page        | GET               | `https://comps381-project-3.onrender.com/login`                      | Renders the login page.                            ||                   | POST              | `https://comps381-project-3.onrender.com/login`                      | Authenticates a user and starts a session.        || Logout User       | GET               | `https://comps381-project-3.onrender.com/logout`                     | Logs out the user and destroys the session.       || View Favorites     | GET               | `https://comps381-project-3.onrender.com/favorites`                  | Displays the list of favorite champions for the user. || Add Favorite Champion | GET           | `https://comps381-project-3.onrender.com/favorites/add`              | Renders the form to add a favorite champion.       ||                   | POST              | `https://comps381-project-3.onrender.com/favorites/add`              | Saves a new favorite champion for the user.       || Edit Favorite Champion | GET          | `https://comps381-project-3.onrender.com/favorites/edit/champion_id` | Renders the form to edit a specific favorite champion. ||                   | POST              | `https://comps381-project-3.onrender.com/favorites/edit/champion_id` | Updates the specific favorite champion.            || Refresh Champion Data | POST          | `https://comps381-project-3.onrender.com/favorites/refresh`          | Refreshes the champion data from the API.         || Delete Favorite Champion | POST       | `https://comps381-project-3.onrender.com/favorites/delete/champion_id` | Deletes a specific favorite champion.              |### Sample Commands#### 1. Home Page```bashcurl -X GET https://comps381-project-3.onrender.com/```#### 2. Register```bashcurl -X GET https://comps381-project-3.onrender.com/register```To register:```bashcurl -X POST https://comps381-project-3.onrender.com/register \-H "Content-Type: application/x-www-form-urlencoded" \-d "username=newuser&password=newpassword"```#### 3. Login```bashcurl -X GET https://comps381-project-3.onrender.com/login```To login:```bashcurl -X POST https://comps381-project-3.onrender.com/login \-H "Content-Type: application/x-www-form-urlencoded" \-d "username=newuser&password=newpassword" \-c cookies.txt```Make sure to use the cookie file for subsequent requests.#### 4. View Favorites```bashcurl -X GET https://comps381-project-3.onrender.com/favorites \-b cookies.txt```#### 5. Add Favorite ChampionTo add a champion:```bashcurl -X POST https://comps381-project-3.onrender.com/favorites/add \-H "Content-Type: application/x-www-form-urlencoded" \-d "championName=Kled&role=TOP&notes=my favorite champion" \-b cookies.txt```#### 6. Edit Champion Notes```bashcurl -X POST https://comps381-project-3.onrender.com/favorites/edit/champion_id \-H "Content-Type: application/x-www-form-urlencoded" \-d "championName=Kled&role=TOP&notes=a good champion" \-b cookies.txt```#### 7. Delete Champion```bashcurl -X POST https://comps381-project-3.onrender.com/favorites/delete/champion_id \-b cookies.txt```#### 8. Logout```bashcurl -X GET https://comps381-project-3.onrender.com/logout \-b cookies.txt```## ConclusionThis document serves as a guide for using the League Of Legends Champion Manager application. For further details, refer to the code and comments within the project files.```Feel free to modify any sections or add more details as needed!
