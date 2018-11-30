const Discord = require('discord.js');

exports.run = (client, message, args) => {

    message.channel.send(`Yapımcım Bot yeniden başlatılıyor...`).then(msg => {
		m.edit('Bot Yeniden Başlatıldı')
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  usage: 'reboot'
};
