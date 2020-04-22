module.exports = {
    name: 'ban'
}

module.exports.code = async (message, args) => {
    if (!message.guild) return message.channel.send({embed: {description: "Bruh you can only ban ppl from servers ;D"}})
    if (!args[0]) return message.channel.send({embed: {description: "You seriously tried to ban no one!?"}})
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("You do not have permission")
    let findMember = message.mentions.members.first().id || await message.guild.fetch(args[0]) || message.guild.members.cache.find(m => m.name === args[0])
let [member, reason] = args;
if (!reason) reason = 'Not specified'
if (!findMember) return message.reply("MEMBER NOT FOUND!")
    message.guild.members.ban(findMember)
    .then(m => {
        message.channel.send({embed: {description: "Lol i Banned him " + findMember.user.username}})
    })
    .catch(m => {
        return message.reply('I cannot ban that user sry m8.')
    })
}




/*



*/