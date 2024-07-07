const intern = require("../models/InternDB");



exports.addIntern = async (req, res) => {
  try {
    
    // var url = "";
    // if (req.image) {
    //   const files = req.image;
    //   if (files !== undefined) {
    //     url = `http://localhost:4000/uploads/${req.files[0].filename}`;
    //     console.log(url);
    //   }
    // }


    const findIntern = await intern.findOne({
      email: req.body.email,
    });

    if (findIntern) {
      return res.status(403).json({
        sucess: false,
        message: "user already exist",
      });
    }

    console.log(req.body);

    const newIntern = await intern.create({
      name: req.body.name,
      email: req.body.email,
      department: req.body.department,
      college:req.body.college,
      address: req.body.address,
      image: req.body.image,
      phone: req.body.phone,
    });
    console.log(newIntern);
    // const jwtData = {
    //   id: newUser._id,
    // };

    

    res.status(201).json({
      sucess: true,
      newIntern,
      
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      errorMessage: error.message,
    });
  }
};