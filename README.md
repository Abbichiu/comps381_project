Group project group 3

1.**Project info:**

1.Project Name: League Of Legend champion manager

2.Group info:

group no: 3

Group member:

| Lee Ho Ming   | S12883890 |
|---------------|-----------|
|               |           |
| Tan Zhi Yuan  | s12896859 |
| Chiu Kwan Yuk | S12887330 |

2.**Project file intro:**

1.server.js

Setup and Dependencies:

The script uses Express for web server functionality, Mongoose for
MongoDB interactions, and several other libraries for session handling,
password hashing, and making HTTP requests.

Champion Data Fetching:fetchChampionData():

On server startup, it fetches the latest champion data from the League
of Legends API and stores it in a global variable (championData).

User Authentication:

isAuthenticated(req, res, next):

Middleware that checks if a user is logged in by verifying the session.
Redirects to the login page if not authenticated.

Routes:

| Home Page (/)                                    | Renders the main index page                                             |
|--------------------------------------------------|-------------------------------------------------------------------------|
| Registration (/register)                         | Displays the registration form and handles new user registrations.      |
| Login (/login):                                  | Displays the login form and authenticates users.                        |
| Logout (/logout)                                 | Logs out the user by destroying the session.                            |
| Favorites List (/favorites)                      | Displays the user\'s favorite champions, requiring authentication.      |
| Add Favorite Champion (/favorites/add)           | Displays a form to add a new favorite champion.                         |
| Edit Favorite Champion (/favorites/edit/:id)     | Displays a form to edit the remark notes an existing favorite champion. |
| Delete Favorite Champion (/favorites/delete/:id) | Deletes a specified favorite champion.                                  |
| Refresh Champion Data (/favorites/refresh):      | Refreshes the champion data from the API for recommendation.            |

2.package.json:

{

\"name\": \"381project-group3\",

\"version\": \"1.0.0\",

\"description\": \"Favorite Champions Manager\",

\"main\": \"server.js\",

\"scripts\": {

\"start\": \"node server.js\"

},

\"author\": \"Group 3\",

\"license\": \"ISC\",

\"dependencies\": {

\"axios\": \"\^1.5.0\",

\"bcrypt\": \"\^5.1.0\",

\"body-parser\": \"\^1.20.2\",

\"connect-mongo\": \"\^4.6.0\",

\"dotenv\": \"\^16.4.5\",

\"ejs\": \"\^3.1.9\",

\"express\": \"\^4.18.2\",

\"express-session\": \"\^1.17.3\",

\"mongoose\": \"\^7.3.1\"

}

}

3.public

[League-of-Legends-Logo.png]{.mark}

