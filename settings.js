const fs = require('fs')
const chalk = require('chalk')

//BOT SETTINGS//
global.xprefix = '.'
global.ownername = 'P.L.A'
global.botname = 'Queen'
global.ytname = "-"
global.socialm = "-"
global.location = "Kandy, Sri Lanka"
global.ownernumber = '94701839429'

//BOT SETTINGS 2//
global.premium = ["94774518196"] //Premium 
global.websitex = "-"
global.wagc = "-"
global.themeemoji = '👨🏼‍💻'
global.wm = "Queen"
global.botscript = 'https://github.com/Pabasaralakmal2/ELITE-PRO-V2'
global.packname = "Sticker By"
global.author = "Queen/P.L.A"
global.creator = "94701839429@s.whatsapp.net"
global.elitepropp = 'https://i.ibb.co/dkCyXrQ/d5267430f91921bfe6845c611ec4527e.jpg'

//DEFAULT SETTINGS//
global.hituet = 0
global.typemenu = 'v1' // v1, v2 too v9
global.typereply = 'v2' // v1, v2 and v3
global.autoblocknumber = '92' //autoblock country
global.antiforeignnumber = '91' //anti foreign number
// TOGGLE CMDS: Enable=true Disable=false
global.welcome = false //welcome/left in groups
global.anticall = false //blocks user that call
global.autoswview = false // view status
global.adminevent = false //show promote/demote mess
global.groupevent = false //show update messages in group chat
global.autoreact = false //React to messages

//DEFAULT SETTINGS 3//
global.mess = {
    limit: 'Your limit is up!',
    nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable it',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}

global.thumb = fs.readFileSync('./EliteProMedia/theme/elitepro.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
