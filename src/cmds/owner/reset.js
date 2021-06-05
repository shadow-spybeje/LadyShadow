let _settings = ["prefix", "dmhelp", "admin", "moderator", "staff", "mute", "welcome", "farewell", "rift", "modlog", "chatlog"];

module.exports = {
    coded : "2019-08-17",

    name : "reset",
    description : `Reset a servers settings with the given option.\n\nOptions: ${_settings.join(', ')}`,
    usage : "<guild.ID> <setting>",

    help : "dev",
    args : true,

    execute (message, args){
        let settings = ["prefix", "dmhelp", "admin", "moderator", "staff", "mute", "welcome", "farewell", "rift", "modlog", "chatlog"];


        let bot = message.client;
        let fs = require("fs");

        if(args.length <= 1) return message.channel.send(`I require 2 options to reset a server's settings....\n1) A server ID\n2) and a setting to reset..`);

        if(isNaN(args[0])) return message.channel.send(`\`${args[0]}\` is Not-A-Number...\nThis should be a server's ID`);
        let num = args.shift();

        if(!bot.guilds.cache.get(num)) return message.channel.send(`I'm not apart of a guild with the id of \`${num}\``);



        let included = true;
        settings.push("mod"); //Add "mod" as an alias for "moderator";

        if(settings.includes(args[0]) != true) included = false;
        settings.pop(); //Remove "mod" from the 'settings' list, now that we've checked for the "moderation" alias.

        if(!included) return message.channel.send(`\`${args[0]}\` is not equal to one of the following setting commands.\n\`\`\`js\n${_settings.join(', ')}\`\`\``);
        setting = args.shift();


        settings = bot.settings.g.get(num);
        switch(setting){
            case("prefix"): settings.prefix = bot.config.default.prefix; title = "Prefix set to `..`"; break;
            case("dmhelp"): settings.dmhelp = bot.config.default.dmhelp; title = "DM-Help set to `False`"; break;
            case("color"): settings.color = bot.config.default.color; title = "Color set to `#FFFF00`"; break;
            case("admin"): settings.admin = ""; title = "Admin Role Cleared"; break;
            case("mod"):case("moderator"): settings.moderator = ""; title = "Moderator Role Cleared"; break;
            case("staff"): settings.staff = ""; title = "Staff Role Cleared"; break;
            case("mute"): settings.mute = ""; title = "Mute Role Cleared"; break;
            case("welcome"): settings.welcome = ""; title = "Welcome Channel Cleared"; break;
            case("farewell"): settings.farewell = ""; title = "Farewell Channel Cleared"; break;
            case("rift"): settings.rift = ""; title = "Rift Channel Cleared"; break;
            case("modlog"): settings.modlog = ""; title = "Modlog Channel Cleared"; break;
            case("chatlog"): settings.chatlog = ""; title = "Chatlog Channel Cleared"; break;
        };

        let path = `../.././bot_db/ladyShadow/settings/guilds/${message.guild.id}.json`;
        json = JSON.stringify(settings);
        fs.writeFileSync(path, json);

        e = new discord.MessageEmbed();
        e.setTitle(`<:settings:561649800206876684> ${title}`);
        e.setColor(bot.settings.g.get("416906584900239370").color);
        message.channel.send(e);
    },
};
