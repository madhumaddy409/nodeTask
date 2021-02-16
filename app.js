const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
// const cluster = require('cluster')
const os = require('os')

const cpus = os.cpus().length
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

//swagger API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', prodRoutes);

const newCpu = os.cpus().length

const port = process.env.PORT || 3030
app.listen(port,() => {
    console.log(`server is litup on ${port}`)
})

