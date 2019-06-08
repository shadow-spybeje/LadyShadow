module.exports = {
    coded : "2019-05-26",

    name : "newMember",
    description : "Triggers when a member joins a server.",
    usage : "bot.events.get('newMember').execute(bot, member);",

    execute(bot, member){
        settings = bot.settings.g.get(member.guild.id);

        if(member.guild.id == '416906584900239370'){
          bl = false;
          bl = bot.blacklisted.some(id => { if(member.user.id == id) return true; });
          if(bl){
            e = new discord.RichEmbed();
            e.setTitle("⚠");
            e.setColor("ff0000");
            e.setDescription(`⚠ Member Warning ⚠\n\nThis user <@${member.id}> has been blacklisted among ${bot.blacklisted.length} others.\n\n**@Staffers**, Consolt a Server **@${member.guild.roles.get('417909130171383809').name}** before taking any action.`);
            e.setFooter("*Well that's funny... Weren't they banned??*");

            member.guild.channels.get("416906777049825292").send(e);

            member.addRole("586839954173198336", "New-Blacklisted-User -- Give \"BlackListed\" Role.")
            .catch(err => member.guild.channels.get("416906777049825292").send(err));
          };
        };


        if(!settings.welcome) return;
        //if(!settings.wMsg) {
          wMsg = `<@${member.user.id}> has joined the server!!\nNew Member Count : \`(${member.guild.members.size})\``;
        //} else {
          //wMsg = settings.wMsg;
        //};

        e = new discord.RichEmbed();
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
