const mongoose = require("mongoose");

const connectDatabase = () => {
  //connecting to the database

  mongoose.connect("mongodb://0.0.0.0:27017/pxe").then(() => {
    console.log("server connected sucessfully");
  }).catch((error)=>{
    console.log("can not connect to server")
    console.log(error.message)
  });
};

module.exports = connectDatabase;