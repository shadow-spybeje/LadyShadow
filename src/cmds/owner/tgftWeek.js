let thisWeek = require("../../system/bot/other/thisWeek.json");
const message = require("../../system/events/message");
let changeDate = {
    "month": false,
    "year": false
};
const isOdd = n => !(isNaN(n) && ((n % 1) !== 0) && (n === 0)) && ((n % 2) !== 0) ? true : false;

module.exports = {
    coded: "2020-12-06",
    name: "tgftweek",
    description: "A template creator for the \"This week in TGFT\" board.",
    args: true,
    usage: "<#monthDays> - <#Queens> - Achievement1, achievment2, ... - [changelog]",

    async execute(message, args){
        args = args.join(" ").split(" - ");

        thisWeek.week.monthDays = monthDays = args.shift();
        let queens = args.shift();
        if(isNaN(queens)) return message.channel.send(`${queens} is Not a Number...`);

        queens = await this.queenReport(queens);
        let achievements = await this.achievementReport(args.shift());
        let elections = await this.electionsReport();
        let other = await this.otherReport();
        let changelog = null; if(args[0]) await this.changelogReport(args.shift());

        let report = await this.report(queens, achievements, elections, other, changelog);
        message.channel.send(report/*, {code:'js'}*/);
    },

    async report(queens, achievements, elections, other, changelog){
        console.log(`report: time.date.month: ${thisWeek.date.month}`);

        let endDay = thisWeek.week.start +6;
        if(endDay > thisWeek.week.monthDays) endDay = endDay -thisWeek.week.monthDays;

        let month = thisWeek.date.month;
        if(endDay < thisWeek.week.start) month = thisWeek.date.month -1;
        let start = `${thisWeek.date.year}/${month}/${thisWeek.week.start}`;

        let end = `${thisWeek.date.year}/${thisWeek.date.month}/${endDay}`;
        let dates = `${start} - ${end}`;
        let capShips = `TGFT Capitol ship count: [b][i]52 Tridents and 30 Goliaths in the TGFT Registrar to date![/i][/b]`

        let startDay = thisWeek.week.start +7;
        if(startDay > thisWeek.week.monthDays) startDay = startDay -thisWeek.week.monthDays;
        await this.editJson(null, null, null, startDay, endDay);

        let blank ="\n"; // report.push(blank);
        let report = []; // report.push();
        report.push(dates);
        report.push(capShips);
        report.push(queens);
        report.push(blank);
        //report.push(achievements);
        if(elections) report.push(blank); report.push(elections);
        if(other) report.push(blank); report.push(other);
        if(changelog) report.push(blank); report.push(changelog);

       return report.join("\n")
    },

    async queenReport(queensKilled){
        let week = thisWeek.week;
        let date = thisWeek.date;
        let getFriday = week.start +4;
        if(getFriday > week.monthDays){
            getFriday = getFriday -week.monthDays;
            date.month = date.month+1; //update for the date below.
            changeDate.month = true;

            if(date.month == 12){
                date.month = thisWeek.date.month-11;
                date.year = thisWeek.date.year+1;
                changeDate.year = true;
            };
        };


        let totalQueens = parseInt(thisWeek.queenReport) +parseInt(queensKilled);

        console.log(`editJson: month: ${date.month}`)
        date = `${date.month}/${getFriday}/${date.year}`;
        let txt = `Friday Queening: [b][i]${thisWeek.queenReport} + ${queensKilled} (${date}) = ${totalQueens} queens killed to date![/i][/b]\n${thisWeek.leviReport} Leviathans killed to date.`;
        await this.editJson(changeDate.month, changeDate.year, totalQueens, null, null);
        return txt
    },

    async achievementReport(achievements){
        if(!achievements) return false;
    },

    async electionsReport(){
        let bool = false;
        let array = [];
        let skip = false;
        let count = 0;
        let list = thisWeek.elections;
        if(list.length > 0){
            list.forEach(item => {
                if(isOdd(count)){ // oddNumber (bool)
                    skip = false;
                    if(item == false) skip = true;

                }else{ // evenNumber(string)
                    if(skip == false) array.push(item);

                };
                count++;
            });
            bool = array.join("\n• ");
        };
        return bool;
    },

    async otherReport(){
        let bool = false;
        let array = [];
        let skip = false;
        let count = 0;
        let list = thisWeek.elections;
        if(list.length > 0){
            list.forEach(item => {
                if(isOdd(count)){ // oddNumber (bool)
                    skip = false;
                    if(item == false) skip = true;

                }else{ // evenNumber(string)
                    if(skip == false) array.push(item);

                };
                count++;
            });
            bool = array.join("\n• ");
        };
        return bool;
    },

    async changelogReport(changelog){
        if(!changelog) return false;
        changelog.replace("*** Vendetta", "-- Changelog");
        changelog.replace("- ", "• ");
        return changelog;
    },

    async editJson(month, year, queens, weekStart, weekEnd){
        thisWeek = require("../../system/bot/other/thisWeek.json");
        console.log(`editJson: thisWeek.date.month: ${thisWeek.date.month}`);

        /*if(month && thisWeek.date.month == 12){
            thisWeek.date.month = thisWeek.date.month -11;
        }else if(month && thisWeek.date.month != 12){
            thisWeek.date.month = thisWeek.date.month +1 }*/
        if(year) thisWeek.date.year = thisWeek.date.year +1;
        if(queens) thisWeek.queenReport = queens;
        if(weekStart) thisWeek.week.start = weekStart;
        if(weekEnd) thisWeek.week.end = weekEnd;

        console.log(`editJson-save: thisWeek.date.month: ${thisWeek.date.month}`);
        json = JSON.stringify(thisWeek);
        fs.writeFileSync("./src/system/bot/other/thisWeek.json", json);
    }
}
