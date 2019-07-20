const fs = require('fs');

module.exports = {
    coded : "2019-05-06",

    name : "default",
    description : "This is the default Settings files for both new Guilds and Users.",
    usage : "bot.functions.get('default').execute('<Guild || User || SrpgUser || SrpgFaction || SrpgClan>', guild/user, bot)",

    execute(type, info, bot){

        //pathFinder = require(`../../../../../.././bot_db/ladyShadow/settings`)
        fsPathGuild = `.././bot_db/ladyShadow/settings/guilds/`;
        fsPathUser = `.././bot_db/ladyShadow/settings/users/`;
        fsPathSrpg = `.././bot_db/srpg/`;//<users || factions || clans>



        function guild(guild, bot){
            settings = {
                "partnered" : false,
                "name" : `${guild.name}`,
                "id" : `${guild.id}`,
                "joined" : `${Date.now()}`,
                "icon" : `${guild.iconURL}`,

                  "comment-general" : "General Settings",
                "prefix" : `${bot.defaults.prefix}`,
                "dmhelp" : bot.defaults.dmhelp,
                "color" : `${bot.defaults.color}`,

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
                "censor" : [],
                "partner" : {
                  "tag" : "",
                  "invite" : "",
                  "description" : "",
                  "rules" : []
                }
            };

            json = JSON.stringify(settings);
            fs.writeFileSync(`../.././bot_db/ladyShadow/settings/guilds/${guild.id}.json`, json)
            bot.collections.get('settings').execute(bot, fs);
        };

        function user(user, bot){
            //
        };

        function srpgUser(user, bot){
            file = {
                "id" : `${user.id}`,
                "name" : `${user.tag}`,
                "faction" : ``,
                "clan" : ``,

                "class" : ``,
                "stats" : {
                  "hp" : 0,
                  "def" : 0,
                  "str" : 0,
                },


                "gear" : {},
                "inv" : {},

                "misc" : {
                  "status" : `Pre-Registered`,
                  "legacy" : false,
                },
              };

            json = JSON.stringify(file);
            fs.writeFileSync(`../.././bot_db/srpg/users/${user.id}.json`, json)
            bot.srpg.users.set(user.id, file);
        };

        function srpgFaction(faction, bot){
            file = {
                "id" : `${faction.id}`, //--ID = Date.now()
                "name" : `${faction.name}`,
            };

            json = JSON.stringify(file);
            fs.writeFileSync(`../.././bot_db/srpg/factions/${faction.id}.json`, json)
            bot.srpg.factions.set(faction.id, file);
        };

        function srpgClan(clan, bot){
            file = {
              "id" : `${clan.id}`,
              "name" : `${clan.name}`,
            };

            json = JSON.stringify(file);
            fs.writeFileSync(`../.././bot_db/srpg/clans/${clan.id}.json`, json)
            bot.srpg.clans.set(clan.id, file);
        };



        switch(type){
            case("guild"):
                guild(info, bot);
            break;
            case("user"):
                user(info, bot);
            break;
            case("srpguser"):
                srpgUser(info, bot);
            break;
            case("srpgfaction"):
                srpgFaction(info, bot);
            break;
            case("srpgclan"):
                srpgClan(info, bot);
            break;
        };
    }
}
