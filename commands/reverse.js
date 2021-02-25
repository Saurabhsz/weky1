const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    msg = message.content.split(" ").slice(1).join(" ");
    if(!msg){
        return message.channel.send(`You need to gib me a word or more to reverse`)
    }
    function reverseStr(str, x) {
        let rev = '';
        for (let i = str.length - 1; i  >= 0; i--) {
            x === true ? rev += str[i] : str += rev;
        }
        return message.channel.send(`**Original:** ${msg}\n\n**Reversed:** ${rev}`)
    }
    
    reverseStr(msg, true); // Output: yppah eB
    

    };
    module.exports.config = {
        name: "reverse",
        description: "Reverses the message that you sent",
        usage: "/reverse",
        accessableby: "Members",
        aliases: []
    }