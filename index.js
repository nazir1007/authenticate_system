//------require the Library--------//
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const swaggerUi = require('swagger-ui-express');

// ---------- Importing required routes ---------- //
const swaggerDocument = require('./swagger/swagger.json');
const authRoute = require('./routes/auth_route');
const userRoute = require("./routes/user_route");

// ---------- Importing database file ---------- //
const db = require('./config/mongoose');


const app = express();
const Port = process.env.Port || 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(Port, () =>{
    console.log(`Server is running on port: ${Port}`);
})