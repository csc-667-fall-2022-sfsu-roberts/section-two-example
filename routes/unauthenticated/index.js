const express = require("express");
const router = express.Router();

router.get("/", (_request, response) => {
  response.render("unauthenticated/index", {});
});

module.exports = router;
