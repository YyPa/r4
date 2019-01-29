const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const queue = new Map();  
let xp = require("./xp.json");
const moment = require('moment');
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

client.on('guildMemberAdd', member => {
  member.addRole(member.guild.roles.find(r => r.name.startsWith('gelen-giden')));
  const channel = member.guild.channels.find('name', 'sayaç-gelen-giden');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye katıldı Ve Otomatik Rol Verildi;')
 .setDescription(`Sunucuya katıldı Toplam [${member.guild.memberCount} üye]!`)
 .setFooter('Cait Army', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});


client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
 const embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setAuthor(member.user.tag, member.user.avatarURL || member.user.defaultAvatarURL)
 .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)
 .setTitle('Üye ayrıldı;')
 .setDescription(`Sunucudan ayrıldı [${member.guild.memberCount} üye]!`)
 .setFooter('Cait Army', client.user.avatarURL)
 .setTimestamp()
 channel.send(embed);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    if (msg.channel.type === 'dm') {
      const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyari); }
      if (msg.channel.type !== 'dm') {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (msg.author.id !== ayarlar.yapimci) {
            const mesajlariyonet = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .setTimestamp()
          .setAuthor(msg.author.username, msg.author.avatarURL)
          .addField(':warning: Uyarı :warning:', 'Bu komutu kulllanmak için `Mesajları Yönet` iznine sahip olmalısın.')
          return msg.author.sendEmbed(mesajlariyonet);
      }}
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100); //5000 mesaj gg
      const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', msg.author.username)
    .addField('Sonuç:', `Başarılı`)
	.addField('Silinen Mesaj Sayısı:', '5000')
    return msg.channel.sendEmbed(sohbetsilindi);
      console.log("Sohbet " + msg.member + " tarafından silindi!");
}}});

var request = require('request');

request('https://api.eggsybot.xyz/espri', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        console.log(info.soz); // ve konsola çıktıyı versin.
    }
});

client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("Gnarge", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)

});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])


   message.guild.createChannel('Talepler', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
        
 message.guild.createChannel('「📃」kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
        message.guild.createChannel('yetki-başvurusu', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
	  message.guild.createChannel(`canlı-destek`)
	 .then(channel =>
	 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「👥」pre-arama-odası`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「📷」görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`「💬」sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🎮》LOL`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》ZULA`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》COUNTER STRİKE`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》PUBG`, 'voice')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》FORTNİTE`, 'voice')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》MİNECRAFT`, 'voice')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ROBLOX`, 'voice')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》WOLFTEAM`, 'voice')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



      message.guild.createRole({
        name: 'Kurucu',
        color: 'RED',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: 'Yönetici',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: 'V.I.P',
        color: '00ffff',
      })

      message.guild.createRole({
        name: 'Üye',
        color: 'WHITE',
      })
	  
	  message.guild.createRole({
        name: 'Destek',
        color: '00999ff',
      })

      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

antispam(client, {
  uyarmaSınırı: 4, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 7, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 8,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 12, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş" // Spam Atan Kullanıcılar Verilecek Röl
});

const girismesaj = [
  '**Cait Army sunucunuza eklendi!**',
  '**Cait Army** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Botumuzun özelliklerini öğrenmek için !yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  'birine ban atın ya da bir banlı kişinin banını kaldırın.',
  '',
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
})

client.on('guildCreate', guild => {
    let channel = client.channels.get("462353510801997845")
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`GIRIS YAPTIM`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });

// Sunucuya birisi girdiği zaman mesajı yolluyalım


client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})

// Sunucuya birisi girdiği zaman mesajı yolluyalım


