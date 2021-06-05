module.exports = {
    coded : "2019-03-30",
    name : "prefix",
    description : "Shows your servers Prefix.",
    guildOnly : true,
    help: "general",

    execute(message, args){
        bot = message.client;
        granted = bot.support.owners;
        granted.concat(bot.support.users);
        e = new discord.MessageEmbed();

        if(args.length != 0){
            if(granted.includes(message.author.id)){
                let id = args[0];
                if(!bot.guilds.cache.get(id)) {
                    e.setTitle(`No Guild Found`);
                    e.setColor("970045");
                    e.setDescription(`I am not in a guild with an ID of \`${id}\``);
                    return message.channel.send(e);
                };
                settings = bot.settings.g.get(id);
                e.setTitle(bot.guilds.cache.get(id).name);
                e.setColor(settings.color);
                e.setDescription(`\`\`\`css\nPrefix : ${settings.prefix}\`\`\``);
                return message.channel.send(e);
            };
        };

        settings = bot.settings.g.get(message.guild.id);
        e.setTitle(bot.guilds.cache.get(message.guild.id).name);
        e.setColor(settings.color);
        e.setDescription(`\`\`\`css\nPrefix : ${settings.prefix}\`\`\``);
        return message.channel.send(e);
    }
};
