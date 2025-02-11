const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controller");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.post("/login", userController.login);

module.exports = router;
