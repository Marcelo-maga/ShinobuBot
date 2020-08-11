const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/a5/1f/b7/a51fb71fdf6e69b38f523725d8a07f9f.gif',
  'https://1.bp.blogspot.com/-MAGiNwGNJe4/Uv2DcO9d3JI/AAAAAAAAA9s/a3gLQID0K5M/s1600/beijo.gif',
  'https://i.pinimg.com/originals/8b/74/55/8b74554a17fc699c265cce1dc51d31f8.gif',
  'https://uploads.spiritfanfiction.com/fanfics/capitulos/201410/fanfiction-naruto-uma-nova-era-2549197,021020141845.gif',
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('não vai mandar pra ninguem?');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijinhos :heart:')
        .setColor('#000000')
        .setDescription(`${message.author} mandou um beijinho para ${user}`)
        .setImage(rand)
        .setFooter('JBG Approves')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}