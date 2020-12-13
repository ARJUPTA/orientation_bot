/* Devs add you commands here to get listed in bot dev list. */
// Add your and command in this list.
// Then make a similar function for you command and connect that function to the command in root index.js

const DEVS = [
    'Aishwary Saxena /aishwary023',
    'Purushottam Tiwari /meluhan',
    'Arjun Gupta /arjupta',
    'Aryaman Gupta /atpug22',
    'Subodh Verma /subodhk',
    'David Garg /davidgarg20',
    'Shubhanshu Saxena /shubhanshu02',
    'Lakshya Singh /king11'
]
export const listDevs = async(ctx) => {
    let reply = 'Following people are part of COPS dev group.\n\n'
    reply += DEVS.join('\n')
    reply += '\n\nList may not be complete.'
    try {
        ctx.reply(reply);
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}
export const aishwary023 = async(ctx) => {
    try {
        await ctx.reply('Hi people! You can find me at github.com/aishwary023 or @aishwary023.')
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

export const m3luhan = async(ctx) => {
    try {
        await ctx.reply('Find me at github.com/m-e-l-u-h-a-n or @m3luhan.')
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

export const arjupta = async(ctx) => {
    try {
        await ctx.reply('How are you buddy! Find me at github.com/arjupta or @arjupta.')
    } catch (e) {
        console.log('error =', e.message)
        await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
        return
    }
}

export const atpug22 = async(ctx) => {
    try {
        await ctx.reply('Hello, Aryaman here, You can find me at github.com/atpug22 or @atpug22.')
    } catch (e) {
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
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
  }
}

export const davidgarg20 = async (ctx) => {
  try {
    await ctx.reply('Hi ! Find me at github.com/davidgarg20 or @davidgarg20.')
  } catch(e) {
    console.log('error =', e.message)
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`)
    return
  }
}

export const shubhanshu02 = async(ctx) => {
  try {
    await ctx.reply('Hi peeps! Catch me at github.com/shubhanshu02 or @shubhanshu_02.');
  } catch (e) {
    console.log('error =', e.message);
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`);
    return;
  }
}
// Other devs can add function for your command here.
export const king11 = async(ctx) => {
  try {
    await ctx.replyWithMarkdown(`Hi future <developers/>! checkout my projects at [king-11](github.com/king-11) or you can ping me at [@x_tegrat](https://www.instagram.com/x_tegrat/).`);
  } catch (e) {
    console.log('error =', e.message);
    await ctx.reply(`Some error occured, please try later! Sorry for inconvenience\n:)`);
    return;
  }
}
