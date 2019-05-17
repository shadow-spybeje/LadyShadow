const discord = require('discord.js');

module.exports = {
  coded : "2019-02-25",

  name : "sayd",
  description : "Repeats after you.\n!! Require 'MANAGE_MESSAGES' !!",
  usage : "<messageToRepeat>",


  args : true,
  help : "general",


  execute (message, args) {

   if (!message.guild.members.get(message.client.user.id).permissions.has('MANAGE_MESSAGES')){
     error = new discord.RichEmbed()
      .setTitle("Missing Permissions")
      .setColor("ff0000")
      .setDescription('I don\'t have the `MANAGE_MESSAGES` permission.\n*`Cannot delete cmdAuthor\'s message.`*')

     return message.channel.send(error);
   };


   message.delete();
   message.channel.send(args.join(' '));
  },
};
