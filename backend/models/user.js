let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vue_todo')

let userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: EMAIL_REGEX
    },
    password: {
        type: String,
        required: true
    },
    todos: [{type: mongoose.Schema.Types.ObjectId, ref : "Todo"}]
})

let User = mongoose.model('User', userSchema)
module.exports = User