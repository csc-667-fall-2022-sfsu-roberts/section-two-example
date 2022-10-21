const express = require("express");
const router = express.Router();

router.get("/signup", (_request, response) => {
  response.render("unauthenticated/signup", {});
});

router.get("/login", (_request, response) => {
  response.render("unauthenticated/login", {});
});

module.exports = router;
