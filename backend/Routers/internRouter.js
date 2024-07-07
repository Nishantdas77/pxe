const express = require("express");
const {
  
  findAllInternRecord
  
} = require("../controllers/internController");
const {addIntern}=require("../controllers/addIntern")

const router = express.Router();


router.route("/intern").get(findAllInternRecord);
router.route("/dashboard/addintern").post(addIntern);

module.exports = router;