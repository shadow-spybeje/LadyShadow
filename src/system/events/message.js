module.exports = {
    coded : "2019-05-06",

    name : "message",
    description : "The \"Message Event\" handler.\nWhat does shadow do when she reads a message?",
    usage : "bot.events.get('message').execute(bot, message)",

    execute(bot, message){

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


          if(!bot.settings.g.has(message.guild.id)){
            message.channel.send("You're server seems to have eluded my Mages..\nPlease contact one of our Support members to bring your server back into focus.");


            g = message.guild;
            u = message.guild.owner.user;
            msg = `No settings file located for:\`\`\`css\n\ \ \ \ ID : ${g.id}\n\ Guild : ${g.name}\n\ Owner : ${u.tag}\n\ \ U.ID : ${u.id}\nJoined : ${g.members.get(bot.user.id).joinedAt}\`\`\``;

            owners.forEach(o => {
              bot.users.get(o).send(msg);
            });

            return;
          };

          settings = bot.settings.g.get(message.guild.id);


          //Launch "Censor" handler.
        //bot.functions.get('censor').execute(message);
          //Launch "Rift" handler. // Negates Cmd Function.
        if(message.channel.id == settings.rift) return bot.functions.get('rift').execute(message);

        };


        if(!settings) return console.log(`No Settings!! || ID - ${message.guild.id}`);



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


        //if(message.content.startsWith(settings.prefix)) prefix = settings.prefix;
        if(message.content.startsWith(gPrefix)) prefix = gPrefix;
        if(message.content.startsWith(oPrefix)) prefix = oPrefix;
        //if(message.content.startsWith("<@347872963636494337>")) prefix = message.guild.members.get(bot.user.id).displayname;
        if(!prefix) return;


        //----------
        //----------

        if(message.author.bot) if(message.author.id != "568883858427346974") return;
        const bl = blacklist.some(id => { if(message.author.id == id) return true; });
        if(bl == true) return message.channel.send(`I'm sorry *\`Not Sorry\`* however I've been told to ignore your input.\n  Goodbye!!\`\`\`css\nYou've been blacklisted from use of this bot.\`\`\``);

        if(dm == true){
          if(!message.content.startsWith(prefix)) return;
        };


        //----------
        //----------


      //Launch "Command" handler.
        bot.functions.get('cmds').execute(message, prefix);
    }
};
