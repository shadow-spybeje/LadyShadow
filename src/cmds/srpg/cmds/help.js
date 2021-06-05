discord = require("discord.js");

module.exports = {
    coded : "2019-07-09",

    name : "help",
    description : "S.RPG Help.",
    usage : "[cmd]",

    help : "basic",

    execute(message){
        return message.channel.send("This cmd is still being created.\nPlease visit the support server for more info!!\n\n\nBasic Help\n\n• changelog\n• shop\n• splash\n• start\n• suggest,\n• user");

        bot = message.client;

        bot.cmds.help = new discord.Collection();
        bot.cmds.srpg.forEach(cmd => {
            if(cmd.help == "basic") bot.cmds.help.basic.set(cmd.name, cmd);
            if(cmd.help == "general") bot.cmds.help.general.set(cmd.name, cmd);
            if(cmd.help == "other") bot.cmds.help.other.set(cmd.name, cmd);
            if(cmd.help == "support") bot.cmds.help.support.set(cmd.name, cmd);
            if(cmd.help == "dev") bot.cmds.help.dev.set(cmd.name, cmd);
        });

        const cmdsBasic = bot.cmds.help.basic;
        const cmdsGeneral = bot.cmds.help.general;
        const cmdsOther = bot.cmds.help.other;
        const cmdsSupport = bot.cmds.help.support;
        const cmdsDev = bot.cmds.help.dev;



        const data = [];
        const list = [];

       //Set cmd global.Variables;
        let prefix = "";
        let color = "";
        let ch = "";
        let dmhelp = "";

        prefix = bot.prefix.global;
        dmhelp = bot.config.default.dmhelp;
        color = bot.config.default.color;

        if(message.channel.type == "text"){
            settings = require(`../../../../../.././bot_db/ladyShadow/settings/guilds/${message.guild.id}.json`);
            dmhelp = settings.dmhelp;

            if(dmhelp) {
              ch = message.author
            }else{
              prefix = settings.prefix;
              color = settings.color;
              ch = message.channel;
            };
        } else {
            ch = message.author;
        };


        if(args.length == 0){
            e.setTitle(`SRPG Help Categories`);
            e.setColor(color);
            e.setDescription(`\`\`\`css\n[General] : <1 | general>\n  [Other] : <2 | other>\n   [Basic] : <3 | basic>\`\`\``);
            e.setFooter(`${prefix}help <category> | ${prefix}help other`);
            return ch.send(e).then(msg => {
                if(dmhelp){
                  message.channel.send(`Okay ${message.author}, I've sent you a list of my command categories!!`);
                };
            })
              .catch(err => {
                message.reply('there was an error sending you a DM.\nPlease make sure you have Server DM\'s set to true and then retry this command.\n`Server --> Privacy --> Allow DM\'s = true`');
                message.channel.send(err, {code: 'css'})
            });

          }else if(args.length == 1){

            let cat = args[0].toLowerCase();
            let cmds = "";

            switch(cat){
              case("general"):
              case("1"):
                cat = "General";
                cmds = cmdsGeneral;
              break;
              case("other"):
              case("2"):
                cat = "Other";
                cmds = cmdsOther
              break;
              case("basic"):
              case("3"):
                cat = "Basic";
                cmds = cmdsBasic;
              break;
              case("support"):
              case("4"):
                cat = "Support";
                cmds = cmdsSupport;
              break;
              case("dev"):
              case("5"):
                cat = "Developer";
                cmds = cmdsDev;
              break;
              case("-"):

                isStaff(message.author.id);


                e.setTitle(`Other Categories`);
                e.setColor(color);
                e.setDescription(`\`\`\`css\n  [Support] : <4 | suppoprt>\n[Developer] : <5 | dev>\`\`\``);
                e.setFooter(`${prefix}help <category>`);

                return ch.send(e).then(msg => {
                  if(dmhelp){
                    message.channel.send(`Okay ${message.author}, I've sent you a list of my ${cat} commands!!`);
                  };
                }).catch(err => {
                  message.reply('there was an error sending you a DM.\nPlease make sure you have Server DM\'s set to true and then retry this command.\n`Server --> Privacy --> Allow DM\'s = true`');
                  message.channel.send(err, {code: 'css'})
                });
              break;
              default:

                //Specific Command Help
                cmds = new discord.Collection();
                bot.cmds.general.forEach(cmd => { cmds.set(cmd.name, cmd) });
                bot.cmds.support.forEach(cmd => { cmds.set(cmd.name, cmd) });
                bot.cmds.owner.forEach(cmd => { cmds.set(cmd.name, cmd) });

                const name = args[0].toLowerCase();
                const cmd = cmds.get(name) || cmds.find(c => c.aliases && c.aliases.includes(name));
                if (!cmd){
                    e.setColor("970045")
                    e.setDescription(`I don't have a \`|${name}|\` command or allias.`);
                  return ch.send(e);
                }

                e.setTitle(`Command Help\n[-${cmd.name}-]`);
                e.setColor(color);

                if (cmd.aliases) e.addField(`Aliases`, `\`\`\`css\n${cmd.aliases.join(', ')}\`\`\``, true);
                if (cmd.usage) e.addField(`Usage`, `\`\`\`css\n${prefix}${cmd.name} ${cmd.usage}\`\`\``, true);
                if (cmd.description) e.addField(`Description`, `\`\`\`css\n${cmd.description}\`\`\``);

                e.setFooter(`${bot.user.username}'s Help | ${bot.users.cache.get(bot.support.owners[0]).tag} | ${bot.users.cache.get(bot.support.owners[1]).tag}`);
                return ch.send(e);
            };

            if(cmds.size == 0) cmds = bot.nil

            cmds.map(cmd => {
              if(cmd.easteregg)return;
              list.push(cmd.name);
            });

            e.setTitle(`${cat} Commands`);
            e.setColor(color);
            e.setDescription(`\`\`\`css\n• ${list.join(',\n• ')}\`\`\``);
            e.setFooter(`Command Help | ${prefix}help <command>`);

            ch.send(e).then(msg => {
              if(dmhelp){
                message.channel.send(`Okay ${message.author}, I've sent you a list of my ${cat} commands!!`);
              };
            }).catch(err => {
              message.reply('there was an error sending you a DM.\nPlease make sure you have Server DM\'s set to true and then retry this command.\n`Server --> Privacy --> Allow DM\'s = true`');
              message.channel.send(err, {code: 'css'})
            });
        };

        /** Categories:
         * basic   -- start, help
         * general -- shop
         * other   -- changelog, suggest
         * support -- // RPG Admin's
         * dev     -- load, reload
         */
    },
};
