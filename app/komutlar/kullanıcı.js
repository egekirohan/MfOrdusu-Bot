const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("WHİTE")
.setAuthor("Nooro Kullanıcı Yardım Menüsü ")
.setTitle("")
 .setTimestamp()
.setDescription(" **-avatar** = Avatarınıza bakarsınız.  \n  **-yetkilerim** = Yetkilerini görürsün. \n  **-profil** = Profilini görürsün. \n **-sunucuresmi** = Sunucu resmini gösterir.  \n  **-ping** = Nooro botun Pingine Bakarsın.  \n  **-id** = Birisinin id'sine Bakarsın.  \n  **-davet** = Beni Sunucuna Ekle.  \n  **-botbilgi** = Bot istatistiklerini görürsünüz.  ")
.setImage("")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}