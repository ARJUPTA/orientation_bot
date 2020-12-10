import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
import { getCat, getDog } from './functions/animals';
import { lingo } from './functions/lingo';
import { greet, stickerPhotoReply } from "./functions/utils";
import { wordSearch } from "./functions/dictionary";

dotenv.config();
const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx)=>{
    console.log(ctx.from.first_name,": /start");
    const name = ctx.message.from ? ctx.message.from.first_name : 'Fachhe';
    ctx.reply(`Hey ${name}! Welcome to the BHU Fam! type /help for list of commands`);
});

bot.catch((err, ctx) => {
    console.log('Error, ', ctx.from.first_name)
    console.log(err.message)
    const errMsg = "Did not quite get what you said, please contact @aishwary023 for the issue!";
    ctx.reply(errMsg);
});

bot.help((ctx) => {
    console.log(ctx.from.first_name,": /help")
    const helpMsg ="/lingo for lingo \n\n/dog - For a random dog photo\n\n/cat - For a random cat photo\n\nWhy dogs and cats? Because I am a wholesome bot!\n\n/help - For all available function\nGot any other query? Contact these people anytime: ";
    ctx.replyWithMarkdown(helpMsg);
});

bot.command('dog', (ctx) => getDog(ctx));
bot.command('cat', (ctx) => getCat(ctx));
bot.command('lingo', (ctx) => lingo(ctx));

bot.on('message', (ctx) => greet(ctx));
bot.on(['sticker', 'photo'], (ctx) => stickerPhotoReply(ctx));

module.exports = (req, resp) => {
    if (req.method === 'POST') bot.handleUpdate(req.body, resp)
    else resp.status(200).send('Hello world :)!')
};

bot.launch();