function clean(text){
  if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else return text;
};

module.exports = {
  coded : "2019-02-26",
  name : "eval",
  description : "....",
  usage : "<code>",

  args : true,
  owner : true,

  help : "dev",

  async execute (message, args){

    //Define eval phrases

      const discord = require('discord.js');
      const fs = require('fs');

      const e = new discord.MessageEmbed();
      const bot = message.client;
      var prefix = bot.prefix;
      var config = bot.config;

      //var owners = []; bot.support.owners.forEach(owner => owners.push(owner+" | "+bot.users.cache.get(owner).tag));
      //var support = []; bot.support.users.forEach(user => support.push(user+" | "+bot.users.cache.get(user).tag));

      if(message.channel.type == "text"){
        settings = bot.settings.g.get(message.guild.id);
      } else{
        settings = "";
      };

      var prefixes = bot.prefix
      if(settings) var prefix = settings.prefix;


      k = function(){ process.exit(); };
      s = function(){ srpg=require('srpg'); };
      terminate = function() {message.channel.send(":ok_hand:")}
    //----------
    //----------


    try{
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
      message.channel.send(clean(evaled), {code:"js", split:true});
    }catch(err){
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  },
};
