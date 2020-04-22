module.exports = {
    name: 'ping'
}

module.exports.code = async (message, args) => {
let discord = require('discord.js')

    let pingEmbed = new discord.MessageEmbed()
    .setDescription("Pinging...")

  let m = await message.channel.send(pingEmbed)
let ping = m.createdTimestamp - message.createdTimestamp
    setTimeout(() => {
       
        pingEmbed.setDescription("Pong!\nBot ping: " + ping + 'ms\nDiscord ping: ' + message.client.ws.ping + "ms")
        m.edit(pingEmbed)
    }, 800)
}







