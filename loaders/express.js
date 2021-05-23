const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

const config = require("../config");

// routes path
const { index } = config.routes;

// routes
const indexRoute = require('../routes/index');

module.exports = (app) => {

    // view engine
    // use to "npm i ejs" or "npm i pug" when use the view engine
    // app.set("views", "view");
    // app.set("view engine", "ejs");
    // app.set("view engine", "pug");

    // helmet
    app.use(helmet());

    // static path
    app.use(express.static("public"));

    // cors localhost
    app.use(cors({
        origin: `http://localhost:${config.port}`
    }));

    // body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // cookie
    app.use(cookieParser(config.cookie.secret));

    // session
    app.use(expressSession({
        secret: config.session.secret,
        name: config.session.name,
        resave: config.session.resave,
        saveUninitialized: config.session.saveUninitialized
    }));

    // routes 
    app.use(index, indexRoute);
}