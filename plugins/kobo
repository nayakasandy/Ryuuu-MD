let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kobo","kobo kanaeru","kobo hololive","kobo holoid","loli kobo","ecchi kobo").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
   }
    
handler.help = ['kobo']
handler.tags = ['internet']
handler.command = /^(kobo)$/i
handler.limit = true

module.exports = handler
