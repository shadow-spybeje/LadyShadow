module.exports = {
    coded : "2019-08-03",

    name : "shop",
    description : "Buy or Sell all of you SRPG Items in one location!!",
    usage : "[view | buy | sell] <id> [qty]",

    help : "general",

    execute(message, args){
        bot = message.client;

        if(args.length == 0){
            list = [];

            bot.srpg.items.map(item => {
                if(item.hide) return;

                list.push(`${item.value}g ${item.name}`);
            });

            //return message.channel.send('• '+list.join('\n• '), {code:'css',split:true});

            e = new discord.RichEmbed()
              .setTitle("SRPG Shop")
              .setColor(bot.srpg.config.color)
              .setThumbnail(bot.srpg.images.cover.shop[Math.floor(Math.random() * bot.srpg.images.cover.shop.length)])
              .setFooter("..srpg shop [view | buy | sell] <id> [qty]")
              .setDescription(`\`\`\`css\n• ${list.join('\n• ')}\`\`\``)

            return message.channel.send(e);
        };

        switch(args[0].toLowerCase()){
            case("view"): message.channel.send('`srpg.cmds[shop].view`'); break;
            case("buy"): message.channel.send('`srpg.cmds[shop].buy`'); break;
            case("sell"): message.channel.send('`srpg.cmds[shop].sell`'); break;
        };



        //VIEW
        /*
        ..eval //

        item = bot.srpg.items[0];

        e.setTitle(`${item.name} - ${item.type}`);
        e.setColor(item.color);
        e.setFooter(`Value: ${item.value}`);
        e.setThumbnail(bot.srpg.images.items[item.id - 1].image);
        e.setDescription(item.desc);
        if(item.stats) e.addField("Stats", "Work In Process -- Dagger: +1 atk || Shirt: +1 def"); //item.stats
        if(item.buffs) e.addField("[De]Buffs", item.buffs);

        message.channel.send(e);
        */
    },
};
