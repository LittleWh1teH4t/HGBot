const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('http://api.icndb.com/jokes/random')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Chuck norris ya say? let me tell ya about him")
      //.setImage(response.body.url['message'])
      .setColor(`#000000`)
      .setDescription(response.body.value['joke']);
  message.channel.send(lewdembed);
    })
}

// http://api.icndb.com/jokes/random