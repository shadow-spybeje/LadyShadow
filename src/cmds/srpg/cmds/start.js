module.exports = {
    coded : "2019-07-09",

    name : "start",
    description : "Start your life in the Shadow RPG.",
    usage : "<Hunter | Mage | Warrior>",

    help : "basic",
    args : true,
    guildOnly : true,

    execute(message, args){
        let bot = message.client;
        let fs = require('fs');
        let discord = require('discord.js');
        let e = new discord.RichEmbed();

        srpgTrue = false;
        bot.srpg.users.some(user => { if(user.id == message.author.id) return srpgTrue = true; } );

        if(srpgTrue) return message.channel.send(`We're sorry, however you already have an S.RPG account.. If you'd like to reset your account, please talk to an S.RPG Admin on our Support Server. \`${bot.settings.g.get(message.guild.id).prefix}invite\` --> \`Support\``)


        let classes = ["Hunter", "Mage", "Warrior"];
        _class = args[0].toLowerCase().charAt(0).toUpperCase() + args[0].slice(1);
        e.setTimestamp();

        isClass = classes.some(_classy => {if(_classy == _class) return true});

        if(!isClass) {
            e.setTitle("Hmm.. :/");
            e.setColor(16711680);
            e.setDescription(`Unfortunately, **${args[0]}** isn't an available class..\n  Instead why don't you give our **Hunter**, **Mage**, or **Warrior** classes a try?`);

            return message.channel.send(e);
        };


        try{
            bot.functions.get("default").execute("srpguser", message.author, bot);
        }catch(e){
            return bot.functions.get("err").execute(message, e);
        };


        if(!bot.srpg.clans.get(message.guild.id)) try{
            bot.functions.get("default").execute("srpgclan", message.guild, bot);
        }catch(e){
            return bot.functions.get("err").execute(message, e);
        };

        let clanID = bot.srpg.clans.get(message.guild.id).id;

        stats = bot.srpg.classes[_class.toLowerCase()].stats

        file = bot.srpg.users.get(message.author.id);
        file.class = _class;
        file.stats = stats;
        file.clan = clanID;
        json = JSON.stringify(file);
        fs.writeFile(`../../bot_db/srpg/users/${message.author.id}.json`, json, (e) => console.log(e));
        bot.srpg.users.set(message.author.id, file);

        user = bot.srpg.users.get(message.author.id);

        e.setTitle("Welcome to the S.RPG!!");
        e.setColor("AQUA");
        e.setDescription(`\`\`\`js\n Name : ${user.name}\n Clan : ${bot.srpg.clans.get(user.clan).name}\nClass : ${user.class}\n   HP : ${user.stats.hp*60}\n  Def : ${user.stats.def*15}\n  Atk : ${user.stats.atk*10}\`\`\``);

        message.channel.send(e);
    },
};
