exports.run = (client, message, args)  => {
var embed2 = new Discord.RichEmbed()
.setAuthor('Status | Kikbot', client.user.avatarURL)
.setDescription('_Este comando fala para o autor meus status atuais(ou não)_')
.addField('<:memory:437019126175891466> RAM', (` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`))
.setColor('RED')
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL)
      message.channel.send({embed: embed2});


};
