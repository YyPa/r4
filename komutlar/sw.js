const Discord = require("discord.js")
exports.run =  function (bot, message) {
      if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setDescription('HATA')
  return message.author.sendEmbed(ozelmesajuyari); }
    const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`${guild.name} (${guild.owner.user.username}#${guild.owner.user.discriminator} (${guild.owner.user.id}) - ${guild.memberCount}`, guild.id);
      embed.setColor(0xff0000)
      embed.setTitle('Bulunduğum Sunucular')
      embed.setDescription(`Şu an ${bot.guilds.size} server de bulunuyorum`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sw'],
  permLevel: 2
};

exports.help = {
  name: 'sw',
  description: 'Gizli',
  usage: 'sw'
};
