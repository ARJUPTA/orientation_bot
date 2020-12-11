import axios from "axios";
import { Extra } from "telegraf";

export const getMemeCommands = (ctx) => {
    const welcome = "***Click on any of the following category!***\n\n";
    const randomMeme = "/randomMeme - ___random chikibum___\n\n"
    const wholesomeMeme = "/wholesomeMeme - ___you like wholesome memes, don't you?___\n\n"
    const historyMeme = "/historyMeme - ___history may be boring, but history memes are fun!___\n\n"
    const memeEconomy = "/memeEconomy - ___this is biznessss___\n\n"
    const animeMeme = "/animeMeme - ___hello weebs___\n\n"
    const toorealMeme = "/toorealMeme - ___reality is often dissapointing, but the memes are fun___\n\n"
    const indianMeme = "/indianMeme - ___why not?___\n\n"
    const cheems = "/cheems - ___cheems bhaiya ke shashan mai....heuehueue___\n\n"
    const herapheri = "/herapheri - ___development se kya kuch nhi ho skta babu bhaiya___\n\n"
    // const rest = "";
    const reply = welcome + randomMeme + wholesomeMeme + historyMeme + memeEconomy + animeMeme + toorealMeme + indianMeme + cheems + herapheri;
    console.log(reply)
    ctx.replyWithMarkdown(reply);
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