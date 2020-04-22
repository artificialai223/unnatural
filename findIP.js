module.exports = {
    name: 'findip'
}

module.exports.code = async (message, args) => {

    let requestURL = 'https://tools.keycdn.com/geo.json?host='
let fetch = require('node-fetch')
if (!args || !args[0]) return message.reply('You have to specify a url or IP!')

let o;
fetch(`${requestURL}${args.join('%20')}`)
.then(output => output.json())
.then(output => {
o = output.data.geo
message.channel.send({embed: {
    description: `
    IP: ${o.ip}
    ISP: ${o.isp}
    Country: ${o.country_name}
    Postal Code: ${o.postal_code}
    Timezone: ${o.timezone}
    Host: ${o.host}
    `
}})
})
.catch(e =>{
    message.reply('The provided IP/hostname is invalid.')
})
}


