
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            const txtgen = require('txtgen')
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
            };
            
            module.exports.help = {
                aliases: ['ff'],
                  name: 'fasttype',
                  description: 'Fast type game.',
                  usage: config.prefix + 'fasttype',
              };
            
            module.exports.config = {
                args: false,
                restricted: false,
                category: 'games',
                disable: false,
                cooldown: 1000,
            };
            