module.exports = {
    coded : "2021-01-21",
    name : "MentionedID",
    usage : "bot.functions.get('MentionedID').execute(ID)",

    /**
     * Returns a discord user.
     * @param {string} mention a string representing a discord mention, or the discord User's ID.
     */
    async execute(mention) {
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
            u = await bot.users.fetch(id);
        }catch(err){
            bot.print(`${err.name} -> ${err.message}`, 1);
        };
        //If the user isn't a true discord user, return undefined.
        if(!u) return;

        return u;
    }
};
