const { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addrole')
    .setDescription('Adds the "role-test-2" role to the user.'),
  execute: async function (interaction) {
    const button = new ButtonBuilder()
      .setCustomId('add_role')
      .setLabel('Add Role')
      .setStyle('Primary');

    const row = new ActionRowBuilder().addComponents(button);

    await interaction.reply({
      content: 'Click the button below to add the "role-test-2" role to yourself:',
      components: [row]
    });

  }
};
