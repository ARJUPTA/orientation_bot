/* Add functions for council command */

const cc = 'https://culturalcounciliitbhu.com/'
const fmc = 'https://www.facebook.com/fmc.iitbhu/'
const sntc = 'https://www.sntciitbhu.co.in/'
const ssc = 'http://ssciitbhu.org/'
const gnsc = 'http://www.iitbhusports.org/'

export const councils = async (ctx) => {
  const reply = "List of councils under IIT (BHU) Gymkhana:\nClick on any coucil to know about it's clubs:\n\n/sntc: [SCIENCE AND TECHNOLOGY COUNCIL]("+ sntc +")\n\n/ssc: [SOCIAL SERVICE COUNCIL]("+ssc+")\n\n/cc: [CULTURAL COUNCIL]("+cc+")\n\n/fmc: [FILM AND MEDIA COUNCIL]("+fmc+")\n\n/gnsc: [GAMES AND SPORTS COUNCIL]("+gnsc+")\n\n"
  try {
    ctx.replyWithMarkdown(reply);
  } catch(e) {
    console.log(e)
    ctx.reply('Facing server issues, try again later.\nSorry for inconvenience.')
  }
}