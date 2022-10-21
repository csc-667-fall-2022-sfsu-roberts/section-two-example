const express = require("express");
const router = express.Router();

router.get("/:id", (request, response) => {
  const { id } = request.params;

  response.render("authenticated/games", { id });
});

module.exports = router;
