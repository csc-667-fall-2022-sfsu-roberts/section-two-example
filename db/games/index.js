const create = require("./create");
const all = require("./all");
const join = require("./join");
const count = require("./count");
const start = require("./start");
const draw = require("./draw");
const getHand = require("./getHand");
const assignCard = require("./assignCard");
const assignUserSeat = require("./assignUserSeat");
const getDiscard = require("./getDiscard");
const getCurrentPlayerId = require("./getCurrentPlayerId");
const hasStarted = require("./hasStarted");

module.exports = {
  create,
  all,
  join,
  count,
  start,
  draw,
  assignCard,
  assignUserSeat,
  getHand,
  getDiscard,
  getCurrentPlayerId,
  hasStarted,
};
