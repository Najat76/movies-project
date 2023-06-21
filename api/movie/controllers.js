const Movie = require("../../models/Movie");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
};

const movieCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }
    //console.log(req.body);
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    //console.log(error);
    res
      .status(500)
      .json({ message: " Error: Can not create a new Movie", error });
    //return next(error);
  }
};

const movieUpdateById = async (req, res, next) => {
  const { movieId } = req.params;
  try {
    const foundMovie = await Movie.findById(movieId);
    if (foundMovie) {
      await movieId.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Fix error" });
    //return next(error);
  }
};

const movieDelete = async (req, res, next) => {
  const { movieId } = req.params; // ok
  try {
    const foundMovie = await Movie.findById(movieId); // ok
    //console.log(movieId);

    if (foundMovie) {
      await movieId.deleteOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Fix error" });
    //return next(error);
  }
};

module.exports = { getAllMovies, movieCreate, movieUpdateById, movieDelete };
