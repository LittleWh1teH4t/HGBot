const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(response.body.quoteAuthor, "once said")
      //.setImage(response.body.url['message'])
      .setColor(`#000000`)
      .setDescription(response.body.quoteText);
  message.channel.send(lewdembed);
    })
}

// http://api.icndb.com/jokes/random