/* Add functions for dictionary command */
import axios from 'axios';
import { Extra } from 'telegraf';

export const wordSearch = async (ctx) => {
  console.log(ctx.from.first_name, ": /dictionary")
  const content = ctx.message.text.toString().toLowerCase().split(' ')
  const usageFormat = `Usage format: ${content[0]} <Language code> <Language Word>\n\n*Example:*\n\n*${content[0]} en hello*: This will search for word hello in english language.\n\n*${content[0]} hi namaste*: This will search for word namaste in hindi language.`
  const languageList = `*en* - English\n*hi* - Hindi\n*fr* - French\n*ja* - Japanese\n*ru* - Russian\n*de* - German\n*it* - Italian\n*ko* - Korean\n*pt-BR* - Brazilian Portugese\n*ar* - Arabic\n*tr* - Turkish\n*es* - Spanish`
  switch (content.length) {
    case 1:
      if (content[0] === '/dict' || content[0] === '/dictionary') {
        let reply = `You can use ${content[0]} command for searching words in various laguages.\n\nIt currently supports:\n\n${languageList}\n\n${usageFormat}`
        ctx.replyWithMarkdown(reply)
      } else {
        ctx.replyWithMarkdown(`Sorry couldn't undrstand probably format is wrong, use following format using dictionary\n\n${usageFormat}`)
      }
      break;
    case 3:
      console.log('content[1] =', content[1])
      if (['en', 'hi', 'fr', 'ja', 'ru', 'de', 'it', 'ko', 'pt-BR', 'ar', 'tr', 'es'].indexOf(content[1]) >= 0) {
        try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${content[1]}/${content[2]}`)
          console.log('response = ', response.status)
          if (response.status === 200) {
            const data = response.data
            let reply = ''
            let audio = null
            data.forEach(e => {
              reply += `*${e.word}*\n`
              if (e.phonetics.length) {
                audio = e.phonetics[0].audio
                e.phonetics = e.phonetics.map(el => el.text)
                reply += e.phonetics.join(', ')
                reply += '\n\n'
              }
              e.meanings.forEach(el => {
                reply += `*${el.partOfSpeech}*\n`
                el.definitions.forEach(def => {
                  reply += `def: ${def.definition}\n`
                  if (def.example) {
                    reply += `Example: ${def.example}\n\n`
                  }
                  if (def.synonyms) {
                    reply += `Synonyms: ${def.synonyms.join(', ')}\n\n`
                  }
                })
              })
            });
            if (audio) {
              ctx.replyWithAudio(audio, Extra.caption(reply))
            } else {
              ctx.replyWithMarkdown(reply)
            }
          }
        } catch (e) {
          if(e.response.status === 404) {
            ctx.reply(e.response.data.title)
          } else {
            ctx.reply("Did not quite get what you said, please contact @aishwary023 for the issue!")
          }
        }
      } else {
        ctx.replyWithMarkdown(`Invalid language code, in case you forgot following are language codes\n\n${languageList}`)
      }
      break;
    default:
      ctx.replyWithMarkdown(`Invalid message format, use following format to search efficiently:\n\n${usageFormat}`)
  }
}