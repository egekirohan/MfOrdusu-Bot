const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

 let KayıtSorumlusu = '826402886162186272' //YETKİLİ İD                
let ÜyeRol = '826402888078721064' //VERİLİCEK ROL İD
let KayıtsızRol = '826402889487482911' //ALINICAK ROL İD
let Tag = '' // TAG

  if(!message.member.roles.cache.has(KayıtSorumlusu))  
  return message.channel.send(`**Üzgünüm Bu Komudu Sadece Ayarlanmış Yetkililer Kullanabilir!**`);
  let member = message.mentions.members.first()
  let İsmi = args[1]
  let Kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)        
  let toplamaisim = `${Tag} ${İsmi}` 
  if (!member) return message.channel.send('** Lütfen Bir Üye Etiketleyiniz!**')
  if (!İsmi) return message.channel.send('** Lütfen Bir İsim Yazınız!**')
  
      setTimeout(function(){  
  member.roles.add(ÜyeRol)
  },800)
  setTimeout(function(){
  member.setNickname(`${Tag} ${İsmi}`)
  },1000)
  setTimeout(function(){
  member.roles.remove(KayıtsızRol)
  },2000)

let KayıtToplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'

  if(Kayıtlımı !== 'evet') {            
  db.add(`kayıte_${message.author.id}`, 1)
  db.add(`kayıttoplam_${message.author.id}` , 1) 
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)                     
  db.add(`toplamik_${member.id}`, 1)  
  let HyperWolf = new Discord.MessageEmbed()
  .setTitle('Bu İşlem Başarılı')
  .setDescription(`
  **Kayıt Edilen Kullanıcı ・ ${member}** 
 **Verilen Rol ・ **<@&${ÜyeRol}>  \n
   **Kayıt Eden Yetkili ・** <@!${message.author.id}>
 **Bu Yetkili Toplamda ・ ${KayıtToplam} Kişi Kayıt Etmiş**
`)
.setColor('WHİTE')
message.channel.send(HyperWolf)

  }  
  
  if(Kayıtlımı === 'evet'){
  db.set(`kayıtlıisim_${member}`, toplamaisim)      
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)         
    let HyperWolf = new Discord.MessageEmbed()
    .setAuthor('Uyarı')
  .setDescription(` **Bu Kişi Daha Öncedende Kayıt Edilmiş?**                 
                
**Eski Adı ・ ** \`${eskiismi}\``)
.setColor('#WHİTE')
message.channel.send(HyperWolf)
  }
};  

exports.conf = {              
    aliases: ['Kayıt']
}
exports.help = {
  name: 'kayıt',
  usage: 'Nooro Kayıt Komudu'
}