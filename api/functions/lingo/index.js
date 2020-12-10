/* Add functions for lingo command */

export const lingo = (ctx) => {
  console.log(ctx.from.first_name,": /lingo")
  const lingoMsg = "*Fachha/Fachhi* = Fresher\n\n*Lite hai* = Take it easy\n\n*Chill hai* = Ab kaand ho gaya toh choro, sab chill hai\n\n*Pel insaan* = Overachiever (machau)\n\n*Fakka* = F grade\n\n*Dassi* = 10 cpi\n\n*Maggu* = Rote-learner\n\n*BC* = Branch Changer\n\n*LC* = Limbdi Corner\n\n*HG* = Hyderabad Gate\n\n*VT* = Vishwanath Temple\n\n*Lankating* = Lanka ki tafri karna\n\n....more lingo to come!\n\n";
  ctx.replyWithMarkdown(lingoMsg);
}