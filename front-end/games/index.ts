import io from "socket.io-client";

const gameSocket = io();

console.log("Games js loaded");

fetch(`${window.location.pathname}/info`, { method: "post" })
  .then((result) => result.json())
  .then(({ game_id }) => {
    console.log("Posted to info; ", { game_id });
  })
  .catch((error) => console.log(error));

console.log("After Games js loaded");
