const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://icanhazdadjoke.com/slack')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("my father always said")
      //.setImage(response.body.url['message'])
      .setColor(`#000000`)
      .setDescription(response.body.attachments[0].fallback);
  message.channel.send(lewdembed);
    })
}

// http://api.icndb.com/jokes/random