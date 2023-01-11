const db = require("../index");
const SQL = require("./sql");
const count = require("./count");
const assignCard = require("./assignCard");
const draw = require("./draw");
const assignUserSeat = require("./assignUserSeat");

const INITIAL_CARD_COUNT = 7;

const debug = (msg) => (result) => {
  console.log(msg, result);
  return result;
};

const start = (game_id) =>
  count(game_id)
    .then(debug("After count"))
    // Setting current player, Setting current player
    .then(({ user_ids }) =>
      Promise.all([
        user_ids,
        ...user_ids.map(({ user_id }, index) =>
          assignUserSeat(game_id, user_id, index)
        ),
      ])
    )
    .then(debug("After assign user seats"))
    .then(([user_ids]) =>
      Promise.all([
        user_ids,
        draw(game_id, user_ids.length * INITIAL_CARD_COUNT),
      ])
    )
    .then(debug("After draw"))
    // Assign initial cards to each player in the game
    .then(([user_ids, cards]) =>
      Promise.all(
        user_ids.reduce((memo, { user_id }, user_index) => {
          for (let i = 0; i < INITIAL_CARD_COUNT; i++) {
            memo.push(
              assignCard(
                game_id,
                user_id,
                cards[user_index * INITIAL_CARD_COUNT + i].id
              )
            );
          }

          return memo;
        }, [])
      )
    )
    .then(debug("After assigning cards"))
    // Set discard card
    .then(() => draw(game_id, 1))
    .then(debug("After drawing discard"))
    .then(([card]) => assignCard(game_id, -1, card.id))
    .then(debug("After assigning discard"));

module.exports = start;
