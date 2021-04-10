const mongoose = require('mongoose');

const PrefixSchema = new mongoose.Schema({
    prefix: {
        type: String,
        default: ".."
        },
    GuildID: {
    type: String
    },
    logs_channel: {
    type: String,
    },
    chatbox_channel: {
        type: String,
        },
    automeme_channel: {
        type: String,
        },
    leveling: {
        type: String,
        },
});

const MessageModel = module.exports = mongoose.model('Guild', PrefixSchema);