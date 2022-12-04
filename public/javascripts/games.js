const gameSocket = io();

const playerJoined = (data) => {
  console.log("playerJoined", data);
};

const startGame = (data) => {
  console.log("startGame", data);
};

const updateGame = (data) => {
  console.log("updateGame", data);
};

const endGame = (data) => {
  console.log("endGame", data);
};

const receiveChatMessage = (data) => {
  console.log("receiveChatMessage", data);
};

gameSocket.on("game:init", ({ type, game_id, user_id }) => {
  console.log("Game event received", { type, game_id, user_id });

  gameSocket.on(`game:${game_id}:join`, playerJoined);
  gameSocket.on(`game:${game_id}:start`, startGame);
  gameSocket.on(`game:${game_id}:update`, updateGame);
  gameSocket.on(`game:${game_id}:end`, endGame);
  gameSocket.on(`chat:${game_id}`, receiveChatMessage);
});
