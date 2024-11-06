const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    conten: {
        type: String,
        required: true
    }, 
    date: {
    type: Date(),
    default: Date.now
    },
    image: {
        type: String, 

    }
})

module.exports = mongoose.model('article', articleSchema)