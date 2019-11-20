const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Kiss")
      .setImage(response.body.url)
      .setColor(`#000000`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}