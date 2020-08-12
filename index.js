require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Discord.Collection();

//comandos
client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(prefix)) return;
	if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

	const args = message.content
		.trim().slice(prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

//eventos
fs.readdir('./events/', (err, files) => {
	files.forEach(file => {
		const eventHandler = require(`./events/${file}`)
		const eventName = file.split('.')[0]
		client.on(eventName, arg => eventHandler(client, arg))
	})
});

//novos membros merecem amor
client.on("guildMemberAdd", async (member) => { 
	let guild = await client.guilds.cache.get("430154076198535168");
	let channel = await client.channels.cache.get("617155794827477003");
	if (guild != member.guild) {
	  return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
	 } else {
		let embed = await new Discord.MessageEmbed()
		.setColor("#7c2ae8")
		.setTitle(`Boas-vindas, ${member.user.tag}`)
		.setDescription(`Peça ajuda em ${prefix}help`)
		.setImage("https://imgur.com/KiOx0Za.gif")
		.setTimestamp();
		channel.send(embed);
	}
  });

//status do bot
client.on("ready", () => {
	let activities = [
		`o Araragi morrer`,
		`os donuts fritarem`,
		`os peitos da Hanekawa balançarem`,
		`Peça ajuda em ${prefix}help`,
		`Meu programador é vagabundo!`,
		`Mande um beijo em ${prefix}kiss`
	],
		i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ %
		activities.length]}`, {
		type: "WATCHING"
	}), 1000 * 60);
	client.user
		.setStatus("online")
});

client.login(process.env.CLIENT_TOKEN)