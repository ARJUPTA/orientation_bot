/* Add functions for coucil's club command */

export const sntc = async (ctx) => {
  console.log(ctx.from.first_name);
  const reply = '*SCINENCE AND TECHNOLOGY COUNCIL*\nFollowing clubs run under it:\n\n1. Robotics Club\n2. Club of Programmers (COPS)\n3. Astronomy Club\n4. Aero-modelling Club\n5. Business Club\n6. S.A.E Club\n7. Sustainability and Innovation Club'
  try {
    await ctx.replyWithMarkdown(reply)
  } catch (e) {
    ctx.reply('Some error occured please try again later.\n Sorry for the inconvenience.')
  }
  
}

export const ssc = async (ctx) => {
  console.log(ctx.from.first_name);
  const reply = '*SOCIAL SERVICE COUNCIL*\nFollowing clubs run under it:\n\n1. Health and Hygiene Club\n2. Sahyog\n3. Kashi Utkarsh\n4. Social Project\'s club'
  try {
    await ctx.replyWithMarkdown(reply)
  } catch (e) {
    ctx.reply('Some error occured please try again later.\n Sorry for the inconvenience.')
  }
  
}

export const cc = async (ctx) => {
  console.log(ctx.from.first_name);
  const reply = '*CULTURAL COUNCIL*\nFollowing clubs run under it:\n\n1. Indian Music Club\n2. Western Music Club\n3. Literary Club (Lit Club)\n4. Quiz Club\n5. Masquerades (Drama Club)\n6. Fine Arts Club (FAC)\n7. Dance Freakz Club (DFZ)'
  try {
    await ctx.replyWithMarkdown(reply)
  } catch (e) {
    ctx.reply('Some error occured please try again later.\n Sorry for the inconvenience.')
  }
  
}

export const fmc = async (ctx) => {
  console.log(ctx.from.first_name);
  const reply = '*FILM AND MEDIA COUNCIL*\nFollowing clubs run under it:\n\n1. Media Club\n2. Photography Club\n3. Cine Club\n4. Animation Club\n5. Design Club\n6. Outreach Club'
  try {
    await ctx.replyWithMarkdown(reply)
  } catch (e) {
    ctx.reply('Some error occured please try again later.\n Sorry for the inconvenience.')
  }
  
}

export const gnsc = async (ctx) => {
  console.log(ctx.from.first_name);
  const reply = '*GAMES AND SPORTS COUNCIL*\nFollowing clubs run under it:\n\n1. Aquatics\n2. Athletics\n3. Badminton\n4. Basketball\n5. Boxing\n6. Chess\n7. Cricket\n8. Football\n9. Handball\n10. Hockey\n11. Kabaddi\n12. Kho-kho\n13. Squash\n14. Table tennis\n15. Taekwondo\n16. Tennis\n17. Volleyball\n18. Weightlifting'
  try {
    await ctx.replyWithMarkdown(reply)
  } catch (e) {
    ctx.reply('Some error occured please try again later.\n Sorry for the inconvenience.')
  }
  
}
