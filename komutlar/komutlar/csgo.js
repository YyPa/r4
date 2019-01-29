const Discord = module.require('discord.js');
var request = require('request');
var cheerio = require('cheerio');
var fortnite = require('fortnite');

function getStatData(location , $){
  
    var selector = $('.stats-stat .value').eq(location).text();
  
    var stat_array = $.parseHTML(selector);
  
    var stat = 0;
  
    if(stat_array == null || stat_array.lengh == 0){
      return -1;
      
    }else{
      stat = stat_array[0].data;
    }
  
    return stat;
  }  

module.exports.run = async (bot, message, args) => {

  var UR_L = "http://csgo.tracker.network/profile/" + args[0];
  
          if(!args[0]){
            return message.channel.send("Please Enter a valid STEAMID64 or custom url");
          }
  
          request(UR_L, function(err, resp, body){
  
              $ = cheerio.load(body);
  
              var KD = getStatData(0, $);
              if(KD == -1){
                message.channel.send("Invalid, make sure your profile is not private and you have entered a valid STEAMID64 or Custom URL!");
                return;
              }

              var WIN = getStatData(1, $);
              var HS = getStatData(4, $);
              var MONEY = getStatData(5, $);
              var SCORE = getStatData(6, $);
              var KILLS = getStatData(7, $);
              var DEATHS = getStatData(8, $);
              var MVP = getStatData(9, $);
              var BS = getStatData(13, $);
              var BD = getStatData(14, $);
              var HR = getStatData(15, $);
  
              var STAT = new Discord.RichEmbed()
  
              .setTitle("__***CSGO Stats***__")
              .setURL(UR_L)
  
              .addField("------------------------------------",
                        "Toplam KD: " + "__**" + KD + "**__" + "\n" +
                        "Ortalama Kazanma: " + "__**%" + WIN + "**__" + "\n" +
                        "Toplam MVPs: " + "__**" + MVP + "**__" + "\n" +
                        "Toplam Skor: " + "__**" + SCORE + "**__" + "\n" +
                        "Toplam Öldürme: " + "__**" + KILLS + "**__" + "\n" +
                        "Toplam Ölüm: " + "__**" + DEATHS + "**__" + "\n" +
                        "Toplam Bomba Kurma: " + "__**" + BS + "**__" + "\n" +
                        "Toplam Bomba Çözme: " + "__**" + BD + "**__" + "\n" +
                        "Toplam Headshot: " + "__**" + HS + "**__" + "\n" +
                        "Toplam Kazandağı Para: " + "__**" + MONEY + "**__" + "\n" +
                        "Toplam Kurtardığı İnsanlar: " + "__**" + HR + "**__" + "\n" +
                        "------------------------------------\n", true)
  
                .setColor("0x#FF0000")
              message.channel.send(STAT);

  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'csgo',
  description: 'Hesap Hakkında Bilgi Verir',
  usage: 'csgo'
};
