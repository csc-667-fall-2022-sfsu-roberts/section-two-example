const db = require("../index");
const SQL = require("./sql");

const assignUserSeat = (game_id, user_id, seat) =>
  db.none(
    "UPDATE game_users SET seat=${seat}, current=${current} WHERE game_id=${game_id} AND user_id=${user_id}",
    { game_id, user_id, seat, current: seat === 0 }
  );

module.exports = assignUserSeat;
