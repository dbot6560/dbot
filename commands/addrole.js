const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('discord.js');
require('dotenv').config(); // load the .env file
const ROLE_NAME = process.env.ROLE_NAME;
module.exports = {
  data: new SlashCommandBuilder()
    .setName('addrole')
    .setDescription(`Adds the "${ROLE_NAME}" role to the user.`),
  execute: async function (interaction) {
    const button = new ButtonBuilder()
      .setCustomId('add_role')
      .setLabel('รับยศ')
      .setStyle('Primary');

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: `Click the button below to add the "${ROLE_NAME}" role to yourself:`,
      components: [row]
    });

  }
};
