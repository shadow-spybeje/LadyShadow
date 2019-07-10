/*function bootSRPG(){
  const SRPG = require('../../../.././Shadow-RPG').execute();
  return SRPG;
};*/

module.exports = {
    coded : "2019-05-28",
    name : "srpg",
    description : "The bridge cmd into the SRPG.",
    usage : "help | srpg <cmd>",
    args : true,

    help : 'srpg',

    execute(message, args){
        let bot = message.client;
        let settings = bot.settings.g.get(message.guild.id);
        let prefix = settings.prefix;
        if(!prefix) prefix = bot.prefix.global;


      //NEW S.RPG
        cmdName = args.shift();
        cmd = bot.cmds.srpg.get(cmdName.toLowerCase()) || bot.cmds.srpg.find(c => c.aliases && c.aliases.includes(cmdName));
        if(!cmd) return;


        let e = new discord.RichEmbed();
        e.setTitle(`${cmdName} Error`)
        e.setColor("ff0000")


          //Args
        if (cmd.args && !args.length){
            let reply = `**Arguments**\n• You didn't provide any arguments!`;

            //Usage
            if (cmd.usage){
            reply += `\n\n**Usage**\n• The proper usage would be: \`${prefix}srpg ${cmd.name} ${cmd.usage}\``;

            e.setDescription(reply)
            return message.channel.send(e);
            };
        };

          //guildOnly
        if (cmd.guildOnly && message.channel.type !== 'text'){
            e.setDescription("**Guild Only**\n• This Command can only be used Server-Side.")
            return message.channel.send(e);
        };

          //Admin?
        if(cmd.admin){

            if(!bot.support.owners.includes(message.author.id)){
                e.setDescription("**Admin Only**\n• This is an Admin Only command.");
                return message.channel.send(embedError);
            };
        };

        try {
            cmd.execute(message, args);
        } catch (error) {
            //console.log(error);
            message.channel.send(bot.functions.get("err").execute(message, error));
            message.reply(`there was an error trying to execute \`${cmdName}\`!!`);
        };
    }
}
