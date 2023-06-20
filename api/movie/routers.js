const express = require("express");
const routers = express.Router();
const Movie = require("../../models/Movie");
const uploader = require("../../middlewares/uploader");
const {
  getAllMovies,
  movieCreate,
  movieUpdateById,
  movieDelete,
} = require("./controllers");

routers.get("/movies", getAllMovies);
routers.post("/movies", uploader.single("posterImage"), movieCreate);
routers.put("/movies", movieUpdateById);
routers.delete("/movies", movieDelete);

module.exports = routers;
