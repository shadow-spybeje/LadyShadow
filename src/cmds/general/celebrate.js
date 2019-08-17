module.exports = {
    coded : "2019-08-17",

    name : "celebrate",
    description : "Celebrate Lillth's Birhtday.",

    help : "",
    easteregg : true,
    guildOnly : true,

    execute (message) {
        bot = message.client;

        let userF = function (id, tag) {
            info = {
                id : id,
                tag : tag,
            };

            return info;
        };

        let u = message.author;
        userInfo = userF(u.id, u.tag)

        ch = bot.channels.get("569001544926887946");
        ch.send(userInfo ,{code:"js"});
    },
};
