const express = require("express");
const router = express.Router();

router.get("/signup", (_request, response) => {
  response.render("unauthenticated/signup", {});
});

router.get("/login", (_request, response) => {
  response.render("unauthenticated/login", {});
});

router.get("/register", (_request, response) => {
  response.render("unauthenticated/register", {});
});

module.exports = router;
