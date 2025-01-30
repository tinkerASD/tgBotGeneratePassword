const TelegramBot = require('node-telegram-bot-api');

// Заменить на свой токен
const token = 'TOKEN_TG';
const bot = new TelegramBot(token, { polling: true});

function generatePassword(lenght) {
    const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm()+#@!$';
    let password = '';
    for (let i = 0; i < lenght; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    };
    return password;
};

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет, это бот для генерации паролей, для генерации напиши /generate');
});

bot.onText(/\/generate/, (msg) => {
    const chatId = msg.chat.id;
    const password = generatePassword(10);
    bot.sendMessage(chatId, `Ваш сгенерированный пароль: ${password}`);
});