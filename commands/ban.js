const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.content.startsWith(`${prefix}ban`)) {

        let member = message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(`Espero nunca mais ver ele aqui`);
        }).catch(() => {
            if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("Não estou vendo seu cargo!");
            } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("Não estou vendo seu cargo!");
            }
        })
    }
};