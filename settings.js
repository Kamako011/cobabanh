const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa : 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz' : 'https://hardianto.xyz/', // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

global.self_mode = false
global.autobio = false
global.msg_connected = true
global.user_register = false
global.anti_delete = true
global.anticall = false
global.auto_welcome_msg = true
global.auto_leave_msg = true
global.prefix = "."
global.language = "ind"
global.ownerNumberr = "17472773940"
global.ownerbot = ['6281298309340@s.whatsapp.net','6281298309340@s.whatsapp.net','17853024668@s.whatsapp.net','6281211633829@s.whatsapp.net'] // .owner
global.ownername = "𝙷𝙰𝚁𝚅𝙰 𝙷𝙸𝚆𝙰𝙼𝙰𝚁𝚄"
global.botname = "𝙷𝙰𝚁𝚅𝙰-𝙱𝙾𝚃"
global.thumb = "thumbnail_1.jpg"
global.thumbnail ="82cf240613621d3be1b02.jpg"
global.fakethumb ="kagumi.jpg"
global.donasi ="qr.jpg"
global.captionpay ="Scan untuk melakukan pembayaran"
global.fake = "「  HARVABOT  」\nCreated By 𝚂𝙴𝙽𝙰 𝙷𝙸𝚆𝙰𝙼𝙰𝚁𝚄"
global.alphaVersion = [2, 2143, 3] //WhatsApp web version

/* Available type menu

['document', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location', 'image']

*/
global.typeMenu = 'document'

//foto menu size maks 50kb
global.allmenu = 'https://telegra.ph/file/e1e0ca1cc571a4ab117dc.jpg'
global.downloadcmd = 'https://telegra.ph/file/82ee05e0e06704eb3144f.jpg'
global.groupcmd = 'https://telegra.ph/file/f5c1dcf98c4fcd152e160.jpg'
global.convertcmd = 'https://telegra.ph/file/e6119acb272ce61c3b09f.jpg'
global.funcmd = 'https://telegra.ph/file/f30458769f72b5940530f.jpg'
global.makercmd = 'https://telegra.ph/file/187ba179e992749870a3c.jpg'
global.othercmd = 'https://telegra.ph/file/1d406cdf0320397867435.jpg'
global.ownercmd = 'https://telegra.ph/file/93e7adb28946fce7c055f.jpg'
global.storagecmd = 'https://telegra.ph/file/d74d46ca5a786ce98bf3b.jpg'
global.tagcmd = 'https://telegra.ph/file/de12e2541d0365cc85754.jpg'
global.upcmd = 'https://telegra.ph/file/60ac1e56821c2243c1851.jpg'
global.cecancmd = 'https://telegra.ph/file/2e3607cd1260bb7cadac7.jpg'
global.telegramcmd = 'https://telegra.ph/file/9e2a7a4e3e328e3684457.jpg'
global.nsfwcmd = 'https://telegra.ph/file/dba8a85a60d4f209b2df3.jpg'
global.asupancmd = 'https://telegra.ph/file/5e9f5bc9d90caed691c60.jpg'
global.imageeffectcmd = 'https://telegra.ph/file/20262dce86c3a02af3f99.jpg'
global.cogancmd = 'https://telegra.ph/file/20262dce86c3a02af3f99.jpg'
global.quotescmd = 'https://telegra.ph/file/20262dce86c3a02af3f99.jpg'
global.animecmd = 'https://telegra.ph/file/f300ae72aa23e47e7daae.jpg'
global.textprocmd = 'https://telegra.ph/file/798b1ef2fb90fe8b0b9e3.jpg'
global.photooxycmd = 'https://telegra.ph/file/f300ae72aa23e47e7daae.jpg'
global.soundcmd = 'https://telegra.ph/file/62f0634eca9ed3b9821a6.jpg'
global.kerangcmd = 'https://telegra.ph/file/62f0634eca9ed3b9821a6.jpg'
global.primboncmd = 'https://telegra.ph/file/329823a86cb299e2db058.jpg'
global.islamiccmd = 'https://telegra.ph/file/329823a86cb299e2db058.jpg'
global.ephoto360cmd = 'https://telegra.ph/file/f300ae72aa23e47e7daae.jpg'
global.logocmd = 'https://telegra.ph/file/cff2074f9a5643fe27af2.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
