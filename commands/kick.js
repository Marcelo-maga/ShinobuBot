const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.content.startsWith(`${prefix}kick`)) {

        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(`Chutei ele com toda minha força!`);
        }).catch(() => {
            if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("Não estou vendo seu cargo!");
            } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                message.reply("Não estou vendo seu cargo!");
            }
        })
    }
};