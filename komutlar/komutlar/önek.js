const Discord = require("discord.js");
const turuncu = 0xfbc713
const mavi = 0x2e34b1
const pembe = 0x9f1eff
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) {
    message.delete(1)
    message.channel.sendMessage("`Bu komutu kullanmak için Sunucuyu Yönet yetkisine sahip olmalısınız!`")
    return
  }
  if(!args[0]) {
    message.delete(1)
   message.channel.sendMessage("`Belirleyeceğin Ön-Ek'i yazmalısın!`")
   return
 }

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
    .setColor(message.guild.me.displayColor)
    .addField(`Yeni Ön-Ek Belirlendi!`, args[0])
    .setTimestamp()
    .setFooter(`kullanan: ${message.author.tag}`)
  message.delete(1)
  message.channel.sendEmbed(sEmbed);

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ön-ek',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'ön-ek [kullanıcı] [sebep]'
};