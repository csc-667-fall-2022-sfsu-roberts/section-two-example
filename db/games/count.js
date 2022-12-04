const db = require("../index");
const SQL = require("./sql");

const count = (game_id) =>
  db
    .any(SQL.USERS_IN_GAME, { game_id })
    .then((user_ids) => ({ count: user_ids.length, user_ids }));

module.exports = count;
