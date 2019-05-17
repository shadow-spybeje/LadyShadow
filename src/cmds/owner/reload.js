discord = require('discord.js');

module.exports = {
    coded : "2019-04-22",
    name : "reload",
    description : "reloads specified cmd.",
    usage : "<cmd> || <<support | owner | unloaded> cmd>>",
    owner : true,

    help : "dev",

    execute (message, args) {
        bot = message.client;

        if(!args || args.length < 1) return message.reply("Provide a `Category` and `Cmd`to reload.");
        cmd = args.pop();
        let cat = "";

        const cats = ["general", "support", "owner", "unloaded"];
        if(args.length <= 1){
            cat = args.shift();
        };

        if(args.length == 0 && !cat) cat = "general";

        args = [cat, cmd]

        if(!cats.includes(cat)) return message.reply(`\`${cat}\` is not an acceptable Category!!\nTry \`general | support | owner | unloaded\` instead.`);



      // Check if the command exists and is valid
        categories = {
            "general" : bot.cmds.general,
            "support" : bot.cmds.support,
            "owner" : bot.cmds.owner,
            "unloaded" : bot.cmds.unloaded
        }

        if (args.length >= 2){
            if(!categories[cat].has(cmd)) {
                return message.reply(`\`${cat}/${cmd}\` does not exist`);
            };

        } else {
            if(!bot.cmds.general.has(cmd)) {
                return message.reply(`\`general/${cmd}\` does not exist`);
            };
        };


      // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`.././${cat}/${cmd}`)];


      // We also need to delete and reload the command from the bot.cmds Enmap
        if (args.length >= 1){
            categories[cat].delete(cmd);
        } else {
            bot.cmds.general.delete(cmd);
        };


        const cmdFile = require(`.././${cat}/${cmd}`);
        if (args.length >= 1){
            categories[cat].set(cmd, cmdFile);
        } else {
            bot.cmds.general.set(cmd, cmdFile);
        };


        e = new discord.RichEmbed();
        e.setColor("ffff00")
        e.setTitle("Reload")
        e.setDescription(`__**${cmd}**__ has been reloaded.\nPath : \`./LadyShadow-git/Src/Cmds/${args.join('/')}.js\``)
        e.setFooter(bot.functions.get("date").execute(Date.now()))

        message.channel.send(e);
    }
}
