const txtgen = require('txtgen')
module.exports = {
    name: "fasttype",
    aliases: ["typefast"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..fasttype',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const { FastType } = require('weky')
const game = new FastType({
    message: message,
    winMessage: "GG you won!", //message sent when user types perfectly
    sentence: txtgen.sentence(), //sentence-to-be-typed
    loseMessage: 'Lost ;(', //message sent when user misspell it
    time: 50000, //time that user has in ms
    startMessage: 'Good Luck!' //message sent when user starts playing
})
game.start()
}
}
const txtgen = require('txtgen')
const { FastType } = require('weky') 

module.exports = {
name: "fastype",
aliases: ["fast-type"],
description: "fast type game",
run: async (client, message, args) => {

}}