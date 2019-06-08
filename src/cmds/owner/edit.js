module.exports = {
    coded : "2019-05-16",
    name : "edit",
    aliases : ["change"],
    description : "Edits a message posted by Shadow.\n• Must be in same channel as message to-be edited.\n\n[Notes]\n• Does not support Embeding.\n• Does not removing Embeds via Edit.",
    usage : "<msg.id> <newMsg>",
    args : true,
    help : "dev",

    execute(message, args) {
        bot = message.client;
        if(!bot.support.owners.includes(message.author.id)) return;

        e = new discord.RichEmbed();
        e.setColor("970045");

        if(!args){
            e.setDescription("Improper Usage - Proper Usage would include\n`<msg.id> <newMsg>`");
            return message.channel.send(e);
        };

        if(isNaN(args[0])){
            e.setDescription(`\`args[0] || ${args[0]}\` must be an ID!!`);
            return message.channel.send(e);
        };

        id = args.shift();
        if(!message.channel.fetchMessage(id)){
            e.setDescription(`The provided ID was either not an \`ID\` to a \`Message\` in this Channel. Or wasn't a \`Message.ID\` to start with.`);
            return message.channel.send(e);
        };

        message.channel.fetchMessage(id).then(msg => {
            if(msg.author.id != bot.user.id){
                e.setDescription(`The Message that was indicated was not created by me!!\n\ \ It belongs to a \`${bot.users.get(msg.author.id).tag}\`.`);
                return message.channel.send(e);
            };

            if(args.length == 0){
                e.setDescription(`Please provide an Edit for this message.`);
                return message.channel.send(e);
            };

            if(args[0] == "[MESSAGE.DELETE]"){
                msg.delete().then(m => {
                    e.setTitle("Msg.Edit - Message Deleted");
                    e.setFooter(`Dev : ${message.author.tag}`, message.author.avatarURL);
                    return message.channel.send(e);
                });
            };

            msg.edit(args.join(' ')).then(m => {
                e.setTitle("Msg.Edit - Message Edited");
                return message.channel.send(e).then(mm => {
                    mm.delete(5000);
                    message.delete();
                });
            })
        })
        .catch(console.error);
    },
};
