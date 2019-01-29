const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(bot, message, args) => {
if(!args[0]) return message.reply('Lütfen dönüştürmek için bir şeyler yazın.');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ascii'],
  permLevel: 1
};

exports.help = {
  name: 'ascii',
  description: 'Yazıyı Dönüştürür',
  usage: 'ascii'
};
