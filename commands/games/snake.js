
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
const SnakeGame = require('snakecord');

    const snakeGame = new SnakeGame({
    title: '🎀 Snake Game 🎀',
    color: "#ff3333",
    timestamp: true,
    gameOverTitle: "🎀 Game Over 🎀"
    })
    snakeGame.newGame(message);
            };
            
            module.exports.help = {
                aliases: [],
                  name: 'snake',
                  description: 'Snake game.',
                  usage: config.prefix + 'snake',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'games',
              disable: false,
              cooldown: 1000,
            };