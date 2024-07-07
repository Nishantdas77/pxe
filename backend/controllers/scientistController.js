const scientistModel = require("../models/ScientistDB");

exports.findAllScientistRecord = async (req, res) => {
    try {
      const allScientistRecords = await scientistModel.find();
      res.status(200).json({
        sucess: true,
        allScientistRecords,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        errorMessage: error.message,
      });
    }
  };