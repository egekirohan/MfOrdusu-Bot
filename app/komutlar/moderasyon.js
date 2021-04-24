const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("WHİTE")
.setAuthor("Nooro Moderasyon Yardım Menüsü")
.setTitle("")
 .setTimestamp()
.setDescription("**-sil** = Yazdığınız miktarda mesajı siler.  \n  **-ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **-kick** = Etiketlediğiniz kişiyi atarsınız. \n  **-duyuru** = Bota duyuru yaptırırsınız.  \n  **-küfür** = Küfür engel sistemini açarsınız.  \n  **-reklam** = Reklam engel sistemi açarsınız.  \n  **-slowmode** = Yavaş modu ayarlarsınız.  \n  **-forceban** = Birisine id ban atarsınız.  \n  **-unban** = Birisinin banını açarsınız. \n  **-sa-as** = Bot biri sa dedimi cevap verir.  \n **-sunucubilgi** = Sunucu bilgilerini görürsün. \n **-kayıt** = Kayıt komutlarını görürsün. \n  **-üyedurum** = Üyelerin durumlarını görürsün.  \n  **-sohbet-kapat** = Sohbeti kapatır. \n **-sohbet-aç** = Sohbeti açar. \n **-reklam** = Reklam komutlarını gösterir. ")
.setImage("")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod', 'm'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}