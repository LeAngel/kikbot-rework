exports.run = (client, message, args)  => {
	const Discord = require('discord.js');

	function regiao() {
		var guildVerification = message.guild.region
		if  (guildVerification == "en-us") {
		return ":flag_us: Estados Unidos"
	  } else if (guildVerification == `brazil`) {
		return (":flag_br: Brasil")
			} else if  (guildVerification == "russia") {
		return (":flag_ru: Rússia")
		} else if (guildVerification == "singapore") {
		return (":flag_sg: Singapura")
			} else if (guildVerification == "hongkong") {
		return (":flag_hk: Hong Kong")
	  } else if (guildVerification == undefined) {
		return ("<:blobfacepalm:369904810784325635> l Eu não fiz mais functions, desculpe, volte mais tarde")
	  } else if (guildVerification == "eu-west") {
		return (":flag_eu: Europa Oeste")
	  } else if (guildVerification == "us-east") {
		return (":flag_us: Costa Leste dos Estados Unidos")
	  } else if (guildVerification == "sydney") {
		return (":flag_au: Sydney (Dentro da austrália)")
	  } else if (guildVerification == "us-central") {
		return (":flag_us: Estados Unidos Central")
	  } else if (guildVerification == "us-south") {
		return (":flag_us: Região Sul dos Estados Unidos")
	  } else if (guildVerification == "us-west") {
		return (":flag_us: Região Oeste dos Estados Unidos")
	} else if (guildVerification == "london") {
		return (":flag_gb: Londres ")

		}
		}
		message.react(`🏓`);

	
	message.reply('📡 **l** `'+Math.round(client.ping)+'ms`' + ' **Shard:** **'+client.shard.id+'/2\n`❔` **l** Este comando te fala sobre minha taxa de ida e volta, em milisegundos, isto é. Meu **ping**.');
	 


};
