//ready event (ready.js)
module.exports = {
    name: 'ready',
    once: true,
    execute(bot, commandFiles, folder) {
        commandFiles.forEach(cmd => {
            console.log('> ' + `${folder} | ` + `${cmd}`)
        })
        console.log(`----------------------------------------\n¡${bot.user.tag} has been successfully connected!`)
        bot.user.setActivity(`Playing in ${bot.guilds.cache.size}`, {type: "PLAYING"});
    }
}