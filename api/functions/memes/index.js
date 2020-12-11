import axios from "axios";
import { Extra } from "telegraf";

export const getMemeCommands = (ctx) => {
    const commands = "meymeyy\n\n/randomMeme\n/wholesomeMeme\n/historyMeme\n/memeEconomy\n/animeMeme\n/toorealMeme\n/indianMeme\n/cheems\n/herapheri";
    ctx.reply(commands);
}

export const getMeme = (ctx, memeCategory) => {
    console.log(ctx.from.first_name, ": /", memeCategory)
    var url = "https://meme-api.herokuapp.com/gimme/" + memeCategory + "/"
    console.log(url)
    axios.get(url).then(function (response) {
        console.log(response)
        var photo = response.data.url.toString();
        var post = response.data.postLink.toString();
        var caption = response.data.title.toString() + " (" + post + ")";
      ctx.replyWithPhoto(photo, Extra.caption(caption).markdown())
    }).catch(function (response) {
        console.log(response)
        ctx.reply(`Some error occured while fetching the meme, please try again later!`);
    });
  }