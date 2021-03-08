//ready event (ready.js)
module.exports = {
    name: 'ready',
    once: true,
    execute(client, commandFiles, folder) {
        commandFiles.forEach(cmd => {
            console.log('> ' + `${folder} | ` + `${cmd}`)
        })
        console.log(`----------------------------------------\n¡${client.user.tag} has been successfully connected!`)
        bot.user.setActivity(`Playing in ${bot.guilds.size}`, {type: "PLAYING"});
    }
}