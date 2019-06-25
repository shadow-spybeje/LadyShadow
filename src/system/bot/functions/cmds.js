const discord = require('discord.js');

module.exports = {
    coded : "2019-05-11",

    name : "cmds",
    description : "Execute the Command Identifier and cmd if applicable.",
    usage : "bot.functions.get('cmds').execute(message, args);",

    execute(message, prefix){
        const bot = message.client;
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const cmdName = args.shift().toLowerCase();
        let cmd = bot.cmds.general.get(cmdName) || bot.cmds.general.find(c => c.aliases && c.aliases.includes(cmdName));
        if(!cmd) cmd = bot.cmds.support.get(cmdName) || bot.cmds.support.find(c => c.aliases && c.aliases.includes(cmdName));
        if(!cmd) cmd = bot.cmds.owner.get(cmdName) || bot.cmds.owner.find(c => c.aliases && c.aliases.includes(cmdName));

        if(!cmd) return;


        let e = new discord.RichEmbed();
        e.setTitle(`${cmdName} Error`)
        e.setColor("ff0000")


          //Owner?
          if(cmd.owner){

            if(!bot.support.owners.includes(message.author.id)){
              e.setDescription("**Developer Only**\n• This is a Developer Only `(config.perms[0])` command.");
              return message.channel.send(e);
            };
          };

            //guildOnly
          if (cmd.guildOnly && message.channel.type !== 'text'){
              e.setDescription("**Guild Only**\n• This Command can only be used Server-Side.")
              return message.channel.send(e);
          };

          //Args
        if (cmd.args && !args.length){
            let reply = `**Arguments**\n• You didn't provide any arguments!`;

            //Usage
            if (cmd.usage){
            reply += `\n\n**Usage**\n• The proper usage would be: \`${prefix}${cmd.name} ${cmd.usage}\``;

            e.setDescription(reply)
            return message.channel.send(e);
            };
        };



          //Help Level
          /*if(cmd.help.length != 0){
            cmd.help.forEach(help => {
              if(help == "basic" || help == 10) return //var or func
              if(help == "staff" || help == 8) return //var or func
              if(help == "moderator" || help == 7) return //var or func
              if(help == "admin" || help == 6) return //var or func
              if(help == "owner" || help == 5) return //var or func
              if(help == "partner" || help == 4) return //var or func
              if(help == "patreon" || help == 3) return //var or func
              if(help == "support" || help == 2) return //var or func
              if(help == "developer" || help == "dev" || help == 0) return //var or func
            });
          }*/




        try {
            cmd.execute(message, args);
        } catch (error) {
          //console.log(error);
          message.channel.send(bot.functions.get("err").execute(message, error));
          message.reply(`there was an error trying to execute \`${cmdName}\`!!`);
        };
    }
}
