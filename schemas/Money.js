const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    id: {
      type: String,
      required: true
  },
    Wallet: {
      type: Number,
      default: 100
  },
    Bank: {
      type: Number,
      default: 0
    },
    space: {
      type: Number,
      default: 5000
    },
    usedCommands: {
      type: Number,
      default: 0
    },
    blackjackWins: {
      type: Number,
      default: 0
    },
    fasttypeWins: {
      type: Number,
      default: 0
    },
    fightWins: {
      type: Number,
      default: 0
    },
    shuffleGuessWins: {
      type: Number,
      default: 0
    },
    tictactoeWins: {
      type: Number,
      default: 0
    },
    triviaWins: {
      type: Number,
      default: 0
    },
    slotsWins: {
      type: Number,
      default: 0
    },
})
module.exports = mongoose.model('MoneyData', profileSchema)