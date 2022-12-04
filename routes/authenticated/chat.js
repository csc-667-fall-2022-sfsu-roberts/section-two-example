const express = require("express");
const router = express.Router();
const md5 = require("md5");

router.post("/:id", (request, response) => {
  const { id } = request.params;
  const { username } = request.session;
  const { message } = request.body;
  const timestamp = Date.now();

  request.app.io.emit(`chat:${id}`, {
    username,
    avatar_url: `//www.gravatar.com/avatar/${md5(username)}?s=20`,
    message,
    timestamp,
  });

  response.sendStatus(200);
});

module.exports = router;
