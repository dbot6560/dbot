const { writeLog } = require('../helpers/writeLog');
const { Events } = require('discord.js');
require('dotenv').config(); // load the .env file
const ROLE_NAME = process.env.ROLE_NAME;

const Users = require('../models/User');


module.exports = {
  name: Events.InteractionCreate,
  once: false,
  async execute(interaction) {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'add_role') {
      Users.findById(interaction.user.id, async (error, user) => {

        if (error) {
          interaction.reply({ content: 'Error!', ephemeral: true });
          return;
        }

        if (user === null) {
          interaction.reply({ content: 'You are not registered!', ephemeral: true });
          return;
        }

        const member = interaction.guild.members.cache.get(interaction.user.id);

        if(user.banned === 1) {
          const message = `Banned: Canceled add role for user id ${member.user.id} : ${member.user.tag}`;
          writeLog(message, 'System');
          return interaction.reply({ content: 'You are banned!', ephemeral: true });
        }

        const role = interaction.guild.roles.cache.find(role => role.name === ROLE_NAME);
        await member.roles.add(role);
        interaction.reply({ content: 'Role added!', ephemeral: true });
        
      });
    }
  },
};

