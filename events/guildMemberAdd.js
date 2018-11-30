module.exports = member => {
  const channel = member.guild.channels.find('name', 'klimalı-sohbet');
  if (!channel) return;
  channel.send(`${member} Sunucuya Giriş Yaptı İyi Eglenceler. :wink:`)
};
