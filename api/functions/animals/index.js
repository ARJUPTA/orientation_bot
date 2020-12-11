/* Add functions for animals command */
import axios from "axios";
import { Extra } from "telegraf";

export const starter = async (ctx) => {
  console.log(ctx.from.first_name, ": /animals")
  const reply = 'Hmm, it appears like you are a nature lover, check folowing commands to explore our animal collection:\n\n1. /duck - For a random duck photo\n2. /fox - For a random fox photo\n3. /bunny - For a random bunny photo\n4. /dog - For a random dog photo\n5. /cat - For a random cat photo\n'
  try {
    await ctx.reply(reply)
  } catch(e) {
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`);
  }
}
export const getDog = async (ctx) => {
  console.log(ctx.from.first_name, ": /dog")
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    if(response.status === 200) {
      const data = response.data
      await ctx.replyWithPhoto(data.message.toString(), Extra.caption(`Here's a dog for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a dog photo with /dog! \n:)`);
    }
  } catch(e) {
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a dog photo with /dog! \n:)`);
  }
}

export const getCat = async (ctx) => {
  console.log(ctx.from.first_name,": /cat")
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search")
    if(response.status === 200) {
      const data = response.data
      await ctx.replyWithPhoto(data[0].url.toString(), Extra.caption(`Here's a cat for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a cat photo with /cat! \n:)`);
    }
  } catch(e) {
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a cat photo with /cat! \n:)`);
  }
}

export const getFox = async (ctx) => {
  console.log(ctx.from.first_name,": /fox")
  try {
    let response = await axios.get('https://randomfox.ca/floof/?ref=apilist.fun')
    if(response.status === 200 ){
      const data = response.data
      ctx.replyWithPhoto(data.image.toString(), Extra.caption(`Here's a fox for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a fox photo with /fox! \n:)`);
    }
  } catch (e) {
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a fox photo with /fox! \n:)`);
  }
}

export const getDuck = async (ctx) => {
  console.log(ctx.from.first_name,": /duck")
  try {
    let response = await axios.get('https://random-d.uk/api/v2/random')
    if(response.status === 200 ){
      const data = response.data
      ctx.replyWithPhoto(data.url.toString(), Extra.caption(`Here's a duck for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a duck photo with /duck! \n:)`);
    }
  } catch (e) {
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a duck photo with /duck! \n:)`);
  }
}

export const getBunnies = async (ctx) => {
  console.log(ctx.from.first_name,": /bunny")
  try {
    let response = await axios.get('https://api.bunnies.io/v2/loop/random/?media=gif,png')
    if(response.status === 200 ){
      const data = response.data
      ctx.replyWithPhoto(data.media.gif.toString(), Extra.caption(`Here's a bunny for you!`).markdown())
    } else {
      await ctx.reply(`Some error occured while fetching the photograph. You can get a bunny photo with /bunny! \n:)`);
    }
  } catch (e) {
    console.log(e.message)
    await ctx.reply(`Some error occured while fetching the photograph. You can get a bunny photo with /bunny! \n:)`);
  }
}