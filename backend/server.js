let express = require("express")
const bodyParser = require("body-parser")
const app = express()
const api = require("./routes/api")
app.use('/api', api)
app.get('/', (req,res) => {
    res.send("Welcome to the vue_todo backend")
})



app.listen(4200)
