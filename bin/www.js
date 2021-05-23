const app = require('../index');
const { createServer } = require('http');

const config = require('../config');

const startServer = async () => {

    const server = createServer(app);
    const { port } = config;

    await require("../loaders/index")(app);

    server.listen(port, () => {
        console.log(`server start...${port}`);
    })
}

startServer();