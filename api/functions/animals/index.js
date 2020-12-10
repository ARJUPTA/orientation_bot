/* Add functions for animals command */
import axios from "axios";
import { Extra } from "telegraf";

export const getDog = (ctx) => {
  console.log(ctx.from.first_name, ": /dog")
  var url_photo = ""
  axios.get("https://dog.ceo/api/breeds/image/random").then(function (response) {
    url_photo = response.data.message.toString();
    ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a dog for you!`).markdown())
  }).catch(function (response) {
    ctx.reply(`Some error occured while fetching the photograph. You can get a cat photo with /cat! \n:)`);
  });
}

export const getCat = (ctx) => {
  console.log(ctx.from.first_name,": /cat")
  var url_photo = ""
  axios.get("https://api.thecatapi.com/v1/images/search").then(function (response){
      url_photo = response.data[0].url.toString();
      ctx.replyWithPhoto(url_photo, Extra.caption(`Here's a cat for you!`).markdown())
  }).catch(function (response){
      ctx.reply(`Some error occured while fetching the photograph. You can get a dog photo with /dog! \n:)`);
  });
}