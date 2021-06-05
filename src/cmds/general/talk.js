module.exports = {
    coded : "2020-05-09",

    name : "talk",
    aliases : ["speak"],
    description : "Shadow wants to talk",
    usage : "<Text>",
    args : true,


    execute(message, args){
        bot = message.client;

        rejection = [`Hey! You're not ${bot.users.cache.get("417022974764253184").tag}!! Get out of my face!!`, "I don't want to talk to you...", "And you are??", "...."];

        accept = ["Hey gurl!!", "What're you up to?", "You wanna talk about something??", "Wannna hang out??"];

        function rand(num){
            return Math.round(Math.random() * (num - 1));
        };

        users = ["417022974764253184", "213250789823610880"]
        if(!users.includes(message.author.id)){
            return message.channel.send(rejection[rand(rejection.length)]);
        }else{

            let msg = "";
            let list = [];


            args.forEach(arg => {
                switch(arg){
                    case("hey"):
                    case("hi"):
                    case("hello"):
                        list = ["Heyas", "How're you??", "Hello. :smile:"];
                        msg = list[rand(list.length)];
                    break;
                    case("war"):
                        list = ["yea?", "War??", "It's a pointless human endeavor pointed at who can kill the most of the other faction... A waste."];
                        msg = list[rand(list.length)];
                    break;
                    case("thank"):
                        list = ["No.. Thank you. :smirk:"];
                        msg = list[rand(list.length)];
                    break;
                    case("ki"):
                    case("keanna"):
                        list = ["She's nice.", "Good art", "friendly", ":heart:"];
                        msg = list[rand(list.length)];
                    break;
                };
            })


            return message.channel.send(msg);
        };
    }
};
