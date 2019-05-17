module.exports = {
  coded : "2019-03-01",
  name : "status",
  aliases : ["bot", "info"],
  description : "Provides information regarding Shadow.",
  help : "general",


  execute(message){
    const bot = message.client;
    e = new discord.RichEmbed();
    /*
      Name
      ID
      Guilds
      Members
    */

    let users = 0;
    let bots = 0;

    bot.users.forEach(user => {
        if(user.bot){
            bots++
        };
    });
    bot.guilds.forEach(g => {
        users+=g.memberCount;
    });

    users = users - bots;


    let general = bot.cmds.general.size;
    let support = bot.cmds.support.size;
    let owner = bot.cmds.owner.size;
    let unloaded = bot.cmds.unloaded.size;

    let cmds = general+support+owner;


   dV = require('../../.././node_modules/discord.js/package.json').version;
   sV = require('../../.././package.json').version;

   e.setTitle(`${bot.user.tag}'s`);
   e.setThumbnail(`${bot.user.avatarURL}'s`);
   e.setColor(bot.settings.g.get(message.guild.id).color);
   e.addField("Info",`\`\`\`css\nGuilds : ${bot.guilds.size}\n\ Users : ${users}\n\ \ Bots : ${bots}\`\`\``, true)
   e.addField("Commands", `\`\`\`css\n  Loaded : ${cmds}\n General : ${general}\nUnloaded : ${unloaded}\`\`\``, true);
   e.addField("Versions", `\`\`\`css\nDiscord.js : ${dV}\n\ \ \ \ Shadow : ${sV}a\`\`\``, true);
   e.addField("Support", `\`\`\`css\n\ Owners : ${bot.support.owners.length}\nSupport : ${bot.support.users.length}\`\`\``, true);


   message.channel.send(`.`)
   .then(msg => {
     msg.edit(`-`)
     ping = (`(${msg.createdTimestamp - message.createdTimestamp}ms)`);
     e.setFooter(`Pinging@${ping}\nAPI@(${Math.round(bot.ping)}ms)`)
     msg.delete();
     message.channel.send(e);
   });
  },
};
