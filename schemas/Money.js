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
      premium: {
        type: Number,
        default: 0
      },
})
module.exports = mongoose.model('MoneyData', profileSchema)