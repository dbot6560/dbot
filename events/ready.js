const { Events } = require('discord.js');
module.exports = {
    name: Events.Ready,
    once: false,
    async execute(client) {
        console.log(`Logged in as ${client.user.tag}`);
    }
};