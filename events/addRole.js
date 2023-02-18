const { writeLog } = require('../helpers/writeLog');
const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction) {
      if (!interaction.isButton()) return;

      if (interaction.customId === 'add_role') {
        const role = interaction.guild.roles.cache.find(role => role.name === 'role-test-2');
        const member = interaction.guild.members.cache.get(interaction.user.id);
        await member.roles.add(role);
        interaction.reply({ content: 'Role added!', ephemeral: true });
        writeLog(`Role added to ${member.user.tag}`);
      }
    },
  };

  