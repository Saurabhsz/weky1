const SnakeGame = require('snakecord');
const Discord = require("discord.js") //V.12 only
module.exports = {
    name: "snake",
    aliases: ["snakegame"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..snake',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const snakeGame = new SnakeGame({
    title: '🎀 Snake Game 🎀',
    color: "#ff3333",
    timestamp: true,
    gameOverTitle: "🎀 Game Over 🎀"
    })
    snakeGame.newGame(message);
}}