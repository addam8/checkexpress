const express= require ("express")
const app= express()
const port=5000
const worktime = require ("./Time")
  


app.use (worktime)
app.get ("/",(req,res)=>(
    res.sendFile(__dirname+"/Public/HomePage.html")))

app.get ("/service",(req,res)=>(
    res.sendFile(__dirname+"/Public/Services.html")))

app.get ("/contact",(req,res)=>(
    res.sendFile(__dirname+"/Public/Contact.html")))

    app.get ("*",(req,res)=>(
        res.sendFile(__dirname+"/Public/Navbar.html")))
    



    app.listen(port,err=>(
        err? console.log(err):console.log(`serveur is on port:${port}`)
    ))