const db = require("../index");
const SQL = require("./sql");

const hand = (game_id, user_id) =>
  db.any(
    "SELECT * FROM game_cards, cards WHERE game_cards.game_id=${game_id} AND game_cards.user_id=${user_id} AND game_cards.card_id=cards.id",
    { game_id, user_id }
  );

module.exports = hand;
