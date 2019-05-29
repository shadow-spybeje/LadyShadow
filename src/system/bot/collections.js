const package = require('../../.././package.json');
const config = require('./config.json')
const discord = require('discord.js');
const fs = require('fs');

module.exports = {
    coded : "2019-05-04",
    name : "collections",
    description : "begins the exe process fo the `./collections` parent folder.",
    usage : "[unknown Usage]",

    execute(bot){

        //all the lil' niftyness's when running "eval bot.<type>"

        /**
         * eval bot.<General>
         */
        function general(bot) {

          //commands.
            bot.cmds = new discord.Collection();
          //General Commands.
            bot.cmds.general = new discord.Collection();
          //Support Commands.
            bot.cmds.support = new discord.Collection();
          //Owner Commands.
            bot.cmds.owner = new discord.Collection();
          //Unloaded Commands.
            bot.cmds.unloaded = new discord.Collection();
          //shadows collections, used to populate these collections.
            bot.collections = new discord.Collection();
          //configuration file.
            bot.config = config;
          //basic settings.
            bot.defaults = bot.config.default;
          //event handler
            bot.events = new discord.Collection();
          //shadow's toys.
            bot.functions = new discord.Collection();
          //Prefixes
            bot.prefix = config.prefixes;
          //Settings Files
            bot.settings = new discord.Collection();
          //server setting files.
            bot.settings.g = new discord.Collection();
          //User Settings Files
            bot.settings.u = new discord.Collection();
          //SRPG save location.
            bot.srpg = new discord.Collection();
          //Bot Login Token.
            bot.token = require('../../../../.././tokens.json').LadyShadow;
          //timezone info -- cuz why not?
            bot.tz = new discord.Collection();
          //user setting files.
            bot.u = new discord.Collection();

            return bot;
        };


        /**
         * eval bot.support.<Support>
         */
        function support(bot){
          //begin the "support" branch.
            bot.support = new discord.Collection();
          //support commands.
            bot.support.cmds = new discord.Collection();
          //support servers.
            bot.support.shadowServers = config.client.shadowServers;
          //bot owners.
            bot.support.owners = config.client.owners;
          //bot support team.
            bot.support.users = config.client.support;

            return bot;
        };


        /**
         * eval bot.system.<System>
         */
        function system(bot){
          //Bot System Informtion
            bot.system = new discord.Collection();
          //Bot isAlpha?
            bot.system.alpha = false; if(package.alpha) bot.system.alpha = true
        }


        //(FORMATTING)
        //--Begin suppling our collections some usefull information.

        //EDITING

        sys = "System:"


        async function collect(bot, fs){
          let priority = [];
          let standard = [];

            function priorityCollections(bot, fs){

              const collectionss = fs.readdirSync('./src/system/bot/collections/priority').filter(file => file.endsWith('.js'));
              for (const file of collectionss) { 	const collection = require(`./collections/priority/${file}`);
                  bot.collections.set(collection.name, collection);
                  priority.push(`[★]`+collection.name)
              };

              return bot;
            }
            await priorityCollections(bot, fs);

            function standardCollections(bot, fs){

              const collectionss = fs.readdirSync('./src/system/bot/collections').filter(file => file.endsWith('.js'));
              for (const file of collectionss) { 	const collection = require(`./collections/${file}`);
                  bot.collections.set(collection.name, collection);
                  standard.push(collection.name)
              };

              return bot;
            }
            await standardCollections(bot, fs);
            let array = priority.concat(standard);
            console.log(sys+` Collections :: Loaded : ${array.length} Type : [★] - Priority\n• • ${array.join()}\n`)

        };

        async function runFile(bot, fs){
          await general(bot);
          await support(bot);
          await system(bot);
          await collect(bot, fs);
          await bot.collections.forEach(collection => {
            collection.execute(bot, fs)
          });

          await console.log(`\n---==☆ End System ☆==---\n`);
          return bot;
        };
        runFile(bot, fs);
    }
};
