module.exports = {
    bot: null,

    init(params){
        if(params.bot) this.bot = params.bot
    },

    /**
     * Parses an @user discord mention, and returns the ID of that mention.
     * @param {string} mention Discord User <@[!]DiscordID>
     */
    async getUserFromMention(mention) {
        let isMention = null;
        if(isNaN(mention)){ isMention = true; }else{ isMention = false; };

        // The id is the first and only match found.
        let matches = null;
        if(isMention){
            matches = mention.match(/^<@!?(\d+)>$/);
            if(!matches) return;
        }else{
            matches = ["", mention];
        };

        // However the first element in the matches array will be the entire mention, not just the ID,
        // so use index 1.
        const id = matches[1];

        //Grab the user. If we don't know who they are, ask discord.
        let u = null;
        try{
            u = await this.bot.users.fetch(id);
        }catch(err){
            console.log(`${err.name} -> ${err.message}`, 1);
        };
        //If the user isn't a true discord user, return undefined.
        if(!u) return;

        return u;
    }
};
