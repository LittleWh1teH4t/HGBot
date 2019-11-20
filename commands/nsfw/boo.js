const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://hentaiglare.com')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
     //           .setTitle("Just follow my prefix with one of these commands")
                .setColor(`#000000`)
                .addField("Oh, hey Boo",
                    "Sorry I annoyed you. Plz no ban <3");
            message.channel.send(lewdembed);
        })

}