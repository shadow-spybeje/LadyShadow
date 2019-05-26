module.exports = {
    coded : "2019-05-26",

    name : "oldMember",
    description : "Triggers when a member joins a server.",
    usage : "bot.events.get('oldMember').execute(bot, member);",

    execute(bot, member){
        settings = bot.settings.g.get(member.guild.id);

        if(!settings.farewell) return;
        //if(!settings.fMsg){
          fMsg = `${member.user.tag} has left the server..\nNew Member Count : \`(${member.guild.members.size})\``;
        //} else {
          //fMsg = settings.fMsg;
        //};

        e.setAuthor(member.user.tag + ` (${member.user.id})`, member.user.avatarURL);
        e.setThumbnail(member.user.avatarURL);
        e.setColor("RED");
        e.setDescription(fMsg);
        e.setFooter(`${bot.functions.get('date').execute(Date.now())}`);

        member.guild.channels.get(settings.farewell).send(e);
    }
};
