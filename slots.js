module.exports = {
    name: 'slots'
} 
 
module.exports.code = (message, args) => {

    let emojis = [":one:", ":two:", ":three:"]

let row1 = emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)]
let row2 = emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)]
let row3 = emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)] + emojis[Math.floor(Math.random() * emojis.length)]

message.channel.send(`
** **         ${row1} 
:point_right: ** **  ${row2}
** **         ${row3}

`)
if (row2 === ':two::two::two:' || row2 === ':one::one::one:' || row2 === ':three::three::three:') {
    message.channel.send("you won!")

}
else message.channel.send("you lost!")    
}