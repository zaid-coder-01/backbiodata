const mongoose=require('mongoose');

const con=mongoose.connect("mongodb+srv://zaidcoder:WZptH0OjYjn4GNbo@cluster0.jhvuhkc.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})
