//declaring addon dependencies
const express = require("express");
const bcrypt = require("bcrypt");
var cors = require("cors");
const jwt = require("jsonwebtoken");
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("./database.json");
var db = low(adapter);

//initialising the app
const app = express();

//creating the secret key for JWT
const jwtSecretKey = "2df1644a6ee0666798271e42cc56e9c4"; //generated randomly, add to .env file later

//setting up cors and JWT
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));