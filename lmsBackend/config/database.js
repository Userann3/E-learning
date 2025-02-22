const mongoose = require('mongoose');


exports.database = ()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/lmsCollection");
        console.log("Database connected successfully");
    } catch(err){
        console.log("Database not connected this is the problem: ",err)
    }
}