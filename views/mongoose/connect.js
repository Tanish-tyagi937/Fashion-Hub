const mongoose = require('mongoose');
let dbconnect = mongoose.connect("mongodb+srv://tyagitanish937:1kaPhMwoxmoLJsgf@cluster0.qzcaiqp.mongodb.net/ecomm").then(()=>{
        console.log("database connected");
}).catch((err)=>{
        console.log(err);
})
module.exports = dbconnect;
