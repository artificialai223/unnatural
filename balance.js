module.exports = {
    name: 'balance'
}

module.exports.code = async (message, args) => {
if (!message.client.bal) return message.reply("Uh oh my data has been corrupted, Contact an admin!")
let developers = ["465883333159550980", "485885170080022556", "389460868384948224"]

if (args[0] === 'add') {
    let msg = await message.channel.send("Verifying Your Permissions...")
setTimeout(() => {
    if (developers.includes(message.author.id)) {
msg.delete()
        let [add, ID, balToAdd] = args;
        if (!ID || !balToAdd) return message.reply('Use command like un!balance add <user id> <balanceToAdd>')
        let balance = message.client.bal.get(ID)
        if (!balance) return message.reply("Use user's ID!")
message.client.bal.set(ID, Number(balance) + Number(balToAdd))
message.channel.send('done!')
    }
    else message.reply("Why did you try to run this command? You do not have permission!")
}, 1200)
}
else {
    if (args[0]) {
        let balancee = message.client.bal.get(args[0])
        if (!balancee) return message.reply("Use user's ID!")
        return message.channel.send(":dollar:" + balancee)

    }
if (message.client.bal.has(message.author.id)) {
    message.channel.send(":dollar: " + message.client.bal.get(message.author.id))
}
else {
    message.client.bal.set(message.author.id, "0")
    message.channel.send(":dollar: " + message.client.bal.get(message.author.id))
}
}
}


/* 
Hey bro

*/