/* Add functions for general commands */
import axios from "axios";
import * as quotes from './quotes'

export const greet = async (ctx) => {
  console.log(ctx.from.first_name, ": ", ctx.message.text)
  var reply = "";
  if (['hi', 'hello', 'hey', 'namaste'].indexOf(ctx.message.text.toString().toLowerCase()) >= 0) {
    const name = ctx.message.from ? ctx.message.from.first_name : "Fachhe";
    reply = "Hello " + name
  }
  else {
    reply = "Har Har Mahadev!";
  }
  ctx.reply(reply);
}

export const stickerPhotoReply = async (ctx) => {
    console.log(ctx.from.first_name,": sticker");
    ctx.reply('Cool!');
}

export const easteregg = (ctx) => {
  console.log(ctx.from.first_name,": easter egg");
  ctx.reply("Contact @aishwary023. Send the flag - bot{f0undth3ea5teregg} as message. 🎊🎊")
}

export const getInsult = (ctx) => {
  console.log(ctx.from.first_name,": /insult");
  const url = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
  axios.get(url).then(function (response) {
    ctx.reply(response.data.insult)
  }).catch(function (response) {
      console.log(response)
      ctx.reply(`Some error occured while fetching the result, please try again later!`);
      return;
  });
}

export const getQuotes = (ctx) => {
  const len =  quotes.quotes.length;
  const r = Math.floor(Math.random() * len);
  const reply = quotes.quotes[r].quote + "\n- " + quotes.quotes[r].author + ", ___" + quotes.quotes[r].source + "___";
  ctx.replyWithMarkdown(reply)
}