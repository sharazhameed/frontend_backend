const express = require("express");

const getUser = function (req, res) {
  res.send("Get user");
};

const postUser = function (req, res) {
  res.send("Post user");
};

const putUser = function (req, res) {
  res.send("Put user");
};

const patchUser = function (req, res) {
  res.send("Patch user");
};

const delUser = function (req, res) {
  res.send("Delete user");
};

module.exports = {
  getUser,
  postUser,
  putUser,
  patchUser,
  delUser,
};
