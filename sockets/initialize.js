const socketIo = require("socket.io");
const sessionMiddleware = require("../app-config/sessions");

const initialize = (httpServer, app) => {
  const io = new socketIo.Server(httpServer);
  app.user_sockets = {};

  const wrap = (middleware) => (socket, next) =>
    middleware(socket.request, {}, next);

  io.use(wrap(sessionMiddleware));

  io.use((socket, next) => {
    const session = socket.request.session;

    if (session !== undefined && session.authenticated === true) {
      app.user_sockets[session.user_id] = socket.id;

      console.log(`${session.user_id} connected [${socket.id}]`);

      socket.on("disconnect", () => {
        console.log(`${session.user_id} disconnected [${socket.id}]`);
        delete app.user_sockets[session.user_id];
      });

      next();
    } else {
      next(new Error("unauthorized"));
    }
  });

  app.io = io;
};

module.exports = initialize;
