/* Add functions for google search command */
import axios from "axios";
import { Extra } from "telegraf";

export const googleSearch = (ctx) => {
    console.log(ctx.from.first_name, ": /googleSearch")
    const query = ctx.update.message.text.slice(7).trim();
    if(!query){
        ctx.replyWithMarkdown("Please enter a valid query!\nUse the format:\n***/google <query>***")
        return;
    }
    const url = 'https://www.googleapis.com/customsearch/v1?key='+process.env.GOOGLE_API+'&cx='+ process.env.CSE +'&q=' + query + '/'
    axios.get(url).then(function (response) {
        var list = response.data.items;
        console.log(list)
        var numOfResult = 3;
        for(var i = 0; i < numOfResult; i++)
        {
            var result = `[`+ list[i].title +`](`+ list[i].link +`)`;
            ctx.replyWithMarkdown(result);
        }
    }).catch(function (response) {
        console.log(response)
        ctx.reply(`Some error occured while fetching the result, please try again later!`);
        return;
    });
}

export const imageSearch = (ctx) => {
    console.log(ctx.from.first_name, ": /imageSearch")
    const query = ctx.update.message.text.slice(6).trim();
    if(!query){
        ctx.replyWithMarkdown("Please enter a valid query!\nUse the format:\n***/image <query>***")
        return;
    }
    const url = 'https://www.googleapis.com/customsearch/v1?key='+process.env.GOOGLE_API+'&cx='+ process.env.CSE +'&searchType=image&q=' + query + '/'
    axios.get(url).then(function (response) {
        var numOfResult = 3;
        for(var i = 0; i < numOfResult; i++)
        {
            ctx.replyWithPhoto(response.data.items[i].link, Extra.caption(response.data.items[0].title))
        }
    }).catch(function (response) {
        console.log(response)
        ctx.reply(`Some error occured while fetching the result, please try again later!`);
        console.log(response)
        return;
    });
}