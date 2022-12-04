const session = require("express-session");

const sessionInstance = session({
  store: new (require("connect-pg-simple")(session))(),
  secret: "akhrglkahdfklahdfglkhadflkg",
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  httpOnly: true,
});

module.exports = sessionInstance;
