const hrdcModel = require("../models/hrdcDB");

exports.findAllHrdcRecord = async (req, res) => {
    try {
      const allHrdcRecords = await hrdcModel.find();
      res.status(200).json({
        sucess: true,
        allHrdcRecords,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        errorMessage: error.message,
      });
    }
  };