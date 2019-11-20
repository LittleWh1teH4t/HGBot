const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("What does Donald Trump think?")
      .setDescription(response.body.message)
      .setColor(`#000000`);
  //    .setDescription(response.body.url);
  message.channel.send(lewdembed);
    })
}