exports.run = (client, message, args) => {

if(message.author.id !== "395005096527790083") return;
try {

	const code = args.join(" ");
	let evaled = eval(code);
	function clean(text) {
		if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
				return text;
	}
	if (typeof evaled !== "string")
		evaled = require("util").inspect(evaled);
		const Discord = require('discord.js')
var emb = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL)
.addField('Input', '```'+args.join(" ")+'```')
.setColor('GREEN')
.addField('Output', '```'+clean(evaled), {code:"xl"}+'```')
.setTimestamp()
.setFooter(message.author.tag, message.author.displayAvatarURL)
	message.channel.send(emb)
} catch (err) {
	const Discord2 = require('discord.js')
	var embed = new Discord2.RichEmbed()
	.setAuthor(message.author.username, message.author.displayAvatarURL)
	.addField('Erro', '```'+clean(err)+'```')
	.setColor('RED')
	.setFooter('Desculpe, mas você errou em alguma coisa ai viu!')
	message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
}
