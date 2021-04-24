const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("WHİTE")
.setAuthor("Nooro Sunucu Kur Yardım Menüsü")
.setTitle("")
 .setTimestamp()
.setDescription("**-genel-sunucu-kur** = Genel/Publıc bi sunucu kurmana yarar.  \n  **-oyun-sunucu-kur** = Oyun sunucusu kurmana yarar.  \n  **-müzik-sunucu-kur** = Müzik sunucusu kurmana yarar. \n  **-yayın-sunucu-kur** = Yayıncı/YouTuber sunucusu kurmana yarar. \n **-ödül-sunucu-kur** = Ödül/reward sunucusu kurmana yarar. \n **-gif-sunucu-kur** = Gif sunucusu kurmana yarar")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['sunucu', 'sunucukur'],
  permLevel: `Yetki gerekiyor.` 
};

exports.help = {
  name: 'sunucu-kur',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-sunucu-kur'
}