const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
    }

    // title :{
    //     type: String,
    //     required: true
    // }
})


module.exports = mongoose.model("Product",productSchema);