const express = require('express')
const app = express()
const hbs = require('hbs')


app.use(function (req, res, next) {

    let timenow = new Date();
    let hour = timenow.getHours()
    console.log(hour)
    if(hour>=8 && hour<=18){
        next()
    }
    else{
        res.send('Our office is not open now')
    }
   
  });


app.set('view engine' , hbs)
app.get('/home', (req,res)=>{
    res.render('home.hbs')
})


app.get('/ourservices', (req,res)=>{
    res.render('ourservices.hbs')
})

app.get('/contact', (req,res)=>{
    res.render('contact.hbs')
})

app.listen(3000,(err) => {
    if (err){
        console.log('server is not running')
    }
    else 
{
    console.log('server is running on port 3000')
}
})