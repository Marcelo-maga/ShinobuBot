const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.content.startsWith(`${prefix}kick`)) {
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(`Chutei com toda minha força!, espero que não seja a Laura`);
        }).catch(() => {
             // Failmessage
            message.channel.send(`Sem força para chutar`);
        });
    }
};