const internModel = require("../models/InternDB");

exports.findAllInternRecord = async (req, res) => {
    try {
      const allinternRecords = await internModel.find();
      res.status(200).json({
        sucess: true,
        allinternRecords,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        errorMessage: error.message,
      });
    }
  };