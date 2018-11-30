const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
   return;
  }
  if (message.content === prefix + "yardım") {
    message.channel.sendMessage(stripIndents''
    = Komut Listesi =

   [Komut hakkında bilgi için n!yardım <komut adı>]

   ag!ban             :: İstediğiniz kişiyi banlar.
   ag!bilgi           :: Bot ile ilgili bilgi verir.
   ag!davet           :: Botun davet linkini gönderir.
   ag!eval            :: Kod denemek için kullanılır.
   ag!istatistik      :: Botun istatistik gösterir.
   ag!kick            :: İstediğiniz kişiyi sunucudan atar.
   ag!kilit           :: Kanalı istediğiniz kadar süreyle kitler.
   ag!kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.
   ag!load            :: Yeni eklenen komutu yükler.
   ag!ping            :: Botun pingini gösterir.
   ag!reboot          :: Botu yeniden başlatır.
   ag!reload          :: İstediğiniz bir komutu yeniden başlatır.
   ag!sor             :: Soru sormaya yarar.
   ag!sunucubilgi     :: Sunucu hakkında bilgi verir.
   ag!sustur          :: İstediğiniz kişiyi  susturur.
   ag!temizle         :: Belirlenen miktar mesajı siler.
   ag!unban           :: İstediğiniz kişinin banını kaldırır.
   ag!unload          :: İstediğiniz bir komutu devre dışı bırakır.
   ag!uyar            :: İstediğiniz kişiyi uyarır.
   ag!yardım          :: Tüm komutları gösterir.
   ag!yaz             :: İstediğiniz şeyi bota yazdırır.

  }
  if (msg.content.toLowerCase() === 'bb') {
    msg.reply('BayBay Kendine İyi Bak');
  }
  if (msg.content.toLowerCase() === 'hb') {
      msg.reply('İyimisin Knk ?');
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
  }
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm selam!');
  }
  if (msg.content.toLowerCase() === prefix + 'yaz') {
    msg.delete();
    msg.channel.sendMessage(msg.content);
  }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 adet mesaj silindi!");
  }
  if (msg.content.toLowerCase() === prefix + 'reboot') {
    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }
});

client.login(ayarlar.token);
