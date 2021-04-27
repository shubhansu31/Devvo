const express = require('express');

const app = express();

let user = [{
    name:"shub",
    email:"shub@gmail.com",
    password:"password"
}];

app.set('view engine' ,  'ejs')
app.use(express.urlencoded({extended:false}))

app.get("/",(req , res) =>{
    res.render('index.ejs', {name : 'Shubhansu'});
})

app.get("/login" , (req , res) => {
    res.render('login.ejs');
})

app.get("/register" , (req , res) => {
    res.render('register.ejs');
})

app.post("/register" , (req , res) =>{
    user.push({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
    }) 
    res.redirect("/login");
})

app.post("/login" , (req , res) =>{
   const name = req.body.name;
   const password = req.body.password;
   let username = user.find(u => u.name === name)
   if(username.password == password){
       res.send("LOGGED IN");
   }
   res.send("ERROR");

})

app.get('/api' , (req, res) => {
    res.send(user)
})

app.listen(3000,() =>{
    console.log("Running server 3000")
})
