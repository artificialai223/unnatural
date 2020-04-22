/*
========= CHAT AREA ===========
INSTALL DEPENDENCIES COMMAND: npm install
START BOT TERMINAL COMMAND: node app.js

BETTERSQLITE3 INSTALL COMMANDS: npm i better-sqlite3
                                npm i better-sqlite-pool



*/
const Discord = require("discord.js")
const client = new Discord.Client({disableEvents: ["messageTyping"]})
const fs = require('fs')
const Enmap = require('enmap')
client.bal = new Enmap({name: "bal"})
client.cmds = new Discord.Collection()
client.premium = new Enmap({name: "premium"})
client.premiumCodes = new Enmap({name: "premiumCodes"})
client.autoRole = new Enmap({name: "autorole"})
let searchCommands = fs.readdirSync('./cmds').filter(fileName => fileName.endsWith('.js'))

for (const file of searchCommands) {
    const commandData = require(`./cmds/${file}`)
    console.log('Loaded command ' + commandData.name)
    client.cmds.set(commandData.name, commandData)
    
}

let { prefix, token } = require('./config.json')

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(' ')
    let shiftCommand = args.shift().toLowerCase()
    let findCommand = client.cmds.get(shiftCommand)
    if (!findCommand) return;

    try {
      findCommand.code(message, args)
    } catch(e) {
        console.log('ERROR\n' + e)
    }

})

client.on("guildMemberAdd", (member) => {
    if (client.autoRole.has(member.guild.id)) {
        member.roles.add(client.autoRole.get(member.guild.id))
    }
})
client.once('ready', () => {
    console.log('Online')
})

client.login(token)
