const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
    let replies = ["🟢 Yes.",
     "🔴 No.",
      "🟠 I don't know.",
       "🟠 Ask again later",
        "🔴 Of course no.",
         "🟠 Not really.",
          "🟢 Mosty yes.",
           "🔴 My reply is no.",
            "🔴 My sources say no.",
             "🔴 Outlook not so good.",
              "🟢 Outlook good", 
              "🔴 404",
               "🟢 Signs points to yes.",
                "🟠 Very doubtful",
                 "🟢 Without a doubt",
                 "🟢 Yes - Definitly",
                  "🟢 As google says, yes.",
                 '🟠 Maybe yes.',
                 '🔴 Certainly not.',
                 '🔴 I hope no.',
                 '🔴 I don\'n even can thing on that.',
                 '🟠 There is a good chance.',
                 '🟠 Quite likely.',
                 '🟠 I think so.',
                 '🔴 I hope not.',
                 '🟠 I hope so.',
                 '🔴 Never!',
                '🟢 As I see it, yes.',
            '🟠 Ask again later.',
            "🔴 Better not tell you now.",
            "🟠 Cannot predict now.",
            "🟠 Concentrate and ask again.",
            "🔴 Don't count on it.",
            "🟠 It is certain.",
            "🟠 It is decidedly so.",
        ];

    let result = Math.floor(Math.random() * replies.length);

    let question = args[1].join(" ");


    const embed = new Discord.MessageEmbed()
        .setTitle(`8ball has answered! `)
    .addField(`Question : ${question}`, true)
    .addField(`🎱 ➣ Answer : ${replies[result]}`)
    .setColor("RANDOM")
    message.channel.send(embed)
}

module.exports.config = {
    name: "8ball",
    description: "ask your question to the magically 8ball",
    usage: "/8ball (question)",
    accessableby: "Members",
    aliases: ["8-ball"]
}