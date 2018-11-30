const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    let cpuLol;
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "İstatistik Menüsü",
              icon_url: "https://cdn.discordapp.com/attachments/487719679868272689/488331544587403274/image0.jpg"
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/487719679868272689/488329963926192158/image0.png"
			},
            title: "Ping Durumu :",
            description: `**${Math.round(client.ping)}**`,
            fields: [
      {
                name: "Sunucu Sayısı :",
                value: `**${client.guilds.size.toLocaleString()}**`
              },     
			{
                name: "Kullanıcı Sayısı :",
                value: `**${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`
              },
			{
                name: "Bellek Kullanımı :",
                value: `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB** / **32 GB**`
              },
			{
                name: "CPU :",
                value: `**${os.cpus().map(i => `${i.model}`)[0]}**`
              },
			{
                name: "Çalışma Süresi :",
                value: `**${duration}**`
              },
			{
                name: "Discord.JS sürüm :",
                value: `**v${Discord.version}**`
              },
			{
                name: "Node.JS Sürümü :",
                value: `**${process.version}**`
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© Bot"
            }
          }
        });  
  }};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistiklerini gösterir.',
  usage: 'istatistik'
};
