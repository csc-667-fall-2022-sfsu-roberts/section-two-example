const db = require("../index");
const SQL = require("./sql");

const count = (game_id) => db.one(SQL.COUNT_USERS_IN_GAME, { game_id });

module.exports = count;
