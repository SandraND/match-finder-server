# Match Finder

- Match Finder is a web application to find and create groups with other players so you can meet them and 
play your favorite table games. 

## User Stories

  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
  
  **500:** As an anon/user I can see a 505 page if the server is not working and I know it's not my fault.
  
  **Signup:** As an anon I can sign up in the platform so that I can start creating groups and see groups.
  
  **Login:** As a user I can login to the platform so that I can see all the groups.
  
  **Logout:** As a user I can logout from the platform so no one else can use it. 
  
  **Home Page:** As a user I want a home page so that I can decide what I want to do next.
  
  **My Profile:** As a user I want to see my profile so that I can see the information of my groups.
  
  **Other user profile:** As a user I want to see the other users profile so that I can see the user information.
  
  **Create group:** As a user I want to create a group so that I can find people to play it with.
  
  **List group:** As a user I want to see the groups so that I can choose one to apply.
  
  **Detail group:** As a user I want to see the details of a group so I can decide if I want to join that game. 
  
  **Apply group:** As a user I want to apply a group so that I can meet with the other players.

## Backlog

  **Accept request:** As a user user I want to accept requests so that I can add people to my group.
  
  **Reject request:** As a user I want to reject requests so that I can avoid certain people to join to my group.

  **Notifications:** As a user I want to recieve notifications so that I can see the status of my aplications.
  
  **Ratings:** As a user I want to rate a group users so that I can rate a user after a game.
  
  **Add friends:** As a user I want to add friends so that I can stay in touch with them.
  
  **List friends:** As a user I want to see a list of my friends so that I can see all my friends in the web.
  
  **Edit profile:** As a user I want to edit my profile so that I can edit my personal information.
  
  **Recent games:** As a user I want to see the recent games so that I can see the recent added games.
  
  **Map:** As a user I want to see a map so that I can see in a map where are the groups and games.
 
  **List games:** As a user I want to see the games filtered so that I can decide easily in wich game I want to play.
  
  **State:** As a user I want to see a status so that I can see the status of my aplication in a group.
  
  **Delete group:** As a user I want to delete a group so that I can delete a group that I created.
  
  **Edit group:** As a user I want to edit a group so that I can edit the information of a group.
  
# Client

## Routes

  - / - Homepage
  - /auth/signup - Signup form
  - /auth/login - Login form
  - /groups - groups list
  - /games - games list
  - /groups/:id - group detail
  - /profile - my details
  - /groups/add

  ### Backlog

  - /profile/:id

## Services

- Auth Service
  - auth.login(user, password)
  - auth.signup(user, password)
  - auth.logout()
  - auth.me()
  - auth.getUser()
  - auth.setUser()
- Group Service
  - createOne(data)
  - getUserGroups(userID)
  - acceptOne(groupID)
  - rejectOne(groupID)
  - getAll()
  - getOne(id)
  - deleteOne(id) 
  - getAllGames() 

## Pages

- 404/500 Page
- Sign in Page
- Log in Page
- Home Page
- Create Group Page
- Search Group Page
- My Profile Page
- Detail Group Page
- List Games Page
- My Groups Page

## Components

- Navbar component
- My Groups Card component
- Accepted requests Card component
- Game list component
- Game Card component
- Recent groups

## IO

- Group List Component outputs handle Reject user in my profile page.
- Group List Component outputs handle Accept user in my profile page.
- Game List Component inputs single game to Game Card.
- Accepted Request Component outputs handle Cancel in my profile page.

## Guards

- if logged in cannot access login/signup page.
- if not logged in cannot access profile page.
- if not logged in cannot access create-group page.
- if not logged in cannot access search-group page.
- if not logged in cannot acces detail-group page.
- if not logged in cannot access list-games page.
- if not logged in cannot acces my-groups page.

# Server

## Models

  User model

  ```
  username - String // required
  password - // required
  ```

  Group model

  ```
  owner - userID
  groupName - String // required & unique
  numPlayers - Number // required
  numPoints - Number
  gameType - String
  city - String // required
  address - String // required
  date - Date // required
  description - String // required
  game - Enum // required
  players - userID
 
```

## API Endpoints/Backend Routes

  AUTH

  - GET /auth/me
  - POST /auth/signup
  - POST /auth/login
  - POST /auth/logout

  GROUP

  - POST /groups
  - GET / groups/my-groups
  - PUT /groups/accept
  - PUT /groups/reject
  - GET /groups
  - GET /groups/:id
  - GET /games
  
