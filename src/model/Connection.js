const mongoose=require('mongoose');

const con=mongoose.connect("mongodb+srv://zaidcoder01:Shahzaid1010@@biodata.stdklr9.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
