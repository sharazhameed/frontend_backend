const express = require("express");
const {
  getMovies,
  postMovies,
  putMovies,
  patchMovies,
  delMovies,
} = require("../controller/moviescontroller");

const router = express.Router();

router.get("/movies", getMovies);

router.put("/movies", putMovies);

router.patch("/movies", patchMovies);

router.post("/movies", postMovies);

router.delete("/movies", delMovies);

module.exports = router;
