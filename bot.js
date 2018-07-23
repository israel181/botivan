const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
  console.log('estoy listo'');
});
  
client.on('message', message => {
    if (message.content == 'iivan') {
        message.reply('callate ya pesao');
    }
    
});
client.login(process.env.BOT_TOKEN);
