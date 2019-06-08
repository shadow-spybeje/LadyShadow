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

        /*
        let settings = "";
        if(message.channel.type === 'text'){
          //settings = require(`./System/Settings/Guilds/${message.guild.id}.json`);

          if(!settings){
            g = message.guild;
            u = message.guild.owner.user;
            msg = `No settings file located for:\`\`\`css\n\ \ \ \ ID : ${g.id}\n\ Guild : ${g.name}\n\ Owner : ${u.tag}\n\ \ U.ID : ${u.id}\nJoined : ${g.members.get(bot.user.id).joinedAt}\`\`\``;

            owners.forEach(o => {
              //bot.users.get(o).send(msg);
            });
          }
          */


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

        if(message.author.bot) return;
        const bl = blacklist.some(id => { if(message.author.id == id) return true; });
        if(bl == true) return message.channel.send(`I'm sorry *\`Not Sorry\`* however I've been told to ignore your input.\n  Goodbye!!\`\`\`css\nYou've been blacklisted from use of this bot.\`\`\``);

        if(dm == true){
          if(!message.content.startsWith(prefix)) return;
        };


        //----------
        //----------


        /*if (!message.channel.permissionsFor(bot.user.id).has('SEND_MESSAGES')) {
            return message.author.send(`I cannot post in ${message.channel.name},\nI do not have the \`SEND_MESSAGES\` permssion.`)
              .catch(() => { return; });
        };*/


        //----------
        //----------


      //Launch "Command" handler.
        bot.functions.get('cmds').execute(message, prefix);
      //Launch "Censor" handler.
        //bot.functions.get('censor').execute(message);
      //Launch "Rift" handler.
        //bot.functions.get('rift').execute(message)

    }
};
