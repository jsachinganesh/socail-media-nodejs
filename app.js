const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('view engine',"pug");
app.set('views',path.join(__dirname,'views'));

app.use(express.json({limit:'10kb'}));



if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

app.get('/',(req,res,next)=>{
    res.status(200).send(`<h1>hello</h1>`);
})

module.exports = app;