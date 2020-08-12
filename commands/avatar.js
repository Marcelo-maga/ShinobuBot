const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`#FFFF00`) 
    .setTitle(`O lindo avatar do ${user.username}`) 
    .setImage(avatar)
    await message.channel.send(embed); 

};