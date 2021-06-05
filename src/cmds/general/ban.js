module.exports = {
    coded : "2019-04-05",
    name : "ban",
    aliases : [],
    description : "Bans the desired hostile member.\n`BAN_MEMBERS` permission.",
    usage : "<@user> [reason]",
    guildOnly : true,
    args : true,

    help : "staff",

    async execute(message, args){
        bot = message.client;

      //ModLog setting
        type = "Ban";


        if(!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You require `BAN_MEMBERS` permission to do that.");
        if(!message.guild.members.cache.get(message.client.user.id).permissions.has("BAN_MEMBERS")) return message.reply("I require the `BAN_MEMBERS` permission to Ban somebody!!\nYou can by right-clicking (tap+hold) the user in question and selecting `Ban Member`");

        let member = await bot.functions.get("_").getUserFromMention(args[0]);

        if(!member) return message.reply(`Please mention a user to ban.\n\`${bot.config.prefix}ban <@user> [reason]\``);

        let reason = args.slice(1).join(' ');
        reason = `Banned by "${message.author.tag}" for "${reason}"`

        message.guild.members.ban(member, { reason })
        .then( message.react("👌") )
        .catch(err => {
          message.channel.send(`There was an error trying to ban ${member.tag}! Support has been notified!\nYou can by right-clicking (tap+hold) the user in question and selecting \`Ban Member\``);
          bot.channels.get("417095515507785729").send(`Error Banning a user @(${message.guild.id}) ${message.guild.name}`).then(message.channel.send(err, {code:"JS",split:true}))
        });
    }
};
