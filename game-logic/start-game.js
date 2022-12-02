const Games = require("../db/games");

const startGame = (game_id, io) => {
  // Decide who's going first
  Games.setPlayerOrder(game_id)
    .then((seats /* array of user ids */) => {
      // first entry in seats array is current player
    })
    .then((player_ids) => {
      // Deal player hands
      // Game_cards, set the user_id for 7 cards to each user_id
    })
    .then((player_hands) => {
      // Broadcast the game state (different for each user)
      io.emit(`game:${game_id}:start`, {
        game: {
          user_id,
          game_id,
          hand,
          other_players: {
            // Show the number of cards in other player's hands
          },
          is_current,
          discard_card,
        },
      });
    });
};

module.exports = startGame;
