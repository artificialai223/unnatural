module.exports = {
    name: 'autorole'
} // create shared terminal

module.exports.code = (message, args) => {
if (!message.client.premium.has(message.guild.id)) return 
    if (!args[0] || !Number(args[0])) return message.reply("un!autorole <ROLE ID>") 
    message.client.autoRole.set(message.guild.id, args[0])
    let autorole = message.guild.roles.cache.get(args[0]).toString()
    if (autorole) message.channel.send("Set server autorole to " + autorole)
    else message.reply('Role not found!')
}