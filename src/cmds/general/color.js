module.exports = {
    name : "color",
    description : "Display the color of a Hex code Color",
    usage : "[hexCode] || [. hexCode]",

    execute(message, args){
        bot = message.client;

        let hex = true;
        if(args.length >= 2) if(args[0].toLowerCase() == ".") hex = false;
        let color = "00ffff";
        if(message.channel.type == "text") color = bot.settings.g.get(message.guild.id).color

        e = new discord.RichEmbed()

        colors = [
            { "name" : "err", "hex" : ["970045"] },
            { "name" : "shdw", "hex" : ["00ffff"] },
            { "name" : "royal", " hex" : ["663399"] },
        ];

        if(args.length == 0){
            e.setTitle("Shadow's | Color Name's");
            e.setColor(color)
            e.setDescription(`\`\`\`css\n`+colors.map(c => `• ${c.name}`)+`\`\`\``)
            e.setFooter(`..color . <name> || ..color <hexCode>`);
        };

        if(args.length >= 1) {
            if(!hex) {
                e.setTitle(`Colors for "${args[1]}"`);
                e.setColor(color);
                e.setDescription(`\`\`\`css\n• #`+colors.map(c => { if(c.name == args[1]) return c.hex.join(`,\n• #`);})+`\`\`\``);
                e.setFooter(`..color <hexCode>`);
            };

            if(hex) {
                e.setTitle(`#${args[0]}`);
                e.setColor(args[0]);
            }
        };

        message.channel.send(e);
    }
}
