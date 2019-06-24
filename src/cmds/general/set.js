const fs = require('fs');
let list = ["prefix", "dmhelp", "admin", "moderator", "staff", "mute", "welcome", "farewell", "rift", "modlog", "chatlog"];


module.exports = {
  coded : "2019-03-06",

  name : "set",
  description : "Edit server settings.",
  usage : `"<${list.join(' | ')}>"`,
  guildOnly : true,
  //args : true,
  help : "admin",


  execute(message, args){
    bot = message.client;
    return message.channel.send(`\`\`\`css\nCmd-Set is Bugged!!\nFor somereason, set allows everyone to use, regardless of code input.\n Am unsure why, however this has to do with the v.3 --> v.4 rewrite.\n\nCurrently set is disabled.\nIf you wish to use, please DM [${bot.users.get(bot.support.owners[0]).tag}] with your server ID the setting you wish to update, and the new information of the setting.\n  They will get to your request as soon as they are able.\nNote: Delay's may be caused due to sleep or work.\n\nWe will work on this once the remainder of the "Unloaded" commands are rewritten to support the v.4 rewrite.\n\nWe apologize for any inconvinience.\`\`\``)


    bot = message.client;
    const e = new discord.RichEmbed();
    support = bot.support.owners;
    support.concat(bot.support.users);

    let help = false;
    let listed = false;

    const settings = bot.settings.g.get(message.guild.id);
    const prefix = settings.prefix
    let color = settings.color;


    bot.support.users.some(id => {
      if(message.author.id != id){

        if(message.author.id != message.guild.owner.id){
          if(!settings.admin) return message.channel.send(`\`ERROR\` \`\`\`xl\nNo Admin Role found!!\n----------\nHave the server owner set an AdminRole with "${settings.prefix}set admin <roleMention>" to use this command.\`\`\``);

        if(message.member.roles.inlcudes(settings.admin) === false) return message.reply(`\`ERROR\` \`\`\`xl\nMust have the Admin role : "${message.guilds.roles.get(settings.admin).name}" to use the "set" command!!\`\`\``);
        };
      };
    });



    if(args.length === 1) help = true;

    list.push("mod")
    list.some(word => {
      if(args[0].toLowerCase() === word) listed = true;
    });


    if(listed === false) return message.channel.send(`usage: ${prefix}set ${bot.cmds.general.get("set").usage}`, {code : "css"});


    if(help === true && listed === true) {
      switch(args.shift().toLowerCase()){
        case("prefix"):
          return message.channel.send(`\`\`\`css\n${prefix}set prefix <newPrefix>\`\`\``);
        break;
        case("dmhelp"):
          return message.channel.send(`\`\`\`css\n${prefix}set dmhelp <true || false>\`\`\``);
        break;
        case("admin"):
          return message.channel.send(`\`\`\`css\n${prefix}set admin <@adminRole || adminRoleID>\`\`\``);
        break;
        case("moderator"):
        case("mod"):
          return message.channel.send(`\`\`\`css\n${prefix}set moderator <@moderatorRole || moderatorRoleID>\`\`\``);
        break;
        case("staff"):
          return message.channel.send(`\`\`\`css\n${prefix}set staff <@staffRole || staffRoleID>\`\`\``);
        break;
        case("mute"):
          return message.channel.send(`\`\`\`css\n${prefix}set mute <@muteRole || muteRoleID>\`\`\``);
        break;
        case("welcome"):
          return message.channel.send(`\`\`\`css\n${prefix}set welcome <@welcomeChannel || welcomeChannelID>\`\`\``);
        break;
        case("farewell"):
          return message.channel.send(`\`\`\`css\n${prefix}set farewell <@farewellChannel || farewellChannelID>\`\`\``);
        break;
        case("rift"):
          return message.channel.send(`\`\`\`css\n${prefix}set rift <@riftChannel || riftChannelID>\`\`\``);
        break;
        case("modlog"):
          return message.channel.send(`\`\`\`css\n${prefix}set modlog <@modlogChannel || modlogChannelID>\`\`\``);
        break;
        case("chatlog"):
          return message.channel.send(`\`\`\`css\n${prefix}set chatlog <@chatlogChannel || chatlogChannelID>\`\`\``);
        break;
        default:
          return message.channel.send(`${prefix}set ${list.join(', ')}`);
      };
    };

    //End-Help
    //Start-SetCmds

    e.setColor(color);
    e.setAuthor(message.guild.name, message.guild.iconURL);

    let path = `../.././bot_db/ladyShadow/settings/guilds/${message.guild.id}.json`;

    switch(args.shift().toLowerCase()){
      case("~"):
        message.channel.send("beepBoop.");
      break;


// Set General


      case("prefix"):
        if(args.length == 0) return message.channel.send("Please input a new Prefix.");

        oPrefix = settings.prefix;
        nPrefix = args.shift();
        settings.prefix = nPrefix;
        json = JSON.stringify(settings);
        fs.writeFileSync(path, json);

        e.setTitle("<:settings:561649800206876684> New Prefix!!");
        e.setDescription(`\`\`\`css\nOld Prefix : ${oPrefix}\nNew Prefix : ${nPrefix}\`\`\`If Shadow refuses to respond have ${bot.users.get(message.guild.owner.id).tag} DM her with the following command.\`\`\`css\n..reset ${message.guild.id} prefix\`\`\``);

        return message.channel.send(e);

      break;


      case("dmhelp"):
      case("dm"):
      case("help"):
        if(args.length == 0) return message.channel.send("Enter either `true` or `false`.");

        boolean = args[0].toLowerCase();
        if(boolean != "true" && boolean != "false") return message.reply(`\n\`${boolean}\` is niether a \`true\` nor \`false\` value.\n\ \ Please use either a \`true\` or \`false\` value.`);
        settings.dmhelp = boolean;
        json = JSON.stringify(settings);
        fs.writeFileSync(path, json);

        e.setTitle(`<:settings:561649800206876684> DM Help`);
        e.setDescription(`\`\`\`css\nDM Help = ${settings.dmhelp}\`\`\``);

        return message.channel.send(e);

      break;


// Set Roles


      case("staff"):
        if(args.length == 0) return message.channel.send("Please mention the \"Staff\" Role.");

        role = message.mentions.roles.first().id;
        settings.staff = role;
        json = JSON.stringify(settings);
        fs.writeFileSync(path, json);

        e.setTitle(`<:settings:561649800206876684> New Staff Role`);
        e.setDescription(`\`\`\`css\nStaff Role = ${message.guild.roles.get(settings.staff).name}\`\`\``);

        return message.channel.send(e);

      break;


      case("moderator"):
      case("mod"):
      if(args.length == 0) return message.channel.send("Please mention the \"Moderator\" Role.");

      role = message.mentions.roles.first().id;
      settings.moderator = role;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New Moderator Role`);
      e.setDescription(`\`\`\`css\nModerator Role = ${message.guild.roles.get(settings.moderator).name}\`\`\``);

      return message.channel.send(e);

    break;


    case("admin"):
      if(args.length == 0) return message.channel.send("Please mention the \"Staff\" Role.");

      role = message.mentions.roles.first().id;
      settings.admin = role;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New Admin Role`);
      e.setDescription(`\`\`\`css\nAdmin Role = ${message.guild.roles.get(settings.admin).name}\`\`\``);

      return message.channel.send(e);

    break;



    case("muted"):
    case("mute"):
    if(args.length == 0) return message.channel.send("Please mention the \"Muted\" Role.");

    role = message.mentions.roles.first().id;
    settings.muted = role;
    json = JSON.stringify(settings);
    fs.writeFileSync(path, json);

    e.setTitle(`<:settings:561649800206876684> New Muted Role`);
    e.setDescription(`\`\`\`css\nMuted Role = ${message.guild.roles.get(settings.muted).name}\`\`\``);

    return message.channel.send(e);

  break;


// Set Channels


    case("welcome"):

      if(args.length == 0) return message.channel.send("Please mention the \"Welcome\" Channel.");

      ch = message.mentions.channels.first().id;
      settings.welcome = ch;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New Welcome Channel`);
      e.setDescription(`\`\`\`css\nWelcome Channel = ${message.guild.channels.get(settings.welcome).name}\`\`\``);

      return message.channel.send(e);

    break;


    case(farewell):

      if(args.length == 0) return message.channel.send("Please mention the \"Farewell\" Channel.");

      ch = message.mentions.channels.first().id;
      settings.farewell = ch;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New farewell Channel`);
      e.setDescription(`\`\`\`css\nFarewell Channel = ${message.guild.channels.get(settings.farewell).name}\`\`\``);

      return message.channel.send(e);

    break;


    case("rift"):

      if(args.length == 0) return message.channel.send("Please mention the \"Rift\" Channel.");

      ch = message.mentions.channels.first().id;
      settings.rift = ch;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New Rift Channel`);
      e.setDescription(`\`\`\`css\nRift Channel = ${message.guild.channels.get(settings.rift).name}\`\`\``);

      return message.channel.send(e);

    break;


    case("chatlog"):

      if(args.length == 0) return message.channel.send("Please mention the \"Rift\" Channel.");

      ch = message.mentions.channels.first().id;
      settings.chatlog = ch;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New ChatLog Channel`);
      e.setDescription(`\`\`\`css\nChatLog Channel = ${message.guild.channels.get(settings.chatlog).name}\`\`\``);

      return message.channel.send(e);

    break;


    case("modlog"):

      if(args.length == 0) return message.channel.send("Please mention the \"ModLog\" Channel.");

      ch = message.mentions.channels.first().id;
      settings.modlig = ch;
      json = JSON.stringify(settings);
      fs.writeFileSync(path, json);

      e.setTitle(`<:settings:561649800206876684> New ModLog Channel`);
      e.setDescription(`\`\`\`css\nModLog Channel = ${message.guild.channels.get(settings.modlog).name}\`\`\``);

      return message.channel.send(e);

    break;
      default:
        return message.channel.send(`The full functionality of the \`set\` command has not yet been coded, please wait for future updates.`);
    };
  },
};
