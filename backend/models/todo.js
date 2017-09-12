let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/vue_todo')

let todoSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    priority : {
        type: Number,
        required : true,
        min : 1,
        max : 5
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

let Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo