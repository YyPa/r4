const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args, level) => {

let Timer = args[0];

if(!args[0]){
  return message.channel.send("Lütfen s = saniye, m= dakika , h = saat (sadece harfleri gireceksiniz) ile ilgili bir süre girin");
}

if(args[0] <= 0){
  return message.channel.send("Lütfen s = saniye,m= dakika ,h = saat (sadece harfleri gireceksiniz) saat ile ilgili Zaman Aralığıu Girin");
}

message.channel.send(":white_check_mark: Süren Ayarlandı : " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Süren Bitti Süresi: ${ms(ms(Timer), {long: true})}` + message.author.toString())

}, ms(Timer));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['timer'],
  permLevel: "3"
};

exports.help = {
  name: "zamanlayıcı",
  description: "Kronometre İşi Yapar",
  usage: "zamanlayıcı"
};