const ThoriumServer = require('thorium-server').default;

const ressourceRoutes = require('./routes/ressources.js');

const app = ThoriumServer.app;
const server = ThoriumServer.server;
const ioserver = ThoriumServer.ioserver;

ThoriumServer.ssr.Render(`${__dirname}/Component.App.js`);

module.exports = ThoriumServer;
