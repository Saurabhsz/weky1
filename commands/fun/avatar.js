module.exports.run = async (bot, message, args,Discord) => {
const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(`${user.tag}'s avatar!`)
            .setColor("#e4101f")
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
         ) 
}
         module.exports.config = {
            name: "avatar",
            description: "shows the pinged user's avatar or your's if you don't ping",
            usage: "/avatar @user || none",
            accessableby: "Members",
            aliases: ["av","ava","avat"]
        }