const mongoose = require("mongoose");

const scientistScheema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a valid name"],
  },
  position: {
    type: String,
    required: [true, "please enter a valid position"],
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

module.exports = mongoose.model("scientist", scientistScheema);