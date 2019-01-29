const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildMemberAdd', async member => {
    const fs = require('fs');
    let log1 = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/log.json", "utf8"));
    const logözelkanal = member.guild.channels.get(log1[member.guild.id].logkanal)
    if (!logözelkanal) return;
    const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  logözelkanal.send(embed)
})

client.on('guildMemberRemove', async member => {
    const fs = require('fs');
    let log1 = JSON.parse(fs.readFileSync("././sunucuyaözelayarlar/log.json", "utf8"));
    const logözelkanal = member.guild.channels.get(log1[member.guild.id].logkanal)
    if (logözelkanal) return;
    const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  logözelkanal.send(embed)
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    setTimeout(() => {
	msg.react('🇦');
	},500);
	setTimeout(() => {
	msg.react('🇸');
	},1000);
	setTimeout(() => {
	msg.react('🇹🇷');
	},1500);
  };

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "espri") {
    
    var request = require('request');
    request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send('**Espri**: ' + info.soz); // ve konsola çıktıyı versin.
    }
});    
}
}); 

client.on("message", message => {

    if (message.content === prefix + "bilgi") {
        const embed = new Discord.RichEmbed()

            .addField("Bot Sahibi", `<@480446768945823744>`, true)

            .addField("Version", "0.1.9", true)

            .addField("Toplam Sunucu Sayısı", client.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", client.users.size, true)
            
            .addField("Toplam Kanal Sayısı", client.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x000001)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }

});


client.on("channelCreate", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'mod-log');
	if (!logs) return console.log("#mod-log Kanalı Bulunamadı!");
	const cembed = new Discord.RichEmbed()
		.setTitle("Kanal Oluşturuldu! ⚠")
		.setColor("RANDOM")
		.setDescription(`**${channel.name}** Kanalı Oluşturuldu! ✅`)
		.setTimestamp(new Date());
	logs.send(cembed)
});

client.on("channelDelete", async channel => {
	var logs = channel.guild.channels.find(c => c.name === 'mod-log');
	if (!logs) return console.log("#mod-log Kanalı Bulunamadı!");
	const cembed = new Discord.RichEmbed()
		.setTitle("Kanal Silindi! ⚠")
		.setColor("RANDOM")
		.setDescription(`**${channel.name}** Kanalı Silindi ✖`)
		.setTimestamp(new Date())
	logs.send(cembed)
});

//////////////////////////becerdim

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "özlüsöz") {
    var sans = ["Affetmek geçmişi değiştirmez ama geIeceğin önünü açar","İnsanIar seninIe konuşmayı bıraktığında, arkandan konuşmaya başIarIar","Hayattan korkmayın çocuklar;iyi ve doğru bir şeyler yaptığınız zaman hayat öyle güzel ki","Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.","Küçük şeylere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.","Bize yeni düşmanlar lazım. Eskileri hayranımız oldular.","Asla vazgeçmeyin, kaybedenler yalnızca vazgeçenlerdir.","10 kilitli kapıdan daha güvenlidir babanın evde oluşu.","Sevmek için “yürek” sürdürmek için “emek” gerek.","Bir insanın, bir insana verebileceği en güzel hediye; ona ayırabileceği zamandır."," Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.","Kendini Ne Kadar Büyük Görürsen Gör. Bende Sadece Gözümün Gördüğü Kadarsın. Ötesi yok.","Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin, o nehir asla durmaz.– Grange"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
      .addField(`¡ ¡ ¡ ¡ ¡ `, `${sonuc}`)
      .setColor("RANDOM");
    return message.channel.sendEmbed(embed);
}
});


client.on("guildMemberAdd", async member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
        let username = member.user.username;
        if (channel === undefined || channel === null) return;
        if (channel.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184528148725780/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })
client.on("guildMemberRemove", async member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
        let username = member.user.username;
        if (channel === undefined || channel === null) return;
        if (channel.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/450693709076365323/473184546477572107/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    channel.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })


////////////////////////

client.on('guildCreate', async guild => {
  const girismesaj = [
    'Botum sunucunuza eklendi.',
    'Bu bot **<@480446768945823744>** tarafından geliştirilmektedir.',
    'Destek Sunucumuz : https://discord.gg/dGkcPQR'

  ]
  guild.owner.send(girismesaj)
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
})

client.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`${guild.name} with invite: https://discord.gg/dGkcPQR`)
});

client.on("message", msg => {
	const uyarıembed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription(":x:" + msg.author + " Rexo reklam koruması aktif, reklam yapmayı bırak evlat! :x:")

const dmembed = new Discord.RichEmbed()
	.setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("r7!uyar <kişi> komutu ile onu uyarabilir ya da r7!kick <kişi> veya r7!ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
	.addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
	if(msg.member.hasPermission('BAN_MEMBERS')){
	return;
	} else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(uyarıembed)
	 msg.guild.owner.send(dmembed).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
	  };
    })


//////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
});
