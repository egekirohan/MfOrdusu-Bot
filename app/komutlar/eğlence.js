const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("WHİTE")
.setAuthor("Nooro Eğlence Yardım Menüsü")
.setTitle("")
 .setTimestamp()
.setDescription(" **-tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n   **-fbi** = Bot FBi Gif Atar.  \n **-düello** = Düello Atarsın.  \n  **-wasted** = Polis tarafından yakalanırsın.  ")
.setImage("")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}