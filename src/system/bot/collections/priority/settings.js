module.exports = {
    coded : "2019-05-12",

    name : "settings",
    decscription : "Collects all Guild and User settings used within Shadow.",
    usage : "bot.collections.get('settings').execute(bot, fs)",

    execute(bot, fs){
        function guilds(bot, fs){
            const guildFiles = fs.readdirSync('../.././bot_db/ladyShadow/settings/guilds').filter(file => file.endsWith('.json'));
            for (const file of guildFiles) { 	const settings = require(`../../../../../../.././bot_db/ladyShadow/settings/guilds/${file}`);
              bot.settings.g.set(settings.id, settings);
            };

            console.log(`System: Settings-G :: Loaded : ${bot.settings.g.size}`);
        };

        function users(bot, fs){
            const userFiles = fs.readdirSync('../.././bot_db/ladyShadow/settings/users').filter(file => file.endsWith('.json'));

            for (const file of userFiles) { 	const settings = require(`../../../../../../.././bot_db/ladyShadow/settings/users/${file}`);
              bot.settings.u.set(settings.id, settings);
            };

            console.log(`System: Settings-U :: Loaded : ${bot.settings.u.size}\n`);
        };



        function sUsers(bot, fs){
          const userFiles = fs.readdirSync('../.././bot_db/srpg/users').filter(file => file.endsWith('.json'));

          for (const file of userFiles) { 	const settings = require(`../../../../../../.././bot_db/srpg/users/${file}`);
            bot.srpg.users.set(settings.id, settings);
          };
        };

        function sFactions(bot, fs){
          const userFiles = fs.readdirSync('../.././bot_db/srpg/factions').filter(file => file.endsWith('.json'));

          for (const file of userFiles) { 	const settings = require(`../../../../../../.././bot_db/srpg/factions/${file}`);
            bot.srpg.factions.set(settings.id, settings);
          };
        };

        function sClans(bot, fs){
          const userFiles = fs.readdirSync('../.././bot_db/srpg/clans').filter(file => file.endsWith('.json'));

          for (const file of userFiles) { 	const settings = require(`../../../../../../.././bot_db/srpg/clans/${file}`);
            bot.srpg.factions.set(settings.id, settings);
          };
        };



        guilds(bot, fs);
        users(bot, fs);
        sUsers(bot, fs);
        sFactions(bot, fs);
        sClans(bot, fs);
    },
};
