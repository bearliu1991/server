
const invite = require("./invite");
const pay = require("./pay");
const zhifu = require("./zhifu");
module.exports = function (app) {
  app.use("/api/mobile/invite", invite);
  app.use("/api/mobile/uPayOrder", pay);
  app.use("", zhifu)
};