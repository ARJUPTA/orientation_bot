/* Add functions for general commands */
import axios from "axios";
import * as quotes from './quotes'

export const greet = async (ctx) => {
  console.log(ctx.from.first_name, ": ", ctx.message.text)
  var reply = "";
  var greet = ['hi', 'hello', 'hey', 'namaste'];
    for(var i = 0; i <= greet.length; i++)
    {
      if(ctx.message.text.toString().toLowerCase().includes(greet[i]))
      {
        const name = ctx.message.from ? ctx.message.from.first_name : "Fachhe";
        reply = "Hello " + name
        ctx.reply(reply);
        return;
      }
    }

    var tharak = ['love', 'i love you', 'i luv you', 'luv', 'lub', 'i luv u', 'gf', 'girlfriend'];
    for(var i = 0; i <= tharak.length; i++)
    {
      if(ctx.message.text.toString().toLowerCase().includes(tharak[i]))
      {
        ctx.replyWithPhoto("https://pbs.twimg.com/media/DhuCBLxW0AAYMpr.jpg")
        return;
      }
    }

    reply = ["Har Har Mahadev!", "Bhaiyaa lankaa bechyuuu!", "Bhai LC Chalega?", "BT ho gayi yaar", "Sab lite hai", "Chill hai", "HG ke momos khane chalte hai aaj huehuehue", "Mai ek bot hu, meri dono taang nakli hai. Ek baar bot banate-banate COPS walo ko gussa aa gaya toh mujhe spam kar diya lekin dil ke bohot achhe hai, haal ke haal coud pr deploy bhi kar diya.", ""];
    var n = Math.floor(Math.random() * reply.length);
    ctx.reply(reply[n])

  
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
    ctx.replyWithMarkdown(response.data.insult.toString())
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