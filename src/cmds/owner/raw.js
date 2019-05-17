const fs = require("fs");

module.exports = {
    name: 'raw',
    aliases: ['code'],
    description: "Shows a provided commands `raw` code.",
    usage: "Main = <cmd>\nOther = <support | owner | unloaded> <cmd>",
    args: true,
    owner: true,

    help : "dev",

    execute(message, args) {
        path = `Src/Cmds/general/${args}.js`
        if(args.length > 1) path = `Src/Cmds/${args.join('/')}.js`;
        const codeFile = fs.readFileSync(path, "utf-8");

        if (!codeFile) return message.channel.send("That command does not exist.");
        const code = String(codeFile);

        message.channel.send(code, {code: "js", split: true});
    },
};
