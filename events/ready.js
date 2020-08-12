const Discord = require('discord.js');
const { prefix } = require('../config.json');
module.exports = async (client, message, args) => {
        console.log(`Estou Pronto!`);
        console.log(`Conectado como ${client.user.tag}!`);

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
            .setStatus("online");
    };
