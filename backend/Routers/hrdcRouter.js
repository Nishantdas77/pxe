const express = require("express");
const {
  
  findAllHrdcRecord,
  
} = require("../controllers/hrdcController");
const router = express.Router();


router.route("/Hrdc").get(findAllHrdcRecord);

module.exports = router;