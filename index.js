const express = require("express")
const exphbs = require('express-handlebars')
const path = require('path');

const app = express();


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>{
    res.render("index");
})

app.use(express.static('assets'))

// app.get('/profile',(req,res)=>{
//     // var data = {age:29,job:'developer'}
//     // res.render('profile',{person:req.params.name,data:data})
//     // res.send("profile")
//     res.render("profile",{data:'asd'})
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log('listening to ',PORT)})