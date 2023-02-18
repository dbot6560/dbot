require('dotenv').config(); // load the .env file
const logsChannelId = process.env.LOGS_CHANNEL_ID;
const token = process.env.TOKEN;
const {
    Client,
    GatewayIntentBits
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ]
});
module.exports = {
    writeLog(message) {
        const logsChannel = client.channels.cache.get(logsChannelId);
        if (logsChannel) {
          logsChannel.send(`[${new Date().toISOString()}] ${message}`);
        } else {
          console.log('Could not find logs channel');
        }
    }
};

client.login(token);