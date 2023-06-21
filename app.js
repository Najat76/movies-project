const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const path = require("path"); //image File
const notFoundHandler = require("./middlewares/notfound");
const errorHandler = require("./middlewares/errorHandle");
const connectDB = require("./database");
const routers = require("./api/movie/routers");

const PORT = 8000;

//declare variables
const app = express();

//Define Routes

//image - not finished yet
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", routers); //chack this
app.use("/media", express.static(path.join(__dirname, "media")));

//middlewares
app.use(notFoundHandler);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
