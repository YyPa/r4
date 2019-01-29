const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.RichEmbed()
  .setAuthor(`Yazı Tura`)
  .addField(`Sonuç`, `Sen Bunu Çevirdin: **Tura**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0xff1053");
  let tailembed = new Discord.RichEmbed()
  .setAuthor(`YazıTura`)
  .addField(`Sonuç`, `Sen Bunu Çevirdin: **Yazı**!`)
  .setThumbnail(`${message.author.displayAvatarURL}`)
  .setColor("0x00bee8");
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['yaztur', 'yazıtur',],
    permLevel: 2
  };
  
  exports.help = {
    name: 'yazıtura',
    description: 'Yazı Tura Oynarsınız',
    usage: 'yazıtura '
  };