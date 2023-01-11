const db = require("../index");
const SQL = require("./sql");

const getCurrentPlayerId = (game_id) =>
  db.one(
    "SELECT user_id FROM game_users WHERE game_id=${game_id} AND current=true",
    { game_id }
  );

module.exports = getCurrentPlayerId;
