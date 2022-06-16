let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0813-6883-1544]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
