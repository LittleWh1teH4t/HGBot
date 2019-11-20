const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://aws.random.cat/meow')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Meowwwwwwwww")
      .setImage(response.body.file)
      .setColor(`#000000`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}