const discord = require('discord.js');

partnerTags = [
  "shdw | shadow",
  "ph | ichi | ichigo",
  "gg"
];

module.exports = {
  coded : "2019-03-06",

  name : "invite",
  aliases : ["inv"],
  description : "Provides bot links.",
  usage : "<partners/tags | tag>",


  execute(message, args){
    bot = message.client;

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
      case("tags"):
        return message.channel.send('• '+partnerTags.join(',\n• '), {code:'css'})
      break;




      function getPartner (id){
          // Possible ERROR Checks.

        let noID = "";
        let noGuild = "";
        let isPartnered = "";
        let noInvite = "";

        if(id == "" || id.length == 0){
          noID = "PartnerError: ID Length == 0 or null.\n    at \"cmds/.../invite.js:45:12\"";
          console.log('\n'+noID);
          message.channel.send(`\`ERROR\` \`\`\`css\n${noID}\`\`\``);
        };

        if(!bot.guilds.get(id)){
          noGuild = "PartnerError: Not in partnered guild, guild is unavailable.";
          console.log('\n'+noGuild);
          message.channel.send(`\`ERROR\` \`\`\`css\n${noGuild}\`\`\``);
        };

        if(!bot.settings.g.get(id).partnered){
          isPartnered = "PartnerError: Guild is no longer a Shadow Partner\nInvite tag pending removal.";
          console.log('\n'+isPartnered);
          message.channel.send(`\`ERROR\` \`\`\`css\n${isPartnered}\`\`\``);
        };

        if(!bot.settings.g.get(id).partner.invite){
          noInvite = "PartnerError: Partner guild hasn't set a Partner Invite.";
          console.log('\n'+noInvite);
          message.channel.send(`\`ERROR\` \`\`\`css\n${noInvite}\`\`\``);
        };


        if(noID == "" && noGuild == "" && isPartnered == "" && noInvite == ""){

            // Gather Info.

          g = bot.guilds.get(id);
          s = bot.settings.g.get(id);



          info = {
            owner : {
              tag : g.owner.user.tag,
              avatarURL : g.owner.user.avatarURL,
            },

            t : g.name,
            th : g.iconURL,
            c : s.color,

            inv : `• [discord.gg/${s.partner.tag}](${s.partner.invite})`,
            r : `• ${s.partner.rules.join("\n• ")}`,
            d : `• ${s.partner.description}`,

          };


          if(!info.r || info.r.length == 0) info.r = "```css\n---==☆ Rules Not Set ☆==---```";
          if(!info.d || info.d.length == 0) info.d = "```css\n---==☆ Description Not Set ☆==---```";

          return info;
        };
      };


      case("ph"):
      case("ichi"):
      case("ichigo")://556013291378442240
        i = getPartner("556013291378442240");
        if(!i) return;
      break;


      case("shdw"):
      case("shadow")://416906584900239370
        i = getPartner("416906584900239370");
        if(!i) return;
      break;


      case("gg")://392421866767122446
        i = getPartner("392421866767122446");
        if(!i) return;
      break;


      default:
        return;
    };


    e.setAuthor("");
    e.setDescription("");
    e.setTitle(i.t);
    e.setThumbnail(i.th);
    e.setColor(i.c);
    e.setFooter(i.owner.tag, i.owner.avatarURL)
    e.addField("Invite", i.inv);
    e.addField("Description", i.d);
    e.addField("Rules", i.r);

    message.channel.send(e);
  },
};
