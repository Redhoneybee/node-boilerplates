const dotenv = require('dotenv').config();

if (dotenv.error) throw new Error(`Couldn't find ".env "file`);

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") module.exports = require('./dev');
else if (process.env.NODE_ENV === "production") module.exports = require('./prod');