module.exports = {
    coded: "2020-11-06",
    name: "droll",

    rand(num){
        return Math.floor((Math.random() * num) + 1);
    },

    execute(message, args){
        let type = args[0];
        let qty = 1;
        if(args.length > 1){
            type = args[1];
            if(!isNaN(args[0])) qty = args[0];
        };

        /**
         * 4= .
         * 6= .
         * 8= .
         * 10= 0-9
         * 12= .
         * 100= 1-100
         */
        let dice = ['4', '6', '8', '10', '12', '20', '100'];

        if(!dice.includes(type)) return message.reply(`${type} is not a valid die, try using one of these: d${dice.join(", d")} instead.`);

        let rolls = [];
        for( i=0; i<qty; i++){
            rolls.push(this.rand(type));
        };

        message.reply(`your d${type}: ${rolls.join(", ")}`);
    }
}
