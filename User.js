//Password Storage schema

//for a Model js page   
//***const mongojs require***
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,
	match: [/.+@.+\..+/, "Please enter a valid e-mail address"]  },
  password: {
     type: String,
     trim: true,
     required: true,
     validate: [
       function(input) {
         return input.length >= 6;
         
       }
     ]
   },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;