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


client.login(process.env.CLIENT_TOKEN)