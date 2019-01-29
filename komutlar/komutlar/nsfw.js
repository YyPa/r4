const Discord = require('discord.js') 
exports.run = (client, msg, args) => {
  if(msg.channel.nsfw || msg.channel.type ==='dm'){
    let embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setAuthor('+🔞 Olumsuz Örnek')
    .setImage(("http://media.oboobs.ru/boobs_preview/0"+ Math.floor(Math.random() * (8317 - 1011) + 1011)+".jpg"))
    msg.channel.send(embed)

}
  else{
        msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('⚠️Bu kanal `nsfw` kanalı değil.Eğer böyle bi yazı kanalı yoksa oluşturabilirsin!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boobs'],
   permLevel: 0
 };

 exports.help = {
   name: 'memeisterim',
   description: 'NSFW bir resim gösterir.',
   usage: 'memeisterim'
 };