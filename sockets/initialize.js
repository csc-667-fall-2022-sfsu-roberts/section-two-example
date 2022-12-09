const socketIo = require("socket.io");
const sessionMiddleware = require("../app-config/sessions");

const initialize = (httpServer, app) => {
  const io = new socketIo.Server(httpServer);

  const wrap = (middleware) => (socket, next) =>
    middleware(socket.request, {}, next);

  io.use(wrap(sessionMiddleware));

  io.use((socket, next) => {
    const session = socket.request.session;

    if (session !== undefined && session.authenticated === true) {
      socket.join(socket.request.session.user_id);
      next();
    } else {
      next(new Error("unauthorized"));
    }
  });

  app.io = io;
};

module.exports = initialize;
