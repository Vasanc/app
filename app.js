const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.static('views'))
app.use(express.static('assets'))

const mongoose = require('mongoose')

const url = `mongodb+srv://sample_user:<password>@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.listen(6060,()=>
{
    console.log('app is listening');
})

const homepage = require('./controller/homepage')
app.use(homepage)