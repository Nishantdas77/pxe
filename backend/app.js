const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//config file
require("dotenv").config();

const app = express();

//Request body setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);



app.use("/uploads", express.static(path.join(__dirname, "./backend/uploads")));
console.log(path.join(__dirname, "/uploads"));

//for sending files

app.get("/uploads/:file", (req, res) => {
  try {
    const filePath = path.join(__dirname, `./uploads/${req.params.file}`);
    console.log(filePath);
    res.sendFile(filePath);
  } catch (error) {
    console.log(error);
  }
});


const scientistRouter = require("./Routers/scientistRouter");
app.use(scientistRouter);
const HrdcRouter = require("./Routers/hrdcRouter");
app.use(HrdcRouter);
const InternRouter = require("./Routers/internRouter");
app.use(InternRouter);


module.exports = app;