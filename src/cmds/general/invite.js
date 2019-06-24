const discord = require('discord.js');

module.exports = {
  coded : "2019-03-06",

  name : "invite",
  aliases : ["inv"],
  description : "Provides bot links.",
  usage : "[partners | tag] | invite tag [info]",


  execute(message, args){
    bot = message.client;
    partnerTags = ["ph", "ichi", "gg"];

    e = new discord.RichEmbed()
      .setTitle("Invite")
      .setAuthor(bot.user.tag)
      .setThumbnail(bot.user.avatarURL)
      .setColor(bot.settings.g.get(message.guild.id).color)
      .setDescription("[Bot](https://discordapp.com/oauth2/authorize?client_id=347872963636494337&scope=bot&permissions=470150359)\n[Support](https://discord.gg/9FUpBPQ)")
      .setFooter(`Developers : ${bot.users.get(bot.support.owners[0]).tag} | ${bot.users.get(bot.support.owners[1]).tag}`)

    if(args.length == 0) return message.channel.send(e);


    /**
     * only need to edit
     *   e.setDescription();
     */

    subCmd = args.shift().toLowerCase();
    switch(subCmd){
      case("partners"):
        return message.channel.send(partnerTags.join(', '))
      break;


      function getPartner (id){
          // Possible ERROR Checks.

        let noID = "";
        let noGuild = "";

        if(id == "" || id.length == 0){
          noID = "PartnerError: ID Length == 0 or null.\n    at \"cmds/.../invite.js:39:28\"";
          console.log('\n'+noID);
          message.channel.send(`\`ERROR\` \`\`\`css\n${noID}\`\`\``);
        };

        if(!bot.guilds.get(id)){
          noGuild = "PartnerError: Not in partnered guild, guild is unavailable.\n    at \"cmds/.../invite.js:45:28\"";
          console.log('\n'+noGuild);
          message.channel.send(`\`ERROR\` \`\`\`css\n${noGuild}\`\`\``);
        };

        let info = "";

        if(noID == "" && noGuild == ""){

            // Gather Info.

          g = bot.guilds.get(id);
          s = bot.settings.g.get(id);

          info : {
            t = g.name;
            th = g.iconURL;
            c = s.color;
            inv = s.inv;
            rules = s.rules.join("\n• ");
            d = `[Partner Server Invite](${inv})\n\n**Rules**\n• ${rules}`;
          };
        };

        return info;
      };


      case("ph"):
      case("ichi")://556013291378442240
        i = getPartner("556013291378442240");
        if(!i) return;
      break;


      case("gg")://392421866767122446
        i = getPartner("392421866767122446");
        if(!i) return;
      break;


      default:
        return;
    };

    e.setTitle(i.t+" Invite");
    e.setThumbnail(i.th);
    e.setColor(i.c);
    e.setDescription(i.d);

    message.channel.send(e);
  },
};
