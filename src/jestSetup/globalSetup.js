require('ts-node/register')
const { startServer } = require('../index');

module.exports = async () => {
    console.log('\nstart simulating server');
    global.httpServer = await startServer('server');
}
