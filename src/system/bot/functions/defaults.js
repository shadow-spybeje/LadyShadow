const fs = require('fs');

module.exports = {
    coded : "2019-05-06",

    name : "default",
    description : "This is the default Settings files for both new Guilds and Users.",
    usage : "bot.functions.get('default').execute('<Guild || User>', info)",

    execute(type, info, bot){

        //pathFinder = require(`../../../../../.././bot_db/ladyShadow/settings`)
        fsPathGuild = `.././bot_db/ladyShadow/settings/guilds/`;
        fsPathUser = `.././bot_db/ladyShadow/settings/users/`;



        function guild(guild, bot){
            settings = {
                "partnered" : false,
                "name" : `${guild.name}`,
                "id" : `${guild.id}`,
                "joined" : `${Date.now()}`,
                "icon" : `${guild.iconURL}`,

                  "comment-general" : "General Settings",
                "prefix" : `${bot.default.prefix}`,
                "dmhelp" : bot.default.dmhelp,
                "color" : `${bot.default.color}`,

                  "comment-channels" : "Channel ID's",
                "welcome" : "",
                "farewell" : "",
                "modlog" : "",
                "chatlog" : "",
                "rift" : "",

                  "comment-roles" : "Role ID's",
                "admin" : "",
                "moderator" : "",
                "staff" : "",
                "join" : "",
                "muted" : "",

                  "comment-misc" : "Miscellaneous Things",
                "blacklist" : [],
                "censorWhitelist" : [],
                "censor" : []
            };

            json = JSON.stringify(settings);
            fs.writeFileSync(`../.././bot_db/ladyShadow/settings/guilds/${guild.id}.json`, json)
            bot.collections.get('settings').execute(bot, fs);
        };

        function user(user, bot){
            //
        };



        switch(type){
            case("guild"):
                guild(info, bot);
            break;
            case("user"):
                user(info, bot);
            break;
        };
    }
}
