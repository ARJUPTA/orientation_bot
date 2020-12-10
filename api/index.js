import axios from 'axios';
import { Telegraf, Extra } from "telegraf";
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx)=>{
    console.log(ctx.from.first_name,": /start");
    const name = ctx.message.from ? ctx.message.from.first_name : 'Fachhe';
    ctx.reply(`Hey ${name}! Welcome to the BHU Fam! type /help for list of commands`);
})

bot.catch((err, ctx) => {
    console.log('Error, ', ctx.from.first_name)
    const errMsg = "Did not quite get what you said, please contact @aishwary023 for the issue!";
    ctx.reply(errMsg);
})

bot.on(['sticker', 'photo'], (ctx) => {
    console.log(ctx.from.first_name,": sticker")
    ctx.reply('Cool!')
  })

bot.command('dog', (ctx) =>{
    console.log(ctx.from.first_name,": /dog")
    var url_photo = ""
    axios.get("https://dog.ceo/api/breeds/image/random").then(function (response){
        url_photo = response.data.message.toString();
        ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a dog for you!`).markdown())
    }).catch(function (response){
        ctx.reply(`Some error occured while fetching the photograph. You can get a cat photo with /cat! \n:)`);
    });
})

bot.command('cat', (ctx) =>{
    console.log(ctx.from.first_name,": /cat")
    var url_photo = ""
    axios.get("https://api.thecatapi.com/v1/images/search").then(function (response){
        url_photo = response.data[0].url.toString();
        ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a cat for you!`).markdown())
    }).catch(function (response){

        ctx.reply(`Some error occured while fetching the photograph. You can get a dog photo with /dog! \n:)`);
    });
})

bot.help((ctx) => {
    console.log(ctx.from.first_name,": /help")
    const helpMsg ="/lingo for lingo \n\n/dog - For a random dog photo\n\n/cat - For a random cat photo\n\nWhy dogs and cats? Because I am a wholesome bot!\n\n/help - For all available function\nGot any other query? Contact these people anytime: ";
    ctx.replyWithMarkdown(helpMsg);
})

// bot.on('new_chat_members', async (ctx) => {
//     const name = ctx.from ? ctx.from.first_name : 'Fachhe';
//     ctx.reply(`Hey ${name}! Welcome to the BHU Fam! Let us know something about you!`);
//   });

bot.command('lingo', (ctx) => {
    console.log(ctx.from.first_name,": /lingo")
    const lingoMsg = "*Fachha/Fachhi* = Fresher\n\n*Lite hai* = Take it easy\n\n*Chill hai* = Ab kaand ho gaya toh choro, sab chill hai\n\n*Pel insaan* = Overachiever (machau)\n\n*Fakka* = F grade\n\n*Dassi* = 10 cpi\n\n*Maggu* = Rote-learner\n\n*BC* = Branch Changer\n\n*LC* = Limbdi Corner\n\n*HG* = Hyderabad Gate\n\n*VT* = Vishwanath Temple\n\n*Lankating* = Lanka ki tafri karna\n\n....more lingo to come!\n\n";
    ctx.replyWithMarkdown(lingoMsg);
})

bot.on('message', async (ctx) => {
    console.log(ctx.from.first_name,": ", ctx.message.text)
    var reply = "";
    if(['hi', 'hello', 'hey', 'namaste' ].indexOf(ctx.message.text.toString().toLowerCase())>=0)
    {
        const name = ctx.message.from ? ctx.message.from.first_name : "Fachhe";
        reply = "Hello " + name
    }
    else{
        reply = "Har Har Mahadev";
    }
    ctx.reply(reply);
})

module.exports = (req, resp) => {
    if (req.method === 'POST') bot.handleUpdate(req.body, resp)
    else resp.status(200).send('Hello world :)!')
}

bot.launch();