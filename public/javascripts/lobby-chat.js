// TODO generalize this
const messages = document.querySelector("#messages");
const input = document.querySelector("#message");
const btn = document.querySelector("#send-message");
const messageTemplate = document.querySelector("#message-content");
const ago = timeago();

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    const message = event.target.value;
    input.value = "";

    fetch("/chat/0", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  }
});

btn.addEventListener("click", (event) => {
  const message = input.value;
  input.value = "";

  fetch("/chat/0", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
});

socket.on("chat:0", ({ username, avatar_url, message, timestamp }) => {
  const content = messageTemplate.content.cloneNode(true);

  const un = content.querySelector(".username");
  un.setAttribute("src", avatar_url);
  un.setAttribute("alt", username);
  content.querySelector(".message").innerText = message;

  const ts = content.querySelector(".timestamp");
  ts.setAttribute("datetime", timestamp);

  messages.appendChild(content);
  ago.render(ts);

  messages.scrollTop = messages.scrollHeight;
});
