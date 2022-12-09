import io from "socket.io-client";

const gameSocket = io();

gameSocket.on("game:init", ({ type, game_id, user_id }) => {
  console.log("Game event received", { type, game_id, user_id });
});
