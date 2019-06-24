module.exports = {
    coded : "",
    name : "unmute",
    description : "Unmutes a muted user.",
    usage : "<@user | ID> [reason]",

    guildOnly : true,
    args : false, //true,

    execute(message, args){

        devMode = false;

        bot = message.client;
        settings = bot.settings.g.get(message.guild.id);


        function end (message){
            message.channel.send(`\`unmute\` is currently being developed.\nWe apologize for the inconvinience.\n\n~Shadow`);
        };



        if(!message.guild.member(bot.user.id).permissions.has("MANAGE_ROLES")) return message.channel.send("I need the `MANAGE_ROLES` permission to do this.");

        let perms = false;
        if(message.guild.member(message.author.id).roles.has(message.guild.roles.get(settings.admin))) perms = true;

        if(message.guild.member(message.author.id).roles.has(message.guild.roles.get(settings.moderator))) perms = true;

        if(message.guild.member(message.author.id).roles.has(message.guild.roles.get(settings.staff))) perms = true;

        if(perms == false && !message.guild.member(message.author.id).permissions.has("MANAGE_ROLES")) return message.channel.send("You need to be defined as a Staff member or have the `MANAGE_ROLES` permission to do this.");


        if(devMode == false) return end(message);


        target = args.shift().replace("/[<@!>]/g", "");
        message.channel.send("Target - "+target)


        message.guild.fetchMember(target).then(target => {
            if(!message.guild.roles.map(r => r.id == settings.muted) && !message.guild.roles.map(r => r.name.toLowerCase() == "muted")) return message.channel.send("You do not have a __`Muted`__ role.");

            if(!target.roles.map(r => r.id == settings.muted) && !target.roles.map(r => r.name.toLowerCase() == "muted")) return message.channel.send("User is not muted.");

            let role = "";
            role = message.guild.roles.map(r => r.id == settings.muted);
            if(!role) role = message.guild.roles.find(r => r.name.toLowerCase() == "muted");

            message.member.removeRole(role, reason).then(user => {
                return message.channel.send(`User ${user.tag} has been unmuted`)

            }).catch(e => {
                if(e.message == "Missing Permissions") {
                    return message.channel.send(`I can not unmute that person as I lack the permission to do so.\n\nDoes the target have a higher role than i do? (Are they the server owner??)`)

                } else {
                    return message.channel.send(`An unknown error has occured.`)

                }
            })
        }).catch(() => {
            return message.channel.send("User not found.\n*Perhaps they're not on the server.*")
        })
    },
};
