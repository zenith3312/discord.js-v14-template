const mongoose = require('mongoose') // npm i mongoose@6.0.2
const mongodbURL = process.env.MONGODBURL;
const { ActivityType } = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,
    async execute (client) {
        console.log ('Client is ready to be use right now')
        client.user.setStatus('idle');
        client.user.setActivity({ name: 'Subscribe to Raiden Community', type:ActivityType.Watching})

        if (!mongodbURL) return;

        await mongoose.connect(mongodbURL || ``, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if (mongoose.connect) {
            console.log('Database is running right now')
        }
    }
}