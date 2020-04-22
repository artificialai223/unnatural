module.exports = {
    name: 'messages'
} 

module.exports.code = (message, args) => {

message.guild.channels.map(channel => {
    let sizee = channel.messages.cache.filter(m => m.author.id === message.author.id).size
    message.channel.send(sizee)
})


}