client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('Sayaç Sistemi')
    .setDescription(`:outbox_tray: Güle Güle :outbox_tray: \n╔▬▬▬▬▬▬▬▬Sayaç▬▬▬▬▬▬▬▬▬\n║►             ${member.user.tag}\n║► Kullanıcı Ayrıldı \n║► **${sayac[member.guild.id].sayi}** Kişi Olmamıza ➡️ **${sayac[member.guild.id].sayi - member.guild.memberCount}** ⬅️ Kişi Kaldı\n║► Senin Ayrılmanla Beraber **${member.guild.memberCount}**  Kişiyiz! :outbox_tray:\n╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
 .setColor("RED")
    .setFooter("Bot", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(embed);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

//Kullanıcı sunucudan ayrıldığında ayarlanan kanala mesaj gönderelim.
client.on("guildMemberAdd", async (member) => {
      let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
      let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
      let autorole =  JSON.parse(fs.readFileSync("./autorole.json", "utf8"));
      let role = autorole[member.guild.id].otorol

      member.addRole(role)

  let embed = new Discord.RichEmbed()
    .setTitle('Sayaç Sistemi')
    .setDescription(`:inbox_tray: Hoş Geldin :inbox_tray: \n╔▬▬▬▬▬▬▬▬Sayaç▬▬▬▬▬▬▬▬▬\n║►             ${member.user.tag}\n║► Kullanıcı Katıldı \n║► **${sayac[member.guild.id].sayi}** Kişi Olmamıza ➡️ **${sayac[member.guild.id].sayi - member.guild.memberCount}** ⬅️ Kişi Kaldı\n║► Senin Katılmanla Beraber **${member.guild.memberCount}**  Kişiyiz! :inbox_tray:\n╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
    .setColor("GREEN")
    .setFooter("Bot", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let welcomechannel = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    welcomechannel.send(embed);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
});

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
        message.channel.send('' + info.soz); // ve konsola çıktıyı versin.
    }
});    
}
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "söz") {
    
    var request = require('request');
    request('https://simsekapi.glitch.me/soz', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send('' + info.soz); // ve konsola çıktıyı versin.
    }
});    
}
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "atatürk") {
    
    var request = require('request');
    request('https://simsekapi.glitch.me/ataturk', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send('' + info.ataturk); // ve konsola çıktıyı versin.
    }
});    
}
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    if (command === "vur") {
    
    var request = require('request');
    request('https://simsekapi.glitch.me/vur', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        message.channel.send('' + info.vur); // ve konsola çıktıyı versin.
    }
});    
}
});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "vaporwave") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ[/]^_`ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ{|}~';
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send(':warning: | Şekilli Yazdırmanı İstediğin ``Yazıyı/Metini`` Yazmadın.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .join('')
        )
    }
});

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

  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('herkese günaydın')) msg.reply('**GÜNAYDIN Güzel Kardeşim Bak Ne Güzel Yaşıyorsun Şükür Et ** :)');
  if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply('**SAHİDEN İYİ Mİ GECELER ?**');
  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('**EYV. İYİ AKŞAMLAR**');
  if (msg.content.toLowerCase().includes('selamın aleyküm')) msg.reply('**ALEYKÜM SELAM HOŞGELDİN YİĞİDO**');
  if (msg.content.toLowerCase().includes('güle güle')) msg.reply('**GÜLE GÜLE CİĞERİM**');
  if (msg.content.toLowerCase().includes('canım sıkkın')) msg.reply('** :smoking: Hayırdır Be Moruk Kim Sıktı Canını Biz Burdayız Anlat**');
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
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

  if (msg.author.bot) return;
  if (msg.content.toLowerCase().includes('amk')) msg.reply('**Küfür Etme :rage:** :)');
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Sa') {
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

  if (msg.author.bot) return;
})


client.on('message', msg => {
  const reason = msg.content.split(" ").slice(1).join(" ");
  if (msg.channel.name== 'canlı-destek') { 
    const hatay = new Discord.RichEmbed()
    .addField(" Hata ", `Bu Sunucuda \`Canlı-Destek\` Adında Bir Rol Yok!`)
    .setColor("RANDOM")
    
    if (!msg.guild.roles.exists("name", "Destek")) return msg.author.send(hatay) + msg.guild.owner.send(`${msg.guild.name} Adlı Sunucunda, \`Destek\` Adlı Bir Rol Olmadığı İçin, Hiçkimse Destek Talebi Açamıyor!`);
    if(msg.guild.channels.find('name', 'Talepler')) {
      msg.guild.createChannel(`destek-${msg.author.id}`, "text").then(c => {
      const category = msg.guild.channels.find('name', 'Talepler')
      c.setParent(category.id)
      let role = msg.guild.roles.find("name", "Destek");
      let role2 = msg.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });

      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`${client.user.username} | Destek Sistemi`)
      .addField(`Merhaba ${msg.author.username}!`, `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}d-kapat\` yazabilirsin.`)
      .addField(`» Talep Konusu/Sebebi:`, `${msg.content}`, true)
      .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
      .setFooter(`${client.user.username} | Destek Sistemi`)
      .setTimestamp()
      c.send({ embed: embed });
      c.send(`<@${msg.author.id}> Adlı kullanıcı "\`${msg.content}\`" sebebi ile destek talebi açtı! Lütfen Destek Ekibini bekle, @here`)
      msg.delete()
      }).catch(console.error);
    }
  }
});
  
client.on("message", message => {
if (message.content.toLowerCase().startsWith(prefix + `d-kapat`)) {
    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut sadece Destek Talebi kanallarında kullanılabilir!`);

    var deneme = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Destek Talebi Kapatma İşlemi`)
    .setDescription(`Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`)
    .setFooter(`${client.user.username} | Destek Sistemi`)
    message.channel.send(deneme)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Destek Talebi kapatma isteğin zaman aşımına uğradı!').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
});

const snekfetch = require('snekfetch');
let points = JSON.parse(fs.readFileSync('./xp.json', 'utf8'));

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}



client.on("message", async message => {
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;

  var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  if (!points[user.id]) points[user.id] = {
    points: 0,
    level: 0,
  };

  let userData = points[user.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
        var user = message.mentions.users.first() || message.author;
message.channel.send(`🆙 **| ${user.username} Tebrikler! Level atladın**`)
    }

fs.writeFile('./xp.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

  if (message.content.toLowerCase() === prefix + 'level' || message.content.toLowerCase() === prefix + 'profil') {
const level = new Discord.RichEmbed().setTitle(`${user.username}`).setDescription(`**Seviye:** ${userData.level}\n**EXP:** ${userData.points}`).setColor("RANDOM").setFooter(``).setThumbnail(user.avatarURL)
message.channel.send(`📝 **| ${user.username} Adlı Kullanıcının Profili Burada!**`)
message.channel.send(level)
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase () === "sa") {
        msg.react("500733858858139668")
  }
  if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm selam, hoş geldin :heart: ');
  }
  if (msg.content.toLowerCase() === 'hb') {
        msg.reply('İyimisin ? **(iyi sen Yazarak Konuşmayı Devam Ettirebilirsiniz)** ');
  }
  if (msg.content.toLowerCase() === 'iyi sen') {
        msg.reply('İyi bende neyse sana k.g ');
  }
  if (msg.content.toLowerCase() === 'sanada') {
        msg.reply('Önemli Değil :wink: ');
  }
  if (msg.content.toLowerCase() === 'bb') {
      msg.reply('BayBay Kendine İyi Bak');
  }
  if (msg.content.toLowerCase() === 'sende') {
      msg.reply('Eyvallah :wink: ');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
