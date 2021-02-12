const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const mongoose = require('mongoose')


const prodRoutes = require('./routes/product')

mongoose.connect('mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/nodeTask?retryWrites=true&w=majority',
{
     useNewUrlParser: true,
     useUnifiedTopology: true

}
).then(() => {
    console.log(" database connected")
})
.catch((err) => {
    console.log(err)
})



//middleware
app.use(bodyParser.json())
app.use(cookieParser())


//Routes
app.use("/api", prodRoutes)

const port = process.env.PORT || 3030
app.listen(port,() => {
    console.log(`server is litup on ${port}`)
})