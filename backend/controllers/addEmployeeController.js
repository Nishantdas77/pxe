const scientist = require("../models/ScientistDB");



exports.addScientist = async (req, res) => {
  try {
    

    const findscientist = await scientist.findOne({
      email: req.body.email,
    });

    if (findscientist) {
      return res.status(403).json({
        sucess: false,
        message: "user already exist",
      });
    }

    console.log(req.body);

    const newScientist = await scientist.create({
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      address: req.body.address,
      image: req.body.image,
      phone: req.body.phone,
    });
    console.log(newScientist);
    // const jwtData = {
    //   id: newUser._id,
    // };

    

    res.status(201).json({
      sucess: true,
      newScientist,
      
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      errorMessage: error.message,
    });
  }
};