const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	
    if (message.content === '!radio') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Radio do dia: '+num);
	    	
  	}
	 if (message.content === 'f620') {
    		
	  	message.channel.send('https://wiki.rage.mp/images/thumb/2/21/F620.png/164px-F620.png ');
	    	
  	}
});



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

