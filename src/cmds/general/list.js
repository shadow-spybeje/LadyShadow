module.exports = {
    coded : "2019-07-09",

    name : "list",
    description : "List various games played by members on the support server.",
    usage : "<eoa | ff | tos | wot | wow",

    help : "",
    args : true,
    easterEgg : true,
    guildOnly : true,
    supportOnly : true,

    execute(message, args){
        bot = message.client;

        if(message.guild.id != "416906584900239370") return message.channel.send("This is a Support.Server.Only command.\n Please run this command on the Support Server.")

        _tag = args[0].toLowerCase();
        tags = ["eoa", "ff", "tos", "wot", "wow"];

        hasTag = tags.some(tag => { if(tag == _tag) return true; });
        if(!hasTag) return;

        let id = "";
        switch(_tag){
            case("eoa"):
                id = "428491848353579009";
            break;
            case("ff"):
                id = "558912585085353984";
            break;
            case("tos"):
                id = "425415778385264650";
            break;
            case("wot"):
                id = "558912737296777226";
            break;
            case("wow"):
                id = "598595267259924500";
            break;
            default:
                return;
        };


        exists = false;
        exists = message.guild.roles.some(role => { if(role.id == id) return true; });

        if(exists == false) return message.channel.send(`The role related to ${_tag} has been deleted.\nPlease have an \`@\` owner re-create one.`);

        _target = message.guild.roles.get(id);
        list = [];

        message.guild.members.cache.forEach(member => { if(member.roles.has(_target.id)) list.push(member.user.tag); });

        message.channel.send(`• `+list.join(",\n• "),{split: true, code: 'js'});
    },
};
