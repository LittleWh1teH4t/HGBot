const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://api.kanye.rest/')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("What does Kanye say?")
      .setDescription(response.body.quote)
      .setColor(`#000000`);
  //    .setDescription(response.body.url);
  message.channel.send(lewdembed);
    })
}