module.exports.run = async (bot, message, args) => {
async function getLeaderobard() {
    var replyString = "";
    await leaderboardData.findOne({
        id: message.author.id
    }, (err, data) => {
        if(err) return console.log(err)
        if(data == null) {
            return message.channel.send(`There was an error or no one from here has been used any currency command from Weky.`)
        } else {
            var Array_names = [];
            var Array_values = [];
            
            Array_names = JSON.parse(data.id)
            Array_values = JSON.parse(data.Wallet)
            var first_num = Math.max(...Array_values)

            for (let index = 0; index < Array_values.length; index++) {
                const element = Array_values[index];
                if(element == first_num)
                console.log(element)
                replyString += element + `  -  ` + Array_names[index] + "\n";

                Array_values.splice(index, 1);
                Array_names.splice(index, 1);
break;
            }
        }
        var first_num = Math.max(...Array_values)

        for (let index = 0; index < Array_values.length; index++) {
            const element = Array_values[index];
            if(element == first_num)
            console.log(element)
            replyString += element + `  -  ` + Array_names[index] + "\n";

            Array_values.splice(index, 1);
            Array_names.splice(index, 1);
break;
        }
    }) 
    message.channel.send(replyString)
}
getLeaderboard();
}
  module.exports.config = {
    name: "lb",
    aliases: ["leaderboard"]
}