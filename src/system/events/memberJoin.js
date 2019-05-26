module.exports = {
    coded : "2019-05-26",

    name : "newMember",
    description : "Triggers when a member joins a server.",
    usage : "bot.events.get('newMember').execute(bot, member);",

    execute(bot, member){
        settings = bot.settings.g.get(member.guild.id);

        if(!settings.welcome) return;
        //if(!settings.wMsg) {
          wMsg = `<@${member.user.id}> has joined the server!!\nNew Member Count : \`(${member.guild.members.size})\``;
        //} else {
          //wMsg = settings.wMsg;
        //};

        e.setAuthor(member.user.tag + ` (${member.user.id})`, member.user.avatarURL);
        e.setThumbnail(member.user.avatarURL);
        e.setColor("GREEN");
        e.setDescription(wMsg);
        e.setFooter(`${bot.functions.get('date').execute(Date.now())}`);

        member.guild.channels.get(settings.welcome).send(e);

        if(!settings.join) return;
        member.addRole(settings.join, "New-User -- Give \"Join\" Role.")
          .catch(err => member.guild.channels.get(settings.welcome).send(err));
    }
}
