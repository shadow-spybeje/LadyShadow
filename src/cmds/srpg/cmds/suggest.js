module.exports = {
    coded : "2019-07-10",

    name : "suggest",
    description : "Suggest a change, or update to Shadow's RPG.",
    usage : "<suggestion>",

    help : "support",
    args : true,

    execute(message, args){
        let bot = message.client;
        let e = new discord.RichEmbed();

        let em = bot.guilds.get("416906584900239370").emojis;
        let ch = bot.channels.get("558105957884887045");
        if(!ch) return message.channel.send("Uhm... There's no suggestions channel??\nYou really should notify the Devs!!");


        let user = bot.srpg.users.get(message.author.id);
        if(!user) return message.channel.send(`How can you suggest something for an rpg you've never even tried?\n\`${bot.settings.g.get(message.guild.id).prefix}srpg start <hunter, mage, warrior>\``);


        e.setAuthor(`${message.author.tag} (${message.author.id})\n${user.name} | Clan: ${bot.srpg.clans.get(user.clan).name}`);
        e.setTitle(`Suggestion #${bot.srpg.config.suggestions+1}`);
        e.setDescription(args.join(" "));
        e.setColor(bot.settings.g.get(message.guild.id).color);

        ch.send(e).then(msg => msg.react(em.get("598440628925366313")).then(msg.react(em.get("598440628501610558"))).catch(console.error)).catch(console.error);

        // Edit SRPG.Config
        fs = require('fs');

        file = bot.srpg.config;
        file.suggestions = file.suggestions+1;
        json = JSON.stringify(file);
        fs.writeFileSync(`./src/cmds/srpg/system/config.json`, json);
        bot.srpg.config = file;
    },
};
