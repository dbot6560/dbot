module.exports = {
    getIdFromDiscord(discord){
        // discord:1062196971391160401 return regex number only
        return discord.match(/\d+/g).join('');
    }
};