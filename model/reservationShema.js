import mongoose from 'mongoose';
import validator from 'validator';

const reservationShema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        minLength:[3,"First name must containe at least 3 characters"],
        maxLength:[30,"First name must containe at least 30 characters"]

    },

    LastName:{
        type:String,
        required:true,
        minLength:[3,"Lat name must containe at least 3 characters"],
        maxLength:[30,"Last name must containe at least 30 characters"]

    },
    Email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"Provide Valid Email.."]
    },

    Phone:{
        type:String,
        required:true,
        minLength:[10,"Phone Number must be containe 10 number"],
        maxLength:[10,"Phone Number must be containe 10 number"]

    },

    time:{
        type:String,
        required:true,

    },

    date:{
        type:String,
        required:true
    }

})

export const Reservation=mongoose.model("Reservation",reservationShema);