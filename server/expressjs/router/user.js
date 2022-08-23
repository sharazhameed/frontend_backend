const express = require("express");

const {
  getUser,
  postUser,
  putUser,
  patchUser,
  delUser,
} = require("../controller/usercontroller");

const router = express.Router();

router.get("/user", getUser);

router.put("/user", putUser);

router.patch("/user", patchUser);

router.post("/user", postUser);

router.delete("/user", delUser);

module.exports = router;