[[https://github.com/Abbichiu/comps381_project/blob/main/public/images/League-of-Legends-Logo.png]{.underline}](https://github.com/Abbichiu/comps381_project/blob/main/public/images/League-of-Legends-Logo.png)

4.views

[[https://github.com/Abbichiu/comps381_project/tree/main/views]{.underline}](https://github.com/Abbichiu/comps381_project/tree/main/views)

views/addFavorite.ejs

views/editFavorite.ejs

views/error.ejs

views/favorites.ejs

views/index.ejs

views/login.ejs

views/register.ejs

5.models

[[https://github.com/Abbichiu/comps381_project/tree/main/models]{.underline}](https://github.com/Abbichiu/comps381_project/tree/main/models)

models/FavoriteChampion.js

models/User.js

**3. The cloud-based URL:**

[**[https://comps381-project-3.onrender.com]{.underline}**](https://comps381-project-3.onrender.com/)

**4.Operation guides:**

**API Endpoints**

| Feature                  | HTTP Request Type | Path URI                                                                                                                                                            | Description                                            |
|--------------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| Home Page                | GET               | [[https://comps381-project-3.onrender.com/]{.underline}](https://comps381-project-3.onrender.com/)                                                                  | Renders the home page.                                 |
| Registration Page        | GET               | [[https://comps381-project-3.onrender.com/register]{.underline}](https://comps381-project-3.onrender.com/register)                                                  | Renders the registration page.                         |
|                          | POST              | [[https://comps381-project-3.onrender.com/register]{.underline}](https://comps381-project-3.onrender.com/register)                                                  | Creates a new user account.                            |
| Login Page               | GET               | [[login]{.underline}](https://comps381-project-3.onrender.com/login)                                                                                                | Renders the login page.                                |
|                          | POST              | [[login]{.underline}](https://comps381-project-3.onrender.com/login)                                                                                                | Authenticates a user and starts a session.             |
| Logout User              | GET               | [[https://comps381-project-3.onrender.com/logout]{.underline}](https://comps381-project-3.onrender.com/logout)                                                      | Logs out the user and destroys the session.            |
| View Favorites           | GET               | [[https://comps381-project-3.onrender.com/favorites]{.underline}](https://comps381-project-3.onrender.com/favorites)                                                | Displays the list of favorite champions for the user.  |
| Add Favorite Champion    | GET               | [[https://comps381-project-3.onrender.com/favorites/add]{.underline}](https://comps381-project-3.onrender.com/favorites/add)                                        | Renders the form to add a favorite champion.           |
|                          | POST              | [[add]{.underline}](https://comps381-project-3.onrender.com/favorites/add)                                                                                          | Saves a new favorite champion for the user.            |
| Edit Favorite Champion   | GET               | [[https://comps381-project-3.onrender.com/favorites/edit/]{.underline}](https://comps381-project-3.onrender.com/favorites/edit/674471516c04ce4cc393331c)champion_id | Renders the form to edit a specific favorite champion. |
|                          | POST              | [[https://comps381-project-3.onrender.com/favorites/edit/]{.underline}](https://comps381-project-3.onrender.com/favorites/edit/674471516c04ce4cc393331c)champion_id | Updates the specific favorite champion.                |
| Refresh Champion Data    | POST              | [[https://comps381-project-3.onrender.com/favorites/refresh]{.underline}](https://comps381-project-3.onrender.com/favorites/refresh)                                | Refreshes the champion data from the API.              |
| Delete Favorite Champion | POST              | [[https://comps381-project-3.onrender.com/favorites/delete/]{.underline}](https://comps381-project-3.onrender.com/favorites/delete/6%E2%80%A6)champion_id           | Deletes a specific favorite champion.                  |

1.login/register page:
{width="6.267716535433071in"
height="3.3472222222222223in"}

function(s): It shows the title of the page and the buttons to perform
register and login functions to access the

![]([https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/champion.png)](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/index.png)){width="6.267716535433071in"
height="3.5416666666666665in"}

After clicking on the login buttons, it provide the username and
password input fields to do user authorization.If the account has not
registered ,the error message will pop up to alert the users click on
the "Back to Home" button to do registration. the process is showed
below:

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/register.png){width="6.267716535433071in"
height="3.3333333333333335in"}

After a successful login, the champion data will show in this page.If
the user has not created the champions, the message "You have no
favourite champions yet" will pop up and the user needs to press on the"
Add a favorite champion" button to continue or
logout.Y![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/login.png){width="6.267716535433071in"
height="3.7083333333333335in"}ohjhj

you have no favorite champions yet.

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/champion.png)https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/champion.png)width="6.267716535433071in"
height="3.736111111111111in"}

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/championadd2.png)width="6.267716535433071in"
height="3.9722222222222223in"}

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/championadd1.png){width="6.267716535433071in"
height="3.513888888888889in"}

The above is the list of favorite champions recommended randomly by the
server and each of them has its name button to let users press it to add
them into their favorite champion list , select them into specific roles
with the provided list and input area for remark notes by the "Add
Favorite" button.

After added the champion:

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/update1.png){width="6.267716535433071in"
height="3.9027777777777777in"}the page will provide the edit buttons to
update the remark notes for the champions and delete function to delete
the champion as below:

1.edit

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/update2.png){width="6.267716535433071in"
height="4.361111111111111in"}

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/update3.png)media/image3.png){width="6.267716535433071in" height="3.75in"}

2.delete!(https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/delete.png)){width="6.267716535433071in"
height="4.416666666666667in"}

3.logout

Finally, if the user click on the logout button, the page will
automatically redirect the login page.

![](https://github.com/Abbichiu/comps381_project/blob/main/upload%20file/logout.png){width="6.267716535433071in"
height="4.027777777777778in"}

**Restful CRUD services with testing curl:**

**1. Home Page:if the home page is loaded correctly as below:**

curl -X GET
[[https://comps381-project-3.onrender.com/]{.underline}](https://comps381-project-3.onrender.com/)

YoYou hav![](media/image6.png){width="6.267716535433071in"
height="4.069444444444445in"}e no

favorite champions yet.u have no favorite

champions yet.You have no favorite champions ye

![](media/image22.png){width="6.267716535433071in"
height="4.305555555555555in"}

**2.Register:**

curl -X GET https://comps381-project-3.onrender.com/register

![](media/image12.png){width="6.267716535433071in"
height="2.8055555555555554in"}

**Try registering a new user:**

![](media/image24.png){width="6.267716535433071in"
height="2.5555555555555554in"}

curl -X POST https://comps381-project-3.onrender.com/register \\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"username=newuser&password=newpassword\"

if the user account is created, it will show the username already
exists.

**3. Login**

curl -X GET
[[https://comps381-project-3.onrender.com/login]{.underline}](https://comps381-project-3.onrender.com/login)

![](media/image16.png){width="6.267716535433071in"
height="2.236111111111111in"}

**Try login account:**

curl -X POST https://comps381-project-3.onrender.com/login \\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"username=newuser&password=newpassword\" \\

-c cookies.txt

Use the cookie file from the login session

![](media/image19.png){width="6.267716535433071in"
height="0.6388888888888888in"}

**4. View Favorites (requires user login)**

curl -X GET https://comps381-project-3.onrender.com/favorites \\

-b cookies.txt

Use the saved cookie file from the login session

![](media/image23.png){width="6.267716535433071in"
height="1.6388888888888888in"}

**5.Add Favorite Champion Page(require login)**

step1: use the login curl code on above to login account.

step2:curl -X GET https://comps381-project-3.onrender.com/favorites/add
\\

-c cookies.txt

in step2: after it loads into the page, it will show the 5 champions in
the selection of recommendation list randomly.

![](media/image7.png){width="6.267716535433071in" height="4.125in"}

Role: TOP/JG/MID/AD/SUP

notes:(inputarea)

For example:add Kled as a favorite champion with the specified role and
notes:

curl -X POST https://comps381-project-3.onrender.com/favorites/add \\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"championName=Kled&role=TOP&notes=my favorite champion\" \\

-b cookies.txt

**step3:After it is added, then load into the champions page to see the
result:**

curl -X GET https://comps381-project-3.onrender.com/favorites \\

-b cookies.txt

![](media/image14.png){width="6.267716535433071in"
height="2.5555555555555554in"}

**6.Edit update notes for champions:**

**Step1:Log In and Save Cookies:**

curl -X POST https://comps381-project-3.onrender.com/login \\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"username=newuser&password=newpassword\" \\

-c cookies.txt

**Step2:Find the champion ID:**

for example: Kleds' ID: 67447f5b81f50c5ba44490e3

**Step3: Update the notes information:**

curl -X POST
https://comps381-project-3.onrender.com/favorites/edit/67447f5b81f50c5ba44490e3
\\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"championName=Kled&role=TOP&notes=a good champion\" \\

-b cookies.txt

**Step4: After it is added, then load into the champions page to see the
result:**

curl -X GET https://comps381-project-3.onrender.com/favorites \\

![](media/image5.png){width="6.267716535433071in"
height="1.7638888888888888in"}

**7.Delete the champions:**

**Step1: login and save cookies:**

curl -X POST https://comps381-project-3.onrender.com/login \\

-H \"Content-Type: application/x-www-form-urlencoded\" \\

-d \"username=newuser&password=newpassword\" \\

-c cookies.txt

**Step2:find the champion ID and delete the champion:**

Since Kled\'s ID is 67447f5b81f50c5ba44490e3

curl -X POST
https://comps381-project-3.onrender.com/favorites/delete/67447f5b81f50c5ba44490e3
\\

-b cookies.txt

**Step3: View the result by loaded champion page:**

![](media/image20.png){width="6.267716535433071in"
height="2.7083333333333335in"}

The Kled champion is deleted.

**8.Log out:**

curl -X GET https://comps381-project-3.onrender.com/logout \\

-b cookies.txt

![](media/image1.png){width="6.267716535433071in"
height="0.6111111111111112in"}
