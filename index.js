const express = require('express')
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js")
const app = express()

//middleware is important. if you want to add with form, form the middle first
app.use(express.json())

//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send('hello there, i am backend developer...')
})


mongoose.connect('mongodb+srv://keryeetan0930:BDzCVm2wJI90j7Dx@backenddb.9bx1pxp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('success connect!');
    app.listen(3000, () => {
        console.log('serve is running on port 3000')
    })
})

.catch(() => {
    console.log('fail to connect')
})