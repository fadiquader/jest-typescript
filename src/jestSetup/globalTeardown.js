
module.exports = async () => {
    console.log('stop simulating server: ', global.httpServer);
    global.httpServer = null;
}
