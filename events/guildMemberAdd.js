const { Events } = require('discord.js');
module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    async execute(member) {
        //const user = await User.findOne({ discordId: member.id });
        const user = member.id;

        if (user) {
            member.guild.channels.cache.get('1073271617779662913').send({ content: `Welcome back, ${member}! You last joined on ${member.joinedAt}.` });
        } else {
            member.guild.channels.cache.get('1073271617779662913').send({ content: `Welcome to the server, ${member}!` });
        }
    }
};