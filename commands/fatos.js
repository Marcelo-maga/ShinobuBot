const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    var facts = ["Abelhas sentem sabor com os pezinhos.", 
    "Comer uma noz-moscada pode te fazer ficar doidão.", 
    "A França ainda executava pessoas na guilhotina quando o primeiro Star Wars foi lançado.",
    "Nós não conseguimos respirar e engolir ao mesmo tempo.",
    "A velocidade média com que um pum sai do seu corpo é de 3 metros por segundo",
    "Ronaldinho Gaúcho perdeu o contrato que tinha com a Coca-Cola quando foi visto tomando Pepsi durante uma conferência",
    "Svangerskabsforebyggende middel é uma palavra dinamarquesa usada para dizer “camisinha”",
    "Nos EUA, existe uma liga oficial de Pedra, Papel ou Tesoura",
    "O Serviço Secreto dos EUA já tentou colocar hormônios femininos na comida de Hitler, para que ele se tornasse mais feminino",
    "A CIA lê cerca de 5 milhões de tweets por dia",
    "Saddam Hussein usou a música “I Will Always Love You”, de Whitney Houston, para sua campanha em 2002",
    "Batatas têm mais cromossomos que seres humanos",
    "111.111.111 X 111.111.111 = 12.345.678.987.654.321",
    "Uma pessoa normal conhece ou cruza na rua com cerca de 16 assassinos durante sua vida.",
    "Em 1518, houve uma epidemia que fez 400 pessoas dançarem involuntariamente por dias.",
    "Seu cérebro pode pregar peças em você para fazê-lo ver monstros no espelho. Isso é chamado de Efeito Troxler."
    ];
    var fact = Math.floor(Math.random() * facts.length);
    message.channel.send(facts[fact]);
}