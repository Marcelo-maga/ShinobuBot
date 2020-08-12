const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = async (client, member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "preferencial");

    let join = await new Discord.MessageEmbed()
    .setColor("#7c2ae8")
    .setTitle(`Boas-vindas, ${member.user.tag}`)
    .setDescription(`Peça ajuda em ${prefix}help`)
    .setImage("https://imgur.com/KiOx0Za.gif")
    .setTimestamp();
    channel.send(join);

    var role = member.guild.roles.cache.find(role => role.name === 'Clientes');
    member.roles.add(role);
}