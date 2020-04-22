module.exports = {
    name: 'eval'
}


module.exports.code = async (message, args) => {

    let developers = ["465883333159550980", "485885170080022556", "389460868384948224"]

    if (developers.includes(message.author.id)) {
   
        let code = args.join(' ')
console.log()
try {
        let evaluatedCode = await eval(code)
        if (typeof evaluatedCode !== "string") {
            evaluatedCode = require('util').inspect(evaluatedCode)
        }
        message.channel.send('```' + evaluatedCode + '```')
    } catch(e) {
        message.channel.send("ERROR\n" + e)
    }
       
    
} else message.reply('You cannot do this!')

}