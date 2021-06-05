const { send } = require("../../system/Relay_TGFT-Shadow/Util");
const { images } = require("../srpg/system/srpgImages");

module.exports = {
    coded : "2020-08-08",
    name : "u",
    aliases : ["uboat"],
    description : "Commands for the game \"WolfPack\"",
    help : "owner",

    execute(message, args) {
        function s(text, codeBlock){
            if(!text) return message.channel.send(`\`\`\`xl\nInternalError: cmds/owner/u:12:18\nCannot sent an empty message!`);
            msg = text;

            if(text.isArray) msg = text.join(" ");
            if(codeBlock) codeBlock = {code:'css'}
            return message.channel.send(msg,codeBlock);
        };
        help = false;

        if(args.length==0) help = true;

        if(help){//Display the "Help" for this command.
            help = []; //  help.push();
            help.push(`d, distance | [MastHight, Centiradians, [isZoomed]] -> Distance in Hectometers from target.`);
            help.push(`s, speed -- | [Length, Seconds] -> Target Speed in Knots. (Be @0knts, and about target 90°)`);

            return s('• '+help.join("\n• "), true);
        }; cmd = args.shift().toLowerCase();

        /**
         * Distance is the range of the target from the U-BOAT in `Hectometers`.
         * @param {Number} MastHight `Mast Hight` in meters.
         * @param {Number} Centiradians or `Centiradians`, number of notches on the AP/OP. -> with center line on horizon, `Lines` = number of verticle lines on left side of Periscope.
         * @param {Bool} isZoomed is ther periscope zoomed? `false` by default.
         * @return {Number} distance in `Hectometers` target is away. (x1000 for meters)
         */
        function distance(MastHight, Centiradians, isZoomed){
            if(!MastHight || MastHight<=0) return s(`\`MastHight\` must be greater than 0!`);
            if(!Centiradians || Centiradians<=0) return s(`\`Centiradians\` must be greater than 0!`);
            if(isZoomed=="false"|| isZoomed==0||isZoomed=="true"||isZoomed==1){
                if(isZoomed==false||isZoomed==0)isZoomed=false;
                if(isZoomed==true||isZoomed==1)isZoomed=true;
            }else{ isZoomed=false };//Find our "Zoom" Status.

            Distance = MastHight/Centiradians//(Centiradians) = Distance(Hectometers)
            if(isZoomed) Distance = Distance*4// = Distance(Hectometers)

            //Distance at this point can be used by the TDC, and Cannon.
            //For meters, Distance*100.
            return s(Distance);
        };


        /**
         * Distance is the range of the target from the U-BOAT in `Hectometers`.
         * @param {Number} Length `Length` in meters of the target boat.
         * @param {Number} Seconds `Seconds` it took the boat to pass the center peice of the perriscope from Bow to Stern.
         * @return {Number} `Speed` in knts.
         */
        function speed(Length, Seconds){
            if(!Length || Length<=0) return s(`\`Length\` must be greater than 0!`);
            if(!Seconds || Seconds<=0) return s(`\`Seconds\` must be greater than 0!`);

            Knots = Length/Seconds*1.94;
            Knots = Math.round(Knots*100)/100;//Returns #.## if applicable.

            return s(Knots);
        };


        switch(cmd){
            case('distance'):
            case('d'):
                if(args.length<2) return _send(`Parameters Expected: {MastHight, Centiradians, [isZoomed]}`);
                hight = args[0]; cent = args[1]; zoomed = false; if(args[2]) zoomed = args[2];
                distance(hight,cent,zoomed);
            break;
            case('speed'):
            case('s'):
                if(args.length<2) return _send(`Parameters Expected: {Length, Seconds}`);
                Length = args[0]; Seconds = args[1];
                speed(Length,Seconds);
            break;
            default:
                //`cmd` not recognized. DO NOTHING.
                //Otherwise, Returns `Help` (doneAbove);
        };
    }
};
