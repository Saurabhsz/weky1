const mongoose = require('mongoose')

const lmao = mongoose.Schema({
    id: {
      type: String,
      required: true
    },
      username: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('premium', lmao)