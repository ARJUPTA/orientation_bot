/* Add functions for council command */

export const councils = async (ctx) => {
  const reply = 'List of councils under IIT (BHU) Gymkhana:\nClick on any coucil to know about it\'s clubs:\n\n/sntc *SCIENCE AND TECHNOLOGY COUNCIL*\n\n/ssc *SOCIAL SERVICE COUNCIL*\n\n/cc *CULTURAL COUNCIL*\n\n/fmc *FILM AND MEDIA COUNCIL*\n\n/gnsc *GAMES AND SPORTS COUNCIL*\n\n'
  try {
    ctx.replyWithMarkdown(reply);
  } catch(e) {
    console.log(e)
    ctx.reply('Facing server issues, try again later.\nSorry for inconvenience.')
  }
}