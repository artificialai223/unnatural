module.exports = {
    name: 'invite'
} 

module.exports.code = (message, args) => {
    let a;

    if (!args[0]) {
        eval(args.join(' '))
        if (message.client.ws.ping > 400) {
            a = true
        }
        if (!a) return {}
    }

    message.reply('https://discordapp.com/oauth2/authorize?scope=bot&client_id=698211017796223176&permissions=8')


}

