module.exports = {
    coded : "2019-05-06",

    name : "message",
    description : "The \"Message Event\" handler.\nWhat does shadow do when she reads a message?",
    usage : "bot.events.get('message').execute(bot, message)",

    async execute(bot, message){

      /**
       * functions executer.
       ***
       * Run bot.functions.censor
       *
       * Run bot.functions.rift
       ***
       */


      //----------
      //----------


        let p = bot.prefix; let gPrefix = p.global; let oPrefix = p.owner;
        let blacklist = bot.config.client.blacklist;


        let settings = "";
        if(message.channel.type === 'text'){

          if(!message.guild.member(bot.user.id).permissions.has("SEND_MESSAGES")) return message.author.send(`I cannot post in ${message.channel.name},\nI do not have the \`SEND_MESSAGES\` permssion.`).catch(() => { return; });


          //----------
          //----------


          if(!bot.settings.g.has(message.guild.id) && message.content.startsWith(bot.prefix)){
            if(message.guild.settings) return //We've already gone through this process....

            message.channel.send("You're server seems to have eluded my Mages....\nI am now attempting to bring this server into focus....").then(m =>{

              g = message.guild;
              u = message.guild.owner.user;
              msg = `No settings file located for:\`\`\`css\n\ \ \ \ ID : ${g.id}\n\ Guild : ${g.name}\n\ Owner : ${u.tag}\n\ \ U.ID : ${u.id}\nJoined : ${g.members.get(bot.user.id).joinedAt}\`\`\`To correct this issue run the following command:\`\`\`js\n..eval bot.events.get('newGuild').execute(message.client, message.client.guilds.get(${g.id}))\`\`\``;

              try{
                bot.events.get('newGuild').execute(message.client, message.client.guilds.cache.get(g.id));

                settings = require(`../../../../../../.././bot_db/ladyShadow/settings/guilds/${g.id}.json`);
                bot.settings.g.set(settings.id, settings);

                m.edit(`You're server seems to have eluded my Mages....\nI am now attempting to bring this server into focus....\n\nThis realm has now been brought into focus!!`)
              }catch{
                bot.support.owners.forEach(o => {
                  bot.users.cache.get(o).send(msg);
                });

                m.edit(`You're server seems to have eluded my Mages....\nI am now attempting to bring this server into focus....\n\nI was unable to bring this realm into focus alone...\nI have contacted the ${bot.support.owners.length} supreme mages for assistance!!\n  You can contact <@213250789823610880> yourself if you'd like a more direct route.`)
              };
              return;
            });
          };



			if(!bot.settings.g.has(message.guild.id)){//Server doesn't have any settings...


			};














          settings = bot.settings.g.get(message.guild.id);
          if(!settings) message.guild.settings = false;
          if(!settings) settings = await bot.events.get('newGuild').execute(message.client, message.client.guilds.cache.get(message.guild.id));
          if(!settings) return console.log(`No Settings!! || ID - ${message.guild.id}`);


          //Launch "Censor" handler.
        //bot.functions.get('censor').execute(message);
          //Launch "Rift" handler. // Negates Cmd Function.
        if(message.channel.id == settings.rift) return bot.functions.get('rift').execute(message);

        };



          //Identify Prefix.
        let prefix = "";

          //Identify if Channel == "Dm's".
        let dm = false;
        if(message.channel.type == "dm"){
          prefix = gPrefix;
          dm = true;
        };


        //----------
        //----------


        if(message.content.startsWith(settings.prefix)) prefix = settings.prefix;
        if(message.content.startsWith(gPrefix)) prefix = gPrefix;
        if(message.content.startsWith(oPrefix)) prefix = oPrefix;
        //if(message.content.startsWith("<@347872963636494337>")) prefix = message.guild.members.cache.get(bot.user.id).displayname;
        if(!prefix) return;
        if(prefix === oPrefix && !bot.support.owners.includes(message.author.id)) return;

        //----------
        //----------

        if(message.author.bot) if(message.author.id != "568883858427346974" && message.author.id != "575977933492191232") return;
        const bl = blacklist.some(id => { if(message.author.id == id) return true; });
        if(bl == true && !bot.support.owners.includes(message.author.id)) return message.channel.send(`I'm sorry *\`Not Sorry\`* however I've been told to ignore your input.\n  Goodbye!!\`\`\`css\nYou've been blacklisted from use of this bot.\`\`\``);

        if(dm == true){
          if(!message.content.startsWith(prefix)) return;
        };


        //----------
        //----------


      //Launch "Command" handler.
        bot.functions.get('cmds').execute(message, prefix);
    }
};
