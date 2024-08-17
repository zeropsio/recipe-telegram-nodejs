const { Bot } = require("grammy");
require('dotenv').config();

// Create a bot object
const bot = new Bot(process.env.BOT_TOKEN); // <-- place your bot token in this string

// Register listeners to handle messages

bot.command('start', (ctx) => {
    const message = "Oh!";
    const repo = "https://github.com/zeropsio/recipe-grammy-nodejs";
    const deploy = "https://app.zerops.io/recipe/telegram-grammy";

    ctx.reply(`${message} Repository: ${repo}, One Click Deploy: ${deploy}`);
});

// Handle any text message
bot.on('message:text', (ctx) => {
    const userMessage = ctx.message.text;
    // Define your reply message
    const replyMessage = `You said: ${userMessage} to Zerops. Try /start to get started!`;
    
    // Send the reply
    ctx.reply(replyMessage);
});

// Start the bot (using long polling)
bot.start();
