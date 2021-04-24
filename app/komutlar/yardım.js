const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Nooro Yardım Menüsü")
.setTitle("")
 .setTimestamp()
.setDescription("**-eğlence** = Eğlence komutlarını görüntülersiniz. \n  **-moderasyon** = Moderasyon komutlarını görüntülersiniz. \n **-kullanıcı** = Kullanıcı komutlarını görüntülersiniz. \n  **-logo** = Logo komutlarını görüntülersiniz.  \n **-sunucu-kur** = Sunucu kurma komutlarını görüntülersin.  ")
.setImage("https://cdn.glitch.com/ddbd0d1d-c465-4017-aff7-3b2942c5ad5b%2Fhelp%20menu.png?v=1617779963487")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y", 'h', 'yardım'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-yardım'
}