/* Add functions for general commands */

export const greet = async (ctx) => {
  console.log(ctx.from.first_name, ": ", ctx.message.text)
  var reply = "";
  if (['hi', 'hello', 'hey', 'namaste'].indexOf(ctx.message.text.toString().toLowerCase()) >= 0) {
    const name = ctx.message.from ? ctx.message.from.first_name : "Fachhe";
    reply = "Hello " + name
  }
  else {
    reply = "Har Har Mahadev";
  }
  ctx.reply(reply);
}

export const stickerPhotoReply = async (ctx) => {
    console.log(ctx.from.first_name,": sticker");
    ctx.reply('Cool!');
}