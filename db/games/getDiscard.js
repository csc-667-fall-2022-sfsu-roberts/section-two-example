const db = require("../index");
const SQL = require("./sql");

const getDiscard = (game_id) =>
  db.one(
    "SELECT * FROM game_cards, cards WHERE game_id=${game_id} AND game_cards.card_id=cards.id AND user_id=-1",
    {
      game_id,
    }
  );

module.exports = getDiscard;
