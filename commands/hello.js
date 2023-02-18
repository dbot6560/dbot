// commands/hello.js
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
      .setName('hello')
      .setDescription('Replies with Hello!'),
    execute(message, args) {
      message.channel.send(`Hello, ${message.author.username}!`);
    },
  };
  