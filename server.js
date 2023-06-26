const express = require ('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')


app.use(express.json())
mongoose.connect("mongodb+srv://youssefouni333:youssefouni333@youssef0.pygn5wh.mongodb.net/mongooseWork?retryWrites=true&w=majority")
.then(() => console.log("database connected"))
.catch((err) => {if (err) throw err})
app.listen(PORT, () => console.log("listening on port", PORT))


app.use('/api' , require("./routes/contactRoutes"))