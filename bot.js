const { Bot } = require("grammy");
require('dotenv').config();

if (!process.env.BOT_TOKEN) {
    console.error("Error: BOT_TOKEN is not defined in the environment variables.");
    process.exit(1);
}

const bot = new Bot(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
    const message = "Oh!";
    const repo = "https://github.com/zeropsio/recipe-grammy-nodejs";
    const deploy = "https://app.zerops.io/recipe/telegram-grammy";

    ctx.reply(`${message} Repository: ${repo}, One Click Deploy: ${deploy}`);
});

bot.on('message:text', (ctx) => {
    const userMessage = ctx.message.text;
    const replyMessage = `You said: ${userMessage} to Zerops. Try /start to get started!`;
    ctx.reply(replyMessage);
});

bot.start(console.log("Bot is running and connected to Telegram successfully! 🎉🎉"));
