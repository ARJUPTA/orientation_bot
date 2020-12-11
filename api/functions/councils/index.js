/* Add functions for council command */

const cc = 'https://iitbhu.ac.in/deans/dosa/councils/cultural'
const fmc = 'https://iitbhu.ac.in/deans/dosa/councils/film_media'
const sntc = 'https://www.sntciitbhu.co.in/'
const ssc = 'https://iitbhu.ac.in/deans/dosa/councils/social'
const gnsc = 'https://iitbhu.ac.in/deans/dosa/councils/games'

export const councils = async (ctx) => {
  const reply = `List of councils under IIT (BHU) Gymkhana:\nClick on any coucil to know about it's clubs:\n\n/sntc: SCIENCE AND TECHNOLOGY COUNCIL\nLink: ${sntc}\n\n/ssc: SOCIAL SERVICE COUNCIL\nLink: ${ssc}\n\n/cc: CULTURAL COUNCIL\nLink: ${cc}\n\n/fmc: FILM AND MEDIA COUNCIL\nLink: ${fmc}\n\n/gnsc: GAMES AND SPORTS COUNCIL\nLink: ${gnsc}\n\n`
  try {
    ctx.reply(reply);
  } catch(e) {
    console.log(e)
    ctx.reply('Facing server issues, try again later.\nSorry for inconvenience.')
  }
}