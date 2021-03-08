var ms = require('ms')
module.exports = {
    name: "mute",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..mute',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["ONLY_IN_WEKY_SUPPORT_SERVER"],
    async execute(bot, message, args) {
    if (message.guild.id !== '795393018764591134') return message.reply('This command can only be used in another server.');

    let Discord = require('discord.js')
//checking if the member has the mute perms
if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You can not use this command");
//checking if the bot has the mute perms
if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send("I do not have \`MUTE_MEMBERS\` permission.");

const mentionedMember = message.mentions.members.first();
let reason = args.slice(3).join(" ");
let time = args[2];


//checking and making a mute role
const role = message.guild.roles.cache.find(role => role.id === '814569175284318270')
if (!role) {
    try {
        message.channel.send('Muted role is not found, attempting to create muted role.');

        let muterole = await message.guild.roles.create({
            data: {
                name: 'Muted',
                permissions: []
            }
        });
        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
            channel.updateOverwrite(muterole, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: true
            })
        });
        message.channel.send('Muted role has sucessfully been created.');
    } catch (error) {
        console.log(error)
    }
};
const muteRole = message.guild.roles.cache.find(role => role.id === '814569175284318270')



if (!time) return message.channel.send('You must state a duration tempmute with a duration of time. \`-.mute @member time reason\`');
//checking if the args 0 is provided
if (!args[1]) return message.channel.send("\`.mute @member time reason\`");
//checking if there is a mentioned member
if (!mentionedMember) return message.channel.send("Please state a member that is in the server to mute");
//checking if the user using this command is using it on themself
if (mentionedMember.user.id === message.author.id) return message.channel.send("You can not mute yourself");
//checking if the user has used the command on a bot
if (mentionedMember.user.id === bot.id) return message.channel.send("NO");
//automatically changing the reason if none given
if (!reason) reason = "No reason given";
//checking if the member is alredy muted
if (mentionedMember.roles.cache.has(muteRole.id)) return message.channel.send("This user is alredy muted");
//checking if the mentionedMember has a higher role then the autor of the message
if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send("You are not higher than that user.");
if (mentionedMember.hasPermission("ADMINISTRATOR")) return message.channel.send("I cannot mute this user.");
//making an embed to send in user's dms
const muteEmbed = new Discord.MessageEmbed()
    .setTitle(`You were muted in ${message.guild.name}.`)
    .addField(`Reason`, `${reason}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(bot.user.tag, bot.user.displayAvatarURL());


//making an embed to send in chat
message.channel.send(`<@${mentionedMember.id}> has been muted for ${args[2]} due **${reason}**`)
await mentionedMember.send(`You have been muted for ${args[2]} due **${reason}**`)

    await mentionedMember.roles.add(muteRole);

setTimeout(async function () {
    await mentionedMember.roles.remove(muteRole).then(message.channel.send(`<@${mentionedMember.id}> has been unmuted`));
    await mentionedMember.send(`You have been unmuted`).catch(err => console.log(err));
}, ms(time));
    }
}