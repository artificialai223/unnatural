module.exports = {
    name: 'pause'
}

module.exports.code = async (message, args) => {

let dispatcher = message.client.disp
if (!dispatcher) return message.reply('I am not playing any song!')
if (!message.client.paused) message.client.paused = false
if (message.client.paused) {
    dispatcher.resume()
    message.client.paused = false
}
else {
    dispatcher.pause()
    message.client.paused = true

}
message.channel.send(':musical_note: ' + (message.client.paused ? "Paused" : "Resumed") +  ' audio!\n`To resume, use this command again.`')

}