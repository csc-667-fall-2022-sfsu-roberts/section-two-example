const express = require("express");
const router = express.Router();

const Games = require("../../db/games");
const { PLAYERS_NEEDED } = require("../../config/games");
const GameLogic = require("../../game-logic");

router.post("/create", (request, response) => {
  const { user_id } = request.session;
  const { title } = request.body;

  Games.create(user_id, title)
    .then(({ game_id }) => {
      response.redirect(`/games/${game_id}`);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send();
    });
});

router.post("/:id/info", (request, response) => {
  const { id: game_id } = request.params;

  response.json({ game_id });
});

router.post("/:id/status", (request, response) => {
  const { id: game_id } = request.params;

  GameLogic.status(game_id, request.app.io);

  response.status(200).send();
});

router.post("/:id/join", (request, response) => {
  const { id: game_id } = request.params;
  const { user_id } = request.session;

  Games.join(game_id, user_id)
    .then(({ count }) => {
      if (count === PLAYERS_NEEDED) {
        console.log("STARTING GAME");
        return GameLogic.startGame(game_id, request.app.io);
      } else {
        return Promise.resolve();
      }
    })
    .then(() => {
      response.redirect(`/games/${game_id}`);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send();
    });
});

router.post("/:id/play", (request, response) => {
  const { card_id } = request.body;
  const { id: game_id } = request.params;
  const { user_id } = request.session;

  // Is user_id playing in game_id?
  Games.isUserInGame(user_id, game_id)
    // db.one(SELECT * FROM game_users WHERE game_id=${game_id} AND user_id=${user_d})
    //   .then(() => true)
    //   .catch(() => false)
    // - Yes: Continue
    .then((isUserInGame) => {
      // Is it user_id's turn?
      // - Yes: Continue
      // - No: Ignore
    });

  // Is card_id held by user
  // - Yes: Continue
  // - No: Ignore
  // Is card_id playable on the discard pile
  // - Yes: Continue
  // - No: Ignore?
  // Time to update the game state
  // - Move the card_id from users hand to discard pile
  // - Set user_id current = false
  // - Set next user current = true
  // - Broadcast state of the game
  // Broadcast the game state (different for each user)
  io.emit(`game:${game_id}:update`, {
    user_id,
    card_id_played,
    game_id,
    hand,
    other_players: {
      // Show the number of cards in other player's hands
    },
    is_current, // true or false
    discard_card,
  });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  Games.count(id)
    .then(({ count }) => {
      response.render("authenticated/games", {
        id,
        joined_count: count,
        start_count: PLAYERS_NEEDED,
        starting: PLAYERS_NEEDED === count,
      });
    })
    .catch((error) => {
      console.log(error);
      response.status(500).send();
    });
});

module.exports = router;
