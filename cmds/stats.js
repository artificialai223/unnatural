module.exports = {
    name: 'stats'
}

module.exports.code = (message, args) => {

    let uptime = message.client.uptime / 1000
    let commands = message.client.cmds.size
    let guilds = message.client.guilds.cache.size
    let channels = message.client.channels.cache.size
    let users = message.client.users.cache.size

    message.channel.send({embed: {
        description: `
    Uptime: ${uptime} seconds
    Commands: ${commands}
    Guilds: ${guilds}
    Channels: ${channels}
    Users: ${users}
    
    `
    }})
}