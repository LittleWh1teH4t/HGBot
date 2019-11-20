const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('My master DitchDoctor only lets me show my lewd commands in nsfw channels')
    superagent.get('https://hentaiglare.com')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Just follow my prefix with one of these commands")
                .setColor(`#000000`)
                .addField("anal",
                    "anal hentai.")
                .addField("ass",
                    "Real Asses")
                .addField("blowjob",
                    "Blowjobs")
                .addField("boobs",
                    "Real boobs")
                .addField("cum",
                    "~~yummy yummy~~")
                .addField("gelbooru/konachan/xbooru Pick one and add an optional tag",
                    "Search sites for a specified tag. Example: danbooru naked (note: danbooru is disabled due to a crasing issue. Will be back soon)")
                .addField("feet",
                    "foot fetish")
                .addField("foxgirl",
                    "cute ;)")
                .addField("furry",
                    "rawr XD")
                .addField("futa",
                    "chicks with dicks")
                .addField("gif",
                    "Get a animated hentai pic")
                .addField("hentai",
                    "random hentai")
                .addField("lewd",
                    "Having lewd thoughts are we? ;)")
                .addField("neko",
                    "catgirls ^^")
                .addField("nekogif",
                    "Pics aren't enough? we have gifs!")
                .addField("pussy",
                    "d-do I really need to explain")
                .addField("r34",
                    "could we just skip this one? K thanks!")
                .addField("safebooru",
                    "playing it safe?")
                .addField("solo",
                    "solo = 1 do I need to explain?")
                .addField("tits",
                    "anime tiddies!")
                .addField("trap",
                    "the real question is 'are traps gay?'")
                .addField("yandere",
                    "idk okay....")
                .addField("yuri/yaoi Pick one",
                    "lesbian/gay hentai");
            message.channel.send(lewdembed);
        })

}







/* const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
 // .setColor(0x00AE86)
 // .setDescription("This is the main body of text, it can hold 2048 characters.")
//  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
//  .setImage("http://i.imgur.com/yVpymuV.png")
//  .setThumbnail("http://i.imgur.com/p2qNFag.png")
/*
 * Takes a Date object, defaults to current date.
 */
//  .setTimestamp()
//  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
//  .addField("This is a field title, it can hold 256 characters",
  //  "This is a field value, it can hold 1024 characters.")
/*
 * Inline fields may not display as inline if the thumbnail and/or image is too big.
 */
 // .addField("Inline Field", "They can also be inline.", true)
/*
 * Blank field, useful to create some space.
 */
 // .addBlankField(true)
 // .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  // message.channel.send({embed}); */