bots = ["568883858427346974", "575977933492191232"];
// ["Pi", "Ichigo"];

changeTopic = 0;

module.exports = {
    coded : "2019-06-23",
    name : "rift",
    description : "Send a message to all Rift Designated channels.",
    usage : "bot.functions.get(`rift`).execute(message)",

    execute(message){
        bot = message.client;
        settings = bot.settings.g.get(message.guild.id);

        if(!settings.rift) return console.log("Wait a minute... How'd the Rift Function even fire if there's no Rift Channel set??");

        if(message.author.id == bot.user.id) return; // Oh!! That's me :P
        if(message.author.bot && bots.includes(message.author.id) == false) return message.delete(); // That's not one of my sisters.


        let tag = `${message.author.tag}`;
        if(message.author.bot) tag = `🔩${message.author.tag}`;

        msg = `\`\`\`css\n${bot.functions.get('date').execute()}\nServer: ${message.guild.name} || User: ${tag}\`\`\`${message.content}`;


        channels = [];
        bot.settings.g.forEach(settings => {
            if(!bot.guilds.cache.has(settings.id)) return;
            guild = bot.guilds.cache.get(settings.id);
            if(!settings.rift) return;

            if(guild.channels.cache.map(ch => (ch.id == settings.rift)).includes(true)) channels.push(settings.rift);
        });


        channels.forEach(ch => {
            c = bot.channels.cache.get(ch);
            changeTopic++

            if (message.attachments) {
                let files = [];
                message.attachments.forEach(attachment => {
                    files.push(attachment.url);
                });
                c.send(msg, {split:true, files: files})/*.then(msg => msg.react("➖"))*/;
            } else {
                c.send(msg, {split:true})
            };

            if(changeTopic <= 1){
                changeTopic = 0;

                c.setTopic(`Posting to [${channels.length}] rifts. || Last Updated - ${bot.functions.get('date').execute()}`).catch(console.error);
            };
        });

        message.delete().catch(e => {
            if(e.message == "Missing Permissions") {
                message.react("❎");
            } else {
                e = new discord.MessageEmbed()
                    .setColor("ff0000")
                    .setdescription("```css\nAn unknown error has accurd while attempting to delete a message.```")

                message.channel.send(e);
            };
        });
    },
};
