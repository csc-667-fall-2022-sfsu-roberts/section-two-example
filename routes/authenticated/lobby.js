const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  const { username, user_id } = request.session;

  response.render("authenticated/lobby", { username, user_id });
});

module.exports = router;
