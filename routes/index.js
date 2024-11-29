const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  //   res.send("yooooo");
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    id: messageId++,
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const message = messages.find((msg) => msg.id === parseInt(req.params.id));

  if (message) {
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

// router.post("/new", (req, res) => {
//     res.send()
// });

module.exports = router;
