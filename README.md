# Authenticate System

User Authentication:

● Implemented user authentication using JSON Web Tokens (JWT). Users could be
 register, log in, and obtain a token to authenticate API requests.
 
● Implemented authentication middleware to secure sensitive API endpoints.

● A set of APIs to signup, login and logout the users.

Method :- Post Request

http://localhost:3000/api/auth/signup 

http://localhost:3000/api/auth/login

http://localhost:3000/api/auth/logout

● A set of APIs to fetching all signup users, Fetch user BY Id, Update User By Id, Delete User By Id.

Method :- Get Request

http://localhost:3000/api/user 

http://localhost:3000/api/user/:id

Method :- Put Request

http://localhost:3000/api/user/:id 

Method :- Delete Request

http://localhost:3000/api/user/:id 

● A library Swagger used for api documentation.

http://localhost:3000/api-docs


## Version

- node - v20.5.1,
- express: v4.18.2,
- nodemon: v3.1.0,
- mongoose: v8.2.0,
- bcryptjs: v2.4.3
- cookie-parser: v1.4.6
- dotenv: v16.4.5
- jsonwebtoken: v9.0.2
- swagger-ui-express: v5.0.0

## created_at

27 feb 2024

## To Start

- `$ npm start`
- `$ base url = 127.0.0.1:3000`
