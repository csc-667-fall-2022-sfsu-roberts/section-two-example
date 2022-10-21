const express = require("express");
const router = express.Router();

router.get("/", (_request, response) => {
  response.render("authenticated/lobby", {});
});

module.exports = router;
