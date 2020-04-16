const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	 var carros = message.content.split(',');
	 var i = 0;
	 while (i < carros.length) {
    		if (carros[i].trim() === 'f620') {
    			message.channel.send('f620:');
				message.channel.send('https://wiki.rage.mp/images/thumb/2/21/F620.png/800px-F620.png');
	    	}
    		if(carros[i].trim() ==='Exemplar'){
	 			message.channel.send('Exemplar:');
				message.channel.send('');
	 		}
	 		//----------------------------------COMPACTS---------------------------------------------------------
	 		if(carros[i].trim() ==='Blista'){
	 			message.channel.send('Blista:');
				message.channel.send('https://wiki.rage.mp/images/thumb/5/58/Blista.png/800px-Blista.png');
	 		}
	 	
	 		if(carros[i].trim() ==='Brioso'){
	 			message.channel.send('Brioso:');
				message.channel.send('https://wiki.rage.mp/images/thumb/6/6f/Brioso.png/800px-Brioso.png');
	 		}
	 		if(carros[i].trim() ==='Dilettante'){
	 			message.channel.send('Dilettante:');
				message.channel.send('https://wiki.rage.mp/images/thumb/b/b9/Dilettante.png/800px-Dilettante.png');
	 		}
	 		if(carros[i].trim() ==='Issi2'){
	 			message.channel.send('Issi2:');
				message.channel.send('https://wiki.rage.mp/images/thumb/0/0b/Issi2.png/800px-Issi2.png');
	 		}
	 		if(carros[i].trim() ==='Panto'){
	 			message.channel.send('Panto:');
				message.channel.send('https://wiki.rage.mp/images/thumb/e/e5/Panto.png/800px-Panto.png');
	 		}
	 		if(carros[i].trim() ==='Prairie'){
	 			message.channel.send('Prairie:');
				message.channel.send('https://wiki.rage.mp/images/thumb/3/3d/Prairie.png/800px-Prairie.png');
	 		}
	 		if(carros[i].trim() ==='Rhapsody'){
	 			message.channel.send('Rhapsody:');
				message.channel.send('https://wiki.rage.mp/images/thumb/e/e2/Rhapsody.png/800px-Rhapsody.png');
	 		}

	i++;	
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
