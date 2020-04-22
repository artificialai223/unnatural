module.exports = {
    name: 'hosting'
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
    message.reply('https://titanmc.co.uk/')

}