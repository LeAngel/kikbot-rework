exports.run = (client, message, args)  => {
    
	const Discord = require("discord.js");
	  if (message.mentions.users.first()) {
    user1 = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().displayAvatarURL;
  } else {
    if (message.mentions.users.first()) {
    user = message.author.username
    userfoto = message.author.avatarURL;
    
  } else {
user = message.guild.members.get(args.join(' ').username);
userfoto = message.guild.members.get(args.join(' ').displayAvatarURL);
  }

        const embed = new Discord.RichEmbed()
             .setColor('AQUA')
             .setTitle(`:frame_photo: ${user}`)
             .setDescription(`**Clique [aqui](${userfoto}) para abrir o link do seu avatar, ou o link de download**`)
             .setImage(userfoto);
  
        message.channel.send({embed: embed})
}
}
