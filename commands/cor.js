const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    {
      name: "Vermelho",
      id: "741449912830525512"
    },
    {
      name: "Azul",
      id: "741450042304495777"
    },
    {
      name: "Roxo",
      id: "741450012092924046"
    },
    {
      name: "Amarelo",
      id: "741450210269724792"
    },
    {
      name: "Verde",
      id: "741449972238778500"
    }
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, escreva o nome da cor após o comando. 
Cores disponiveis: Vermelho, Azul, Roxo, Amarelo, Verde`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};