const db = require("../index");
const SQL = require("./sql");

const join = (game_id, user_id) =>
  db
    .none(SQL.CHECK_ACTIVE_GAMES, { game_id, user_id })
    .then(() => db.one(SQL.ADD_USER_SQL, { game_id, user_id }))
    .then(() => db.any(SQL.USERS_IN_GAME, { game_id }))
    .then((user_ids) => ({ game_id, user_ids, count: user_ids.length }));

module.exports = join;
