const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    superagent.get('https://hentaiglare.com')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Just follow my prefix with one of these commands")
                .setColor(`#000000`)
                .addField("Hug",
                    "hug gifs and pics ^^ Try tagging a friend ;)")
                .addField("kiss",
                    "kiss someone or just see a pic/gif")
                    .addField("doggo",
                    "Get a random doggo or pupper pic")
                    .addField("kitty",
                    "Get a random cat or kitten pic")
                                        .addField("chucknorris",
                    "everyone likes a good joke, eh?")
                                        .addField("quote",
                    "Get a random famous quote")
                                                            .addField("dadjoke",
                    "Dad jokes are still a thing, right?")
                    .addField("kanye",
                    "Get a random but real Kanye West quote (potential trigger warnin)")
                    .addField("trump",
                    "Get a random but real Donald Trump quote (potential trigger warnin)")
                .addField("cuddle",
                    "cuddles!")
                .addField("lewdhelp",
                    "see lewd commands. Only works in nsfw channels");
            message.channel.send(lewdembed);
        })

}