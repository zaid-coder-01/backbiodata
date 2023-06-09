const mongoose=require('mongoose')

const apiCategory=new mongoose.Schema({
    नाव:{
        type:String,
    },
    जन्मतारीख:{
        type:String,
    },
    जन्माचीवेळ:{
        type:String,
    },
    जन्मस्थळ:{
        type:String,
    },
    नावरसनाव:{
        type:String,
    },
    धर्मजात:{
        type:String,

    },
    पत्ता:{
        type:String,
    },
    मो:{
        type:String,
    },
    नक्षत्र:{
        type:String,
    },
    देवक:{
        type:String,
    },
    गोत्र:{
        type:String,
    },
    कुलदैवत:{
        type:String,
    },
    फोटो:{
        type:String,
    },
    email:{
        type:String,  
    }
})
const Biodata=new mongoose.model("Biodata",apiCategory);
module.exports=Biodata;