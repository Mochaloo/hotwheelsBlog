const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    _id: Object,
    sku: {
        type: String,
        required: 'This is required'
    },
    modelName: {
        type: String,
        required: 'This is required.'
    },
    category: {
        type: String,
        required: 'This is required'
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    series: {
        type: String
    },
    seriesNo: { 
        type: String
    },
    releaseDate: { 
        type: String
    },
    colour: { 
        type: String
    },
    bodyKit: { 
        type: String
    },
    designer: { 
        type: String
    },
    wheelType: { 
        type: String
    },
    special: { 
        type: String,
    },    
    produceLimit: { 
        type: String,
    }
});

module.exports = mongoose.model('Car', carSchema);
