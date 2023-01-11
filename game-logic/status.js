const Games = require("../db/games");

const debug = (msg) => (result) => {
  console.log(msg, result);
  return result;
};

const status = (game_id, io) =>
  Games.hasStarted(game_id)
    .then((hasStarted) => {
      if (hasStarted) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    })
    .then(() =>
      Promise.all([Games.count(game_id), Games.getDiscard(game_id)])
        .then(debug("After promise stuff"))
        .then(([{ user_ids }, discard_card]) =>
          Promise.all([
            discard_card,
            user_ids,
            Games.getCurrentPlayerId(game_id),
            ...user_ids.map(({ user_id }) => Games.getHand(game_id, user_id)),
          ])
        )
        .then(debug("Before getUserGameSTate"))
        .then(getUserGameState(game_id, io))
    )
    .catch(console.log);

const getUserGameState =
  (game_id, io) =>
  ([
    discard_card,
    user_ids,
    { user_id: current_player_id },
    ...player_hands
  ]) => {
    user_ids.forEach(({ user_id }, index) => {
      io.to(user_id).emit(`games:${game_id}:update`, {
        game_id,
        user_id,
        hand: player_hands[index],
        ...user_ids[index],
        discard_card,
        current: current_player_id === user_id,
        other_players: user_ids.reduce(
          (memo, { user_id: player_id, current, seat }, index) => {
            if (player_id !== user_id) {
              memo.push({
                user_id: player_id,
                card_count: player_hands[index].length,
                current,
                seat,
              });
            }

            return memo;
          },
          []
        ),
      });
    });
  };

module.exports = status;
