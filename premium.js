module.exports = {
    name: 'premium'
}

module.exports.code = async (message, args) => {
    if (args[0] === 'check') {
        if (message.client.premium.has(message.guild.id)) message.channel.send("You have premium ;D, Thanks bro!")
        else message.channel.send("You do not have premium ;( ")
    }
    let code = args[0]
    if (!code) message.reply('You need to specify the premium code')

    if (message.client.premiumCodes.has(code)) {
        message.client.premium.set(message.guild.id, true)
        message.client.premiumCodes.delete(code)
        message.channel.send("You have premium now. Thank you for buying it!")
    } else message.reply("Uh Oh! This code is not valid!");

}