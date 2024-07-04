import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212717518501
*instagram:*\nhttps://www.instagram.com/l7arga_ispan
*facebook page:*\nhttps://www.facebook.com/profile.php?id=61553701960786


`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
