const mongoose = require('mongoose');

const fitnessTipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('FitnessTip', fitnessTipSchema);