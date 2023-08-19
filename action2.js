const express = require('express')
const app = express();


const port = 2000;



app.listen(port,  () => {
    console.log("app is lesting at port", port)
})
//_______________________________________________________________________________________________\\
const mongoose = require('mongoose');




const dbURL = "mongodb+srv://yousef_awwad:ysf0777807434@cluster0.ckgcjui.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose')
manoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })


User.delet({name:"any name"}).then({
console.log({"NAME DELETED"});
})
User.find

