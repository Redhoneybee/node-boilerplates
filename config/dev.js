
module.exports = {
    // server port
    port: process.env.PORT,

    // session info
    session: {
        secret: process.env.SESSION_SECRET,
        name: process.env.SESSION_NAME,
        resave: true,
        saveUninitialized: true
    },

    // cookie info
    cookie: {
        secret: process.env.COOKIE_SECRET,
    },

    // routes 
    routes: {
        index: "/",
    }
}