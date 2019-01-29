const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let channel = bot.channels.get("484006453896806400")
let embed = new Discord.RichEmbed()
.setTitle("Tavsiye Yolladı")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Tavsiye", bug)
.addField("Tavsiye Eden", user)
.addField("Yolladığı Sunucu", guild)
.setColor("#f49542")

message.channel.send(":white_check_mark: **| Bulduğun hata botun sunucusuna gönderildi. İnceliyoruz. En yakın zamanda düzelteceğiz. Bildirdiğiniz için teşekkürler.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Tavsiye Edersiniz.',
  usage: 'tavsiye'
};