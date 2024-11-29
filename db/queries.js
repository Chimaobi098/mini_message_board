const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

async function addMessage(message, author) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1,$2)", [
    message,
    author,
  ]);
}

async function findMessage(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows;
}

module.exports = {
  getMessages,
  addMessage,
  findMessage,
};
