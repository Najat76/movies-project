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

//Refactoring the Code
//routers.param("movieId", (req, res, next, movieId) => {});

routers.get("/movies", getAllMovies);
routers.post("/movies", uploader.single("posterImage"), movieCreate);
//routers.put("/movies/:movieId", movieUpdateById);
routers.put("/movies", uploader.single("posterImage"), movieUpdateById);
// routers.delete("/movies/:movieId", movieDelete);
routers.delete("/movies", movieDelete);

module.exports = routers;
