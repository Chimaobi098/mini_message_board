const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.getMessages);

router.get("/new", mainController.newMessageGet);

router.post("/new", mainController.newMessagePost);

router.get("/message/:id", mainController.findMessage);

module.exports = router;
