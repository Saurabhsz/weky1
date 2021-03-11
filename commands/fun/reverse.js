const { MessageEmbed } = require("discord.js")
module.exports.config = {
    name: "reverse",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..reverse',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {   
         msg = message.content.split(" ").slice(0).join(" ");
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
    

    }}