const express=require('express');
const sweetRoute=require('./api/routes/sweets')
const namkeenRoute=require('./api/routes/namkeen')
const choclateRoute=require('./api/routes/chocolate')
const icecreamRoute=require('./api/routes/icecreams')
const mongoose=require('mongoose')
const cors =require('cors') 
const app=express();
const bodyParser=require('body-parser')
mongoose.connect('mongodb://0.0.0.0:27017/Samso')

 
mongoose.connection.on('error',err=>{
    console.log('connection falied')
});
mongoose.connection.on('connected',connected=>{
    console.log('connected with database....')
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/sweets',sweetRoute)
app.use('/namkeen',namkeenRoute)
app.use('/chocolate',choclateRoute)
app.use('/icecream',icecreamRoute)
app.use(express.static('test'))

app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})


app.use((req,resp,next)=>{
resp.status(200).json({
    message:'app is running'
})

})

module.exports=app;

