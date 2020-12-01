const {
    chai,
    factory,
    interactsWithMail,
    mongoose,
    purgeDb,
    server,
    should
} = require('./support/setup')

require('./support/factories')
after(async () => {
    await factory.cleanUp()
    await purgeDb()
    server.shutdown();
    mongoose.disconnect();
});
afterEach(async () => {
    await factory.cleanUp()
    await purgeDb()
})

module.exports = {
	chai,
    factory,
    interactsWithMail,
	server,
    mongoose,
    should
};