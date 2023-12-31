import mongoose from "mongoose";
const Schema=mongoose.Schema;
export const ContactSchema = new Schema({
    firstName:{ type:String,
    required:'entrer un prenom'
    },
        lastName:{ type:String,
    required:'entrer un nom de famille'
    },
    email:{ type:String,
    },
    company:{ type:String,
    },
    phone:{ type:Number,
    },
    created_date:{
        type:Date,
        default:Date.now 
    }
})