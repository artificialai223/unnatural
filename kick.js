module.exports = {
    name: 'kick'
}

module.exports.code = async (message, args) => {
    if (!message.guild) return message.channel.send({embed: {description: "You can only kick people from servers"}})
    if (!args[0]) return message.channel.send({embed: {description: "You need to specify a member to kick!"}})
    let findMember = await message.guild.fetch(args[0]) || message.guild.members.cache.find(m => m.name === args[0]) || message.mentions.members.first().id
let [member, reason] = args
if (!reason) reason = 'Not specified'
if (!findMember) return message.reply("MEMBER NOT FOUND!")

   findMember.kick()
    .then(m => {
        message.channel.send({embed: {description: "Kicked " + findMember.user.username}})
    })
    .catch(m => {
        return message.reply('I cannot kick that user.')
    })
}




/*





*/