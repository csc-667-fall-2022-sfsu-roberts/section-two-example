const db = require("../index");

const hasStarted = (game_id) =>
  db
    .any("SELECT * FROM game_users WHERE game_id=${game_id}", { game_id })
    .then((user_ids) => user_ids.length === 2);

module.exports = hasStarted;
