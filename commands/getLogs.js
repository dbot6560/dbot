const Logs = require('../models/logs');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getlogs')
        .setDescription('Get the logs of the bot.'),
    async execute(interaction) {
        // Get the logs from the database
        Logs.findAll((error, logs) => {
            if (error) {
                return interaction.reply({ content: 'There was an error getting the logs.', ephemeral: true });
            }
            if (logs === null) {
                return interaction.reply({ content: 'There are no logs.', ephemeral: true });
            }

            // Create .csv file from logs and send it to the user
            const csv = logs.map(log => {
                return `${log.id},${log.message},${log.create_date},${log.create_by}`;
            }
            ).join('\n');
            interaction.reply({ content: 'Here are the logs:', files: [{ attachment: Buffer.from(csv), name: 'logs.csv' }] });
        });
    }
};