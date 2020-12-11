import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
import { getCat, getDog } from './functions/animals';
import { lingo } from './functions/lingo';
import { greet, stickerPhotoReply } from "./functions/utils";
import { getMeme, getMemeCommands } from "./functions/memes";
import { googleSearch, imageSearch } from "./functions/google-search";
import { getGif } from "./functions/giphy";
import { wordSearch } from "./functions/dictionary";

dotenv.config();
const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx)=>{
    console.log(ctx.from.first_name,": /start");
    const name = ctx.message.from ? ctx.message.from.first_name : 'Fachhe';
    ctx.reply(`Hey ${name}! Welcome to the BHU Fam! type /help for list of commands`);
});

bot.catch((err, ctx) => {
    console.log('Error, ', ctx.from.first_name, " - ", err)
    console.log(err.message)
    const errMsg = "Did not quite get what you said, please contact @aishwary023 for the issue!";
    ctx.reply(errMsg);
});

bot.help((ctx) => {
    console.log(ctx.from.first_name,": /help")
    const helpMsg ="/dict or /dictionary for using dictionary\n\n/lingo for lingo \n\n/dog - For a random dog photo\n\n/cat - For a random cat photo\n\nWhy dogs and cats? Because I am a wholesome bot!\n\n/help - For all available function\nGot any other query? Contact these people anytime: ";
    ctx.replyWithMarkdown(helpMsg);
});

bot.command('dog', (ctx) => getDog(ctx));
bot.command('cat', (ctx) => getCat(ctx));
bot.command('lingo', (ctx) => lingo(ctx));
bot.command('dict', (ctx) => wordSearch(ctx));
bot.command('dictionary', (ctx) => wordSearch(ctx));

bot.command('meme', (ctx) => getMemeCommands(ctx));
bot.command('randomMeme', (ctx)=> getMeme(ctx, 'memes'));
bot.command('wholesomeMeme', (ctx)=> getMeme(ctx, 'wholesomememes'));
bot.command('indianMeme', (ctx)=> getMeme(ctx, 'IndianMeyMeys'));
bot.command('memeEconomy', (ctx)=> getMeme(ctx, 'MemeEconomy'));
bot.command('historyMeme', (ctx)=> getMeme(ctx, 'HistoryMemes'));
bot.command('animeMeme', (ctx) => getMeme(ctx, 'Animemes'));
bot.command('toorealMeme', (ctx) => getMeme(ctx, '2meirl4meirl'));
bot.command('cheems', (ctx)=> getMeme(ctx, 'dogelore'));
bot.command('herapheri', (ctx)=> getMeme(ctx, 'HeraPheriMemes'));

bot.command('google', (ctx) => googleSearch(ctx));
bot.command('image', (ctx) => imageSearch(ctx));

bot.command('gif', (ctx) => getGif(ctx))

bot.on('message', (ctx) => greet(ctx));
bot.on(['sticker', 'photo'], (ctx) => stickerPhotoReply(ctx));

module.exports = (req, resp) => {
    if (req.method === 'POST') bot.handleUpdate(req.body, resp)
    else resp.status(200).send('Hello world :)!')
};

bot.launch();