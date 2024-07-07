const express = require("express");
const {
  
  findAllScientistRecord,
  
} = require("../controllers/scientistController");
const {addScientist}=require("../controllers/addEmployeeController")
const router = express.Router();


router.route("/Scientists").get(findAllScientistRecord);
router.route("/dashboard/addemployee").post(addScientist);

module.exports = router;