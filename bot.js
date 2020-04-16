const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	 var carros = message.content.split(',');
	 var i = 0;
	 while (i < carros.length) {
    		if (carros[i] === 'f620') {
    			message.channel.send('f620:');
				message.channel.send('https://wiki.rage.mp/images/thumb/2/21/F620.png/800px-F620.png');
	    	}
    		if(carros[i]==='Exemplar'){
	 			message.channel.send('Exemplar:');
				message.channel.send('https://wiki.rage.mp/images/thumb/a/a4/Exemplar.png/800px-Exemplar.png');
	 		}
	 	}
	 
	
    if (message.content === '!radio') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Radio do dia: '+num);
	    	
  	}
	if (message.content === '!vazo') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
		message.channel.send(' @everyone Vazo ip!!! nova rádio: '+num);
	    	
  	}
	if (message.content === '!acao') {
    		var num = Math.floor(Math.random() * 999);
	  	message.channel.send(' Radio temporaria para ação: '+num);
	    	
  	}
	 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
