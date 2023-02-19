const { Events } = require('discord.js');
module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    async execute(member) {
        //const user = await User.findOne({ discordId: member.id });
        const user = member.id;

        if (user) {
            // send a welcome message to the user
            member.send({ content: `Welcome back, ${member}! You last joined on ${member.joinedAt}.` });
            //member.guild.channels.cache.get(user).send({ content: `Welcome back, ${member}! You last joined on ${member.joinedAt}.` });
        } else {
            member.send({ content: `Welcome to the server, ${member}!` });
            //member.guild.channels.cache.get(user).send({ content: `Welcome to the server, ${member}!` });
        }
    }
};