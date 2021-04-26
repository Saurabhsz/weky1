            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
              var randomWords = require('random-words');
              const word = randomWords()
              const { ShuffleGuess } = require('weky')
          const game = new ShuffleGuess({
              message: message,
              word: word,
              winMessage: "GG you won!",
          })
          game.start()
            };
            
            module.exports.help = {
                aliases: ['shuffleguess'],
                  name: 'suffle-guess',
                  description: 'Shuffle guess game.',
                  usage: config.prefix + '8ball %question%',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };