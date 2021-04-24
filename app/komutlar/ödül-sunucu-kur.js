const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Ödül Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanallar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✔️').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✔️' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: '👑・Owner' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '🏆・Admin' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: '🔧・Mod' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '💎・Vip' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '👤・Member' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))

message.guild.channels.create('●▬▬▬๑「📃」๑▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🎁・click', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📃・rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢・announcement', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💾・invite-log', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬๑「💰」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('💸・proffs', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📦・giveaways', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📂・drops', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「📁」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('📁・events¹', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📁・events²', {type: 'text'}).then(c => c.setParent(parent.id));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ödülsunucukur', 'ödülsunucusukur', 'ödül-sunucu', 'ödülsunucusu', 'ö-s', 'ös'],
  permLevel: 0
}

exports.help = {
  name: 'ödül-sunucu-kur'
};