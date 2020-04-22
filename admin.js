module.exports = {
    name: 'admin'
}

module.exports.code = async (message, args) => {
    let developers = ["465883333159550980", "485885170080022556", "389460868384948224"]
 if (!developers.includes(message.author.id)) return message.reply('You cannot use this!')


    if (!args[0]) return message.reply('Usages:\n un!admin announcement <announcement>\nun!admin shutdown')
if (args[0] === 'announcement') {
    if (!args[1]) return message.reply('What is the announcement?')
    let [a, announcement] = args;
    message.client.guilds.cache.forEach(guild => {
        guild.channels.cache.find(channel => channel.name === 'general').send(announcement)

    })
}
else if (args[0] === 'shutdown') {
    await message.client.destroy()
    process.exit()
}
}