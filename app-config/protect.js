const md5 = require("md5");

const protect = (request, response, next) => {
  if (request.session.authenticated === true) {
    response.locals.user_id = request.session.user_id;
    response.locals.username = request.session.username;
    response.locals.user_hash = md5(request.session.username);

    next();
  } else {
    response.redirect("/auth/login");
  }
};

module.exports = protect;
