const Botmaster = require('botmaster');
const MessengerBot = require('botmaster-messenger');
const botmaster = new Botmaster();

const config = {
  credentials: {
    verifyToken: "pipbot_verify",
    pageToken: "EAAgg1s0zVCoBAPeAM2i77DrXfgRrBBWRtjI10hFb1kDJWXLOlx1mGn2HAZBu2VRnZCUSmvJdOARuxi6ZA1BHOr2eox6jvZCRZA3aDZAsC85nsK2LCAS4BdfpGzebdbcdyumWpkVcZAtRvsxi0h9nYviVU7XJVjwL4GxEJ0gpTQgKQZDZD",
    fbAppSecret: '006afb8d5c15487ae129e2b40db18683',
  },
  webhookEndpoint: 'pipBotHook',
};

const pipBot = new MessengerBot(config)

botmaster.addBot(pipBot);

botmaster.use({
  type: 'incoming',
  name: 'middleware',
  controller: (bot, update) => {
    return bot.reply(update, 'Hello world!');
  }
});
