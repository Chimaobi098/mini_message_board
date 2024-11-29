const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

const messages = [
  {
    id: 0,

    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

let messageId = 2;

router.get("/", mainController.getMessages);

router.get("/new", mainController.newMessageGet);

router.post("/new", mainController.newMessagePost);

router.get("/message/:id", mainController.findMessage);

module.exports = router;
