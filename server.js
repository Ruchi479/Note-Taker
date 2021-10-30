//requiring express module
const express = require('express');
//path combines realtive and absolute paths
const path = require('path');
// require node lib pkg for reading and writing files
const fs = require('fs');

//if port is any route or 3001
const PORT = process.env.PORT || 3000;

//execute express and instantiate the server
const app = express();

//set up the express app to parse incoming string 
app.use(express.urlencoded({extended: true}));
//parse incoming JSON data
app.use(express.json());

//invoke app.use() and serve static files  from the '/public' folder or middleware for public
app.use(express.static("public"));


// listen() method onto our server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

