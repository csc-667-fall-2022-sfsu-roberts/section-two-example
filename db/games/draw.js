const db = require("../index");
const SQL = require("./sql");

const draw = (game_id, count) =>
  db.any(
    "SELECT * FROM game_cards, cards WHERE game_cards.game_id=${game_id} AND game_cards.card_id=cards.id AND game_cards.user_id=0 LIMIT ${count}",
    { game_id, count }
  );

module.exports = draw;
