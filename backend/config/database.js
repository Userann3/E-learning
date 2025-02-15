const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/E-learning',{
        useNewUrlParser: true,
        useUnifiedTopology: true
        }).then(()=>{
            console.log("Connected to MongoDB");
            }).catch((err)=>{
                console.log("not connected ",err);
    })
}
module.exports=dbConnect;