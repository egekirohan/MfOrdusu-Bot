const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("Beni Sunucuna Ekle 💖")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=825100081295261732&scope=bot&permissions=805314622) \n [__**Destek Sunucusu**__](https://discord.gg/nrXBVpjrxE) \n [__**Oy Ver**__](https://top.gg/bot/825100081295261732/vote)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};