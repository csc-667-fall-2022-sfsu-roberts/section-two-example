const message = document.querySelector("#waiting-message");
const table = document.querySelector("#game");

const showGameTable = () => {
  if (game.classList.contains("hidden")) {
    message.classList.add("hidden");
    table.classList.remove("hidden");
  }
};

const playerHand = document.querySelector(".player-current .player-hand");
const discardCard = document.querySelector(".discard-pile");

const refreshGame = ({
  current,
  discard_card,
  game_id,
  hand,
  other_players,
  seat,
  user_id,
}) => {
  const container = document.createDocumentFragment();

  hand.forEach((card) => {
    console.log(card);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "uno-card",
      `card-type-${card.type}`,
      `card-color-${card.color}`
    );
    cardDiv.dataset.cardId = card.id;

    cardDiv.addEventListener("click", (event) => {
      console.log("Player wants to play a card.", event.target.dataset.cardId);
    });

    container.appendChild(cardDiv);
  });

  playerHand.replaceChildren(...container.childNodes);

  const discard = document.createElement("div");
  discard.classList.add(
    "uno-card",
    `card-type-${discard_card.type}`,
    `card-color-${discard_card.color}`
  );

  if (current) {
    document.querySelector(".draw-pile").addEventListener("click", () => {
      console.log("players want to draw");
      fetch(`${window.location.pathname}/draw`, { method: "post" });
    });
  }

  discardCard.replaceChildren(discard);

  other_players.forEach((player_info) => {
    // Find the correct
    const d = document.querySelector(".player-minus-3 .player_hand");

    for (let i = 0; i < player_info.card_count; i++) {
      const c = document.createElement("div");
      c.classList.add("uno-card", "card-color-special", "card-type-0");
      d.appendChild(c);
    }
  });
};

fetch(`${window.location.pathname}/info`, { method: "post" })
  .then((result) => result.json())
  .then(({ game_id }) => {
    socket.on(`games:${game_id}:start`, (status) => {
      showGameTable();
    });

    socket.on(`games:${game_id}:update`, (status) => {
      refreshGame(status);
    });

    socket.on(`games:${game_id}:end`, (status) => {
      console.log("I was told to end", status);
    });
  })
  .then(() => fetch(`${window.location.pathname}/status`, { method: "post" }));
