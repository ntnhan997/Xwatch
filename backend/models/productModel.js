const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = mongoose.Schema({
    _id: {
        type: Number,
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    numReviews: {
        type: Number,
        required: true,
        default: 1
    },
    info: {
        status: String,
        size: String,
        memory: Number,
        color: String,
        material: String,
        internet: String
    }
}, {_id: false});

productSchema.plugin(AutoIncrement);


module.exports = mongoose.model("Product",productSchema);
