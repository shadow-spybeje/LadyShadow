module.exports = {
    coded : "2019-07-10",

    name : "suggest",
    description : "Suggest a change, or update to Shadow's RPG.",
    usage : "<suggestion>",

    help : "other",
    args : true,

    execute(message, args){
        let bot = message.client;
        let e = new discord.MessageEmbed();

        let em = bot.guilds.cache.get("416906584900239370").emojis;
        let ch = bot.channels.cache.get("558105957884887045");
        if(!ch) return message.channel.send("Uhm... There's no suggestions channel??\nYou really should notify the Devs!!");


        isAdmin = false;
        isAdmin = bot.srpg.admins.some(id => { if(message.author.id == id)return true });

        respond = false;
        if(isAdmin && args[0] == "-"){
            del = args.shift();
            id = args.shift();
            type = args.shift().toLowerCase();

            let m = "";
            switch(type){
                case("accept"):
                    m = "Your Suggestion has been accepted and will be added to the ToDo list.";
                    emoji = "567036794999406622";
                break;
                case("deny"):
                    reason = args.join(" ");
                    m = `Your Suggestions has been denied.\n\`Reason\` \`\`\`js\n${reason}\`\`\``;
                    emoji = "567036795171373066";
                break;
                case("todo"):
                    m = "This is already on the ToDo's.";
                    emoji = "561649673832759317";
                break;
                case("done"):
                    m = "This feature is already in the S.RPG.";
                    emoji = "561649719978229791";
                break;
            };
            if(msg = "")return; //Oops!!

            emExists = false;
            emExists = bot.guilds.cache.get("416906584900239370").emojis.some(id => { if(emoji == id)return true; });

            if(emExists == false)return bot.support.owners.forEach(owner => { bot.users.cache.get(owner).send(`S.RPG Suggest Emoji with ID of ${emoji} doesn't exist.\n  Check if the emoji's been removed. If not, please review the bot code..`)});


            //msg.edit

            message.channel.messages.fetch(id).then(msg => {

                if(msg.author.id != bot.user.id){
                    e.setDescription(`The Message that was indicated was not created by me!!\n\ \ It belongs to a \`${bot.users.cache.get(msg.author.id).tag}\`.`);
                    return message.channel.send(e);
                };


                if(args[0] == "[MESSAGE.DELETE]"){
                    msg.delete().then(m => {
                        e.setTitle("Msg.Edit - Message Deleted");
                        e.setFooter(`Dev : ${message.author.tag}`, message.author.avatarURL);
                        return message.channel.send(e);
                    });
                };


                msg.edit(m).then(mm => {
                    msg.react(em.get(emoji));

                    e.setTitle("Msg.Edit - Message Edited");
                    return message.channel.send(e).then(mmm => {
                        mmm.delete(5000);
                        message.delete();
                    });
                }).catch(err => bot.functions.get('err').execute(message, err));
            });

            //msg.react(em.get(emoji));


            respond = true;
        };

        if(respond == true)return;


        let user = bot.srpg.users.get(message.author.id);
        if(!user) return message.channel.send(`How can you suggest something for an rpg you've never even tried?\n\`${bot.settings.g.get(message.guild.id).prefix}srpg start <hunter, mage, warrior>\``);


        e.setAuthor(`${message.author.tag} (${message.author.id})\n${user.name} | Clan: ${bot.srpg.clans.get(user.clan).name}`);
        e.setTitle(`Suggestion #${bot.srpg.config.suggestions+1}`);
        e.setDescription(args.join(" "));
        e.setColor(bot.settings.g.get(message.guild.id).color);

        ch.send(e).then(msg => msg.react(em.get("598440628925366313")).then(msg.react(em.get("598440628501610558")).then(message.react(em.get("598440628925366313")).catch(console.error))).catch(console.error)).catch(console.error);

        // Edit SRPG.Config
        fs = require('fs');

        file = bot.srpg.config;
        file.suggestions = file.suggestions+1;
        json = JSON.stringify(file);
        fs.writeFileSync(`./src/cmds/srpg/system/config.json`, json);
        bot.srpg.config = file;
    },
};
