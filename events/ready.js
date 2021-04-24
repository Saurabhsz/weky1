//ready event (ready.js)
module.exports = (bot, message) => {
        commandFiles.forEach(cmd => {
            console.log('> ' + `${folder} | ` + `${cmd}`)
        })
        console.log(`----------------------------------------\n¡${bot.user.tag} has been successfully connected!`)
        bot.user.setActivity(`Playing in ${bot.guilds.cache.size} servers with ${bot.users.cache.size} users | ..vote`, {type: "PLAYING"});
    }