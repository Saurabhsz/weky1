var ms = require('ms')
module.exports = {
    name: "mute",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..mute',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["ONLY_IN_WEKY_SUPPORT_SERVER"],
    async execute(bot, message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have the correct permissions to use this command.')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Member is not found!')
        if(!time) return message.channel.send('Please specify a time.')
        console.log(isNaN(time))
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'Muted')
        if(!role){
            try{
                message.channel.send('Muted role is not found, creating muted role...')

                let muterole = await message.guild.roles.create({
                    data : {
                        name: 'Muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has successfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'Muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.user.tag} has already been muted`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now muted`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.user.tag} is now unmuted`)
        }, ms(time))
    }
}