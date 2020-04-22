module.exports = {
    name: 'musicplay'
}

module.exports.code = async (message, args) => {

    const ytdl = require('ytdl-core')
    const search = require('youtube-search')

    let options = {
        maxResults: 1,
        key: 'AIzaSyBGgluV-UxzQK0Mg0PEbypr8lup3habVUo'
    }
if (message.content.includes('http')) {
    let song = args[0]
if (!song) return message.reply("Usage: un!play <youtube song link>")



if (ytdl.validateURL(song)) {

    if (!message.member.voice.channel) return message.reply('You need to join a voice channel first.')
    if (message.guild.me.voice && message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.reply('I am not in the same voice channel as you!')

    message.member.voice.channel.join()
    .then(connection => {

        let dispatcher = connection.play(ytdl(song, {filter: 'audioonly'})) // , { type: 'opus', filter: 'audioonly'}
      dispatcher.on('end', () => {
          message.channel.send('The song has ended! Leaving channel...')
      })
      message.client.disp = dispatcher
    let info = ytdl.getInfo(song)
message.channel.send(':musical_note:  Playing ' + song)
})
 } else message.reply('I could not play from that link!')
} else {
    let song1;
await search(args[0], options, (err, results) => {
        song1 = results[0].url
    })
    if (!message.member.voice.channel) return message.reply('You need to join a voice channel first.')
    if (message.guild.me.voice && message.guild.me.voice.channel && message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.reply('I am not in the same voice channel as you!')

    message.member.voice.channel.join()
    .then(connection => {

        let dispatcher = connection.play(ytdl(song1, {filter: 'audioonly'})) // , { type: 'opus', filter: 'audioonly'}
      dispatcher.on('end', () => {
          message.channel.send('The song has ended! Leaving channel...')
      })
      message.client.disp = dispatcher
    let info = ytdl.getInfo(song1)
message.channel.send(':musical_note:  Playing ' + song1)
})
}
}