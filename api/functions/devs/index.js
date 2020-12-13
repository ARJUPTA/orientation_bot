/* Devs add you commands here to get listed in bot dev list. */
// Add your and command in this list.
// Then make a similar function for you command and connect that function to the command in root index.js

const DEVS = [
  'Aishwary Saxena /aishwary023',
  'Purushottam Tiwari /meluhan',
  'Arjun Gupta /arjupta',
  'The Subodh Verma /subodhk'
]
export const listDevs = async (ctx) => {
  let reply = 'Following people are part of COPS dev group.\n\n'
  reply += DEVS.join('\n')
  reply += '\n\nList may not be complete.'
  try {
    ctx.reply(reply);
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
    return
  }
}
export const aishwary023 = async (ctx) => {
  try {
    await ctx.reply('Hi people! You can find me at github.com/aishwary023 or @aishwary023.')
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
    return
  }
}

export const m3luhan = async (ctx) => {
  try {
    await ctx.reply('Find me at github.com/m-e-l-u-h-a-n or @m3luhan.')
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
    return
  }
}

export const arjupta = async (ctx) => {
  try {
    await ctx.reply('How are you buddy! Find me at github.com/arjupta or @arjupta.')
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
    return
  }
}

export const subodhk = async (ctx) => {
  try {
    await ctx.reply('Hey sexyy! Wanna have some fun? Follow me at github.com/subodhk01 or just ping me here @subodhk01')
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Wtf is wrong with you bro!\n Nevermind, Follow me at github.com/subodhk01 or ping me here @subodhk01' \n:)`)
    return
  }
}

// Other devs can add function for your command here.
