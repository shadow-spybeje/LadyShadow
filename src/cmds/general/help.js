module.exports = {
  coded : "2019-02-26",

  name : "help",
  description : "A list of commands that Shadow holds.",
  usage : "[category | command]",

  help : "general",

  execute (message, args) {

    e = new discord.RichEmbed()

   //Set cmd req stuffs
    const bot = message.client;

    bot.nil = new discord.Collection();
    bot.nil.set("nil", { name : "No Commands Available"});
    nil = bot.nil;

    bot.cmds.help = new discord.Collection();
    bot.cmds.help.general = new discord.Collection();
    bot.cmds.help.mod = new discord.Collection();
    bot.cmds.help.admin = new discord.Collection();
    bot.cmds.help.owner = new discord.Collection();
    bot.cmds.help.parnter = new discord.Collection();
    bot.cmds.help.patreon = new discord.Collection();


    bot.cmds.general.forEach(cmd => {
      if(cmd.help == "general") bot.cmds.help.general.set(cmd.name, cmd);
      if(cmd.help == "mod") bot.cmds.help.mod.set(cmd.name, cmd);
      if(cmd.help == "admin") bot.cmds.help.admin.set(cmd.name, cmd);
      if(cmd.help == "owner") bot.cmds.help.owner.set(cmd.name, cmd);
      if(cmd.help == "partner") bot.cmds.help.partner.set(cmd.name, cmd);
      if(cmd.help == "patreon") bot.cmds.help.patreon.set(cmd.name, cmd);
    });


    const cmdsGeneral = bot.cmds.help.general;
    const cmdsMod =bot.cmds.help.mod;
    const cmdsAdmin =bot.cmds.help.admin;
    const cmdsOwner =bot.cmds.help.owner;
    const cmdsPartner =bot.cmds.help.partner;
    const cmdsPatreon = bot.cmds.help.patreon;

    const cmdsSupport = bot.cmds.support;
    const cmdsDev = bot.cmds.owner;
    const cmdsUnloaded = bot.cmds.unloaded;


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
      settings = require(`../../../../.././bot_db/ladyShadow/settings/guilds/${message.guild.id}.json`);
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
      e.setTitle(`Help Categories`);
      e.setColor(color);
      e.setDescription(`\`\`\`css\n [General] : <10 | general>\n     [Mod] : <7 | mod>\n   [Admin] : <6 | admin>\n   [Owner] : <5 | owner>\`\`\``);
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
        case("10"):
          cat = "General";
          cmds = cmdsGeneral;
        break;
        case("mod"):
        case("7"):
          cat = "Moderator";
          cmds = cmdsMod;
        break;
        case("admin"):
        case("6"):
          cat = "Admin";
          cmds = cmdsAdmin;
        break;
        case("owner"):
        case("5"):
          cat = "Owner";
          cmds = cmdsOwner;
        break;
        case("parnter"):
        case("4"):
          cat = "Partner";
          cmds = cmdsPartner;
        break;
        case("patreon"):
        case("3"):
          cat = "Patreon";
          cmds = cmdsPatreon;
        break;
        case("support"):
        case("2"):
          cat = "Support";
          cmds = cmdsSupport;
        break;
        case("dev"):
        case("0"):
          cat = "Developer";
          cmds = cmdsDev;
        break;
        case("unloaded"):
          cat = "Unloaded";
          cmds = cmdsUnloaded;
        break;
        case("other"):
        case("-"):
          e.setTitle(`Other Categories`);
          e.setColor(color);
          e.setDescription(`\`\`\`css\nUnless you're a member of these categories, this selection will be locked to you.\n\n [Partner] : <4 | partner>\n [Patreon] : <3 | patreon>\n [Support] : <2 | support>\n     [Dev] : <0 | dev>\n\n[Unloaded] : <unloaded>\`\`\``);
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

          e.setFooter(`${bot.user.username}'s Help | ${bot.users.get(bot.support.owners[0]).tag} | ${bot.users.get(bot.support.owners[1]).tag}`);
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
  },
};
