const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Müzik Tema')
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

message.guild.roles.create({ data: { name: '👑・Kurucu' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '🏆・Yönetici' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: '🔧・Moderatör' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '📋・Kayıt Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: '💎・Vip' }, reason: 'ayn' }).then(s => s.setColor('#f4fa58'))
message.guild.roles.create({ data: { name: '💖・Dostlar' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '✏️・Tasarımcı' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '💻・Editör' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '👤・Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '👾・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '📀・Dj' }, reason: 'ayn' }).then(s => s.setColor('#c7ab05'))
message.guild.roles.create({ data: { name: '・---------------' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: '🎤・Sesi Güzel' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))

message.guild.channels.create('●▬▬๑「🎈」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('・kayıt-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎤 | Teyit ¹', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ²', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
message.guild.channels.create('🎤 | Teyit ³', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
});
message.guild.channels.create('●▬▬▬๑「📃」๑▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('📃・kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢・duyurular', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💾・sunucu-logs', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬๑「💬」๑▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・foto-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👾・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎶・şarkı-türet', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬▬๑「🚪」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('📥・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚪・giriş-çıkış', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('●▬▬▬๑「🏆」๑▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('📌・şikayet-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏆・Yönetici Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Kurucu Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('●▬▬▬▬๑「🔊」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🍺 ・ Pub', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('💧 ・ Garden', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🌲・ Steak House', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🍻 ・ Amsterdam', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
});

message.guild.channels.create('●▬▬▬▬๑「🎵」๑▬▬▬▬●', {type: 'category'}).then(parent => {
message.guild.channels.create('🎵 ・ Music Room', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎤 ・ Live Music', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🔓 ・ Free Style', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('💫・ Starbucks', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
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
  aliases: ['müziksunucukur', 'müziksunucusukur', 'müzik-sunucu', 'müziksunucusu', 'm-s', 'ms', 'muzık-sunucu-kur'],
  permLevel: 0
}

exports.help = {
  name: 'müzik-sunucu-kur'
};