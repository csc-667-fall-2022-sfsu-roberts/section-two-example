const Games = require("../db/games");
const status = require("./status");

const debug = (msg) => (result) => {
  console.log(msg, result);
  return result;
};

const startGame = (game_id, io) => {
  return Games.start(game_id)
    .then(debug("After start in startGame"))
    .then(() => {
      io.emit(`games:${game_id}:start`, {});
    })
    .then(() => status(game_id, io));
};

module.exports = startGame;
