const mongoose = require("mongoose");

const internScheema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a valid name"],
  },
  department: {
    type: String,
    required: [true, "please enter a valid Department"],
  },
  college: {
    type: String,
    required: [true, "please enter a valid college"],
  },
  address: {
    type: String,
    required: [true, "please Enter a valid address"],
  },
  image: {
    type: String,
    required: [true, "please Enter a valid image"],
  },

  email: {
    type: String,
    required: [true, "please Enter a email"],
  },
  
  phone: {
    type: Number,
    required: [true, "Enter phone Number"],
  },
 
});

module.exports = mongoose.model("intern", internScheema);
