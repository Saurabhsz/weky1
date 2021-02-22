const mongoose = require('mongoose')

const no = mongoose.Schema({
    id: {
      type: String,
      required: true
  }
})
module.exports = mongoose.model('blacklist', no)