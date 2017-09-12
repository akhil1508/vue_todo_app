let User = require("../models/user")
let Todo = require("../models/todo")
let router = require("express").Router()

router.get('/users', (req,res) => {
    User.find().then((users) =>{
        res.json(users)
    })
})
module.exports = router