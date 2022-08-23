const express = require("express");
const movies = require("../model/schemaMongo");

const getMovies = async function (req, res) {
  const showMovies = await movies.find();
  res.json(showMovies);
};

const postMovies = async function (req, res) {
  const movieCreated = new movies({
    title: req.body.title,
    rating: req.body.rating,
  });

  const newMovies = await movieCreated.save();
  res.json(newMovies);
};

const putMovies = function (req, res) {
  res.send("Put movies");
};

const patchMovies = function (req, res) {
  res.send("Patch movies");
};

const delMovies = function (req, res) {
  res.send("Del movies");
};

module.exports = {
  getMovies,
  postMovies,
  putMovies,
  patchMovies,
  delMovies,
};
