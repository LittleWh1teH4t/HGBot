const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://dog.ceo/api/breeds/image/random')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Doggo!!")
      .setImage(response.body.message)
      .setColor(`#000000`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}