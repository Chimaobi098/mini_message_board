const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function newMessageGet(req, res) {
  res.render("form");
}

async function newMessagePost(req, res) {
  const { message, author } = req.body;
  await db.addMessage(message, author);
  res.redirect("/");
}

async function findMessage(req, res) {
  const message = await db.findMessage(req.params.id);
  console.log(message);

  if (message) {
    res.render("message", { message: message[0] });
  } else {
    res.status(404).send("Message not found");
  }
}

module.exports = {
  getMessages,
  newMessageGet,
  newMessagePost,
  findMessage,
};
