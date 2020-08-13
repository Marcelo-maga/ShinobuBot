const Discord = require('discord.js');
const { prefix } = require('../config.json');

exports.run = async (client, message, args) => {
    console.log("Alguem pediu ajuda!")

    let helpEmbed = await new Discord.MessageEmbed()
      .setTitle("Sua ajuda chegou!")
      .setDescription(`${message.author}, fique tranquilo!`)
      .setColor("#FFFF00")
      .addFields(
        {name:`${prefix}avatar`, value:`Envia seu lindo avatar no chat :child:`},
        {name:`${prefix}c`, value:`Apaga suas mensagens indevidas :roll_of_paper:`},
        {name:`${prefix}coinflip`, value:`Joga Cara ou Coroa :candy:`},
        {name:`${prefix}cor`, value:`Muda a cor do seu nome :yellow_circle:`},
        {name:`${prefix}kiss`, value:`Manda um beijinho :heart:`},
        {name:`${prefix}repo`, value:`Envia meu repositorio no GitHub :keyboard:`},
        {name:`${prefix}say`, value:`Falo oque você quiser :joy:`},
        {name:`${prefix}kick`, value:`Vamos chutar todos eles!`},
        {name: `${prefix}ban`, value:`Banimento rápido e fácil`},
        {name:`${prefix}fatos`, value:`Cuspo fatos na sua cara`}
      )
      helpEmbed.setTimestamp();

    await message.channel.send(helpEmbed);
}