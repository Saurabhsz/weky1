const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    Cmds: Array,
    Guild: String
});

const MessageModel = module.exports = mongoose.model('cmds', PrefixSchema);