const db = require("../index");
const SQL = require("./sql");

const assignCard = (game_id, user_id, card_id) =>
  db.none(
    "UPDATE game_cards SET user_id=${user_id} WHERE game_id=${game_id} AND card_id=${card_id}",
    { game_id, card_id, user_id }
  );

module.exports = assignCard;
