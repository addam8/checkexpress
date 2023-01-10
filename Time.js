
const today= new Date()
const hour= today.getHours()
const day= today.getDay()

const date= (req,res,next)=> { 
    !(day>=1 && day<=5 && hour>=9 && hour<20 ) && res.send("were close for today try tomorrow") ;
    }

    module.exports = date