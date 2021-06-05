const pkg = require('../../.././package.json');
const discord = require('discord.js');
const fs = require('fs');

module.exports = {
  coded : "2019-03-06",

  name : "settings",
  description : "Calls the settings set for the server.",
  usage : "| To set use `{p}help set`",

  guildOnly : true,
  help : "admin",


  execute(message, args){
    bot = message.client;
    let id = "";

    granted = bot.support.owners;
    granted.concat(bot.support.users);
    let grant = granted.some(id => {
      if(message.author.id == id) return true;
    });


    if(grant === true){
      if(args) id = args[0];
    };

    if(!id) id = message.guild.id;


    const settings = bot.settings.g.get(id);

    if (!settings) return message.channel.send(`\`ERROR\` \`\`\`xl\nCould not read file "${id}.json" in "storage/shared/bots/${pkg.name}/Src/System/Guilds"\n\nPlease make sure that the file exists.\`\`\``);



    //---------
    //Display Settings

    g = bot.guilds.cache.get(id)

    censor = false;
    color = "00ffff";

    welcome = "[Not Set]";
    farewell = "[Not Set]";
    rift = "[Not Set]";
    modlog = "[Not Set]";
    chatlog = "[Not Set]";

    admin = "[Not Set]";
    moderator = "[Not Set]";
    staff = "[Not Set]";
    join = "[Not Set]";
    muted = "[Not Set]";


    if(settings.color) color = settings.color;
    if(settings.censor.length >= 1) censor = true;

    if(settings.welcome) welcome = `#${bot.channels.cache.get(settings.welcome).name} (${settings.welcome})`;
    if(settings.farewell) farewell = `#${bot.channels.cache.get(settings.farewell).name} (${settings.farewell})`;
    if(settings.rift) rift = `#${bot.channels.cache.get(settings.rift).name} (${settings.rift})`;
    if(settings.modlog) modlog = `#${bot.channels.cache.get(settings.modlog).name} (${settings.modlog})`;
    if(settings.chatlog) chatlog = `#${bot.channels.cache.get(settings.chatlog).name} (${settings.chatlog})`;

    if(settings.admin) admin = `@${bot.guilds.cache.get(id).roles.get(settings.admin).name} (${settings.admin})`;
    if(settings.moderator) moderator = `@${bot.guilds.cache.get(id).roles.get(settings.moderator).name} (${settings.moderator})`;
    if(settings.staff) staff = `@${bot.guilds.cache.get(id).roles.get(settings.staff).name} (${settings.staff})`;
    if(settings.join) join = `@${bot.guilds.cache.get(id).roles.get(settings.join).name} (${settings.join})`;
    if(settings.muted) muted = `@${bot.guilds.cache.get(id).roles.get(settings.muted).name} (${settings.muted})`;

    partners = "";


    let listed = false;
    let invite = false;
    p = settings.partner
    let l = {l:false,t:"",r:0,i:`${p.invite}`,d:""};
    if(p.invite != ""){
      invite = true;
      if(p.listed == true) l.l = true;
      if(p.tag != "") l.t = p.tag;
      if(p.rules.length != 0) l.r = p.rules.length;
      if(p.description != "") l.d = p.description;
    };

    let pa = "";

    if(invite == true){
      pa = `\nListed : ${l.l}\n\ \ \ Tag : ${l.t}\n\ Rules : ${l.r}\nInvite : ${l.i}\n\ \ Desc : ${l.d}`;
    };


    const e = new discord.MessageEmbed()
      .setAuthor(`${g.name}'s Settings`, g.iconURL)
      .setColor(color)
      .setFooter(`${g.name} - Settings: Edit with: "..set list" || ${bot.functions.get("date").execute(Date.now())}`)

      if(settings.partnered == true) e.setDescription(`\`\`\`css\n---==☆ SHADOW PARTNER ☆==---${pa}\`\`\``);


      e.addField("General", `\`\`\`css\n\ \ \   Prefix : ${settings.prefix}\n\ \ \   DmHelp : ${settings.dmhelp}\n\ \ \   Censor : ${censor}\n      Color : ${color}\`\`\``);

      e.addField("Channels", `\`\`\`css\n\ \   Welcome : ${welcome}\n\   Farewell : ${farewell}\n\ \ \ \ \   Rift : ${rift}\n\ \ \   Modlog : ${modlog}\n\ \   Chatlog : ${chatlog}\`\`\``);

      e.addField("Roles", `\`\`\`css\n\ \ \ \   Admin : ${admin}\n  Moderator : ${moderator}\n\ \ \ \   Staff : ${staff}\n\ \ \ \ \   Join : ${join}\n\ \ \ \   Muted : ${muted}\`\`\``);

      e.addField("Misc", `\`\`\`css\nBlacklisted : ${settings.blacklist.length}\n\n[CENSOR]\nWhitelisted : ${settings.censorWhitelist.length}\nCensorWords : ${settings.censor.length}\`\`\``);


    message.channel.send(e);
  },
};
