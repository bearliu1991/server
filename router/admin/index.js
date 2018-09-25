const loginAndRegister = require('./loginAndRegister');
const personCenter = require('./personCenter');
const stuff = require('./stuff');
const mobile = require('./mobile');
const sessionId = require('./sessionId');
const survey = require('./survey');
const tencent = require('./tencent');
const seats = require('./seats');
module.exports = function (app) {
  app.use(sessionId);
  app.use('/api/adminUser', loginAndRegister);
  app.use('/api/adminCenter', personCenter);
  app.use('/api/stuff', stuff);
  app.use('/api/mobile', mobile);
  app.use('/api/survey', survey);
  app.use('/api/tencent', tencent);
  app.use('/api/seats', seats);
};