const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	 var carros = message.content.split(',');
	 var i = 0;
	 while (i < carros.length) {
    		
    		//----------------------------------COMPACTS---------------------------------------------------------
	 		if(carros[i].trim() ==='Blista'){
	 			message.channel.send('Blista: https://wiki.rage.mp/images/thumb/5/58/Blista.png/800px-Blista.png');
			}
	 	
	 		if(carros[i].trim() ==='Brioso'){
	 			message.channel.send('Brioso: https://wiki.rage.mp/images/thumb/6/6f/Brioso.png/800px-Brioso.png');
			}
	 		if(carros[i].trim() ==='Dilettante'){
	 			message.channel.send('Dilettante: https://wiki.rage.mp/images/thumb/b/b9/Dilettante.png/800px-Dilettante.png');
			}
	 		if(carros[i].trim() ==='Issi2'){
	 			message.channel.send('Issi2: https://wiki.rage.mp/images/thumb/0/0b/Issi2.png/800px-Issi2.png');
			}
	 		if(carros[i].trim() ==='Panto'){
	 			message.channel.send('Panto: https://wiki.rage.mp/images/thumb/e/e5/Panto.png/800px-Panto.png');
			}
	 		if(carros[i].trim() ==='Prairie'){
	 			message.channel.send('Prairie: https://wiki.rage.mp/images/thumb/3/3d/Prairie.png/800px-Prairie.png');
			}
	 		if(carros[i].trim() ==='Rhapsody'){
	 			message.channel.send('Rhapsody: https://wiki.rage.mp/images/thumb/e/e2/Rhapsody.png/800px-Rhapsody.png');
			}
	 		//------------------------------------Coupes-------------------------------------------------------------
	 		if(carros[i].trim() ==='CogCabrio'){
	 			message.channel.send('CogCabrio: https://wiki.rage.mp/images/thumb/1/1b/CogCabrio.png/800px-CogCabrio.png');
			}
	 		if(carros[i].trim() ==='Exemplar'){
	 			message.channel.send('Exemplar: https://wiki.rage.mp/images/thumb/a/a4/Exemplar.png/800px-Exemplar.png');
			}
	 		if(carros[i].trim() ==='Exemplar'){
	 			message.channel.send('Exemplar: https://wiki.rage.mp/images/thumb/a/a4/Exemplar.png/800px-Exemplar.png');
			}
	 		if (carros[i].trim() === 'F620') {
    			message.channel.send('F620: https://wiki.rage.mp/images/thumb/2/21/F620.png/800px-F620.png');
			}
	    	if (carros[i].trim() === 'Felon') {
    			message.channel.send('Felon: https://wiki.rage.mp/images/thumb/0/04/Felon.png/800px-Felon.png');
			}
	    	if (carros[i].trim() === 'Felon2') {
    			message.channel.send('Felon2: https://wiki.rage.mp/images/thumb/6/6e/Felon2.png/800px-Felon2.png');
			}
			if (carros[i].trim() === 'Jackal') {
    			message.channel.send('Jackal: https://wiki.rage.mp/images/thumb/7/70/Jackal.png/800px-Jackal.png');
			}
			if (carros[i].trim() === 'Oracle2') {
    			message.channel.send('Oracle2: https://wiki.rage.mp/images/thumb/4/4d/Oracle2.png/800px-Oracle2.png');
			}
			if (carros[i].trim() === 'Oracle') {
    			message.channel.send('Oracle: https://wiki.rage.mp/images/thumb/1/17/Oracle.png/800px-Oracle.png');
			}
			if (carros[i].trim() === 'Sentinel') {
    			message.channel.send('Sentinel: https://wiki.rage.mp/images/thumb/9/91/Sentinel.png/800px-Sentinel.png');
			}
			if (carros[i].trim() === 'Sentinel2') {
    			message.channel.send('Sentinel2: https://wiki.rage.mp/images/thumb/d/dd/Sentinel2.png/800px-Sentinel2.png');
			}
			if (carros[i].trim() === 'Windsor') {
    			message.channel.send('Windsor: https://wiki.rage.mp/images/thumb/2/2d/Windsor.png/800px-Windsor.png');
			}
			if (carros[i].trim() === 'Windsor2') {
    			message.channel.send('Windsor2: https://wiki.rage.mp/images/thumb/5/57/Windsor2.png/800px-Windsor2.png');
			}
			if (carros[i].trim() === 'Zion') {
    			message.channel.send('Zion: https://wiki.rage.mp/images/thumb/5/51/Zion.png/800px-Zion.png');
			}
			if (carros[i].trim() === 'Zion2') {
    			message.channel.send('Zion2: https://wiki.rage.mp/images/thumb/f/f2/Zion2.png/800px-Zion2.png');
			}
			if (carros[i].trim() === 'Zion2') {
    			message.channel.send('Zion2: https://wiki.rage.mp/images/thumb/f/f2/Zion2.png/800px-Zion2.png');
			}
			//---------------------------------------------Motorcycles------------------------------------------------------
			if (carros[i].trim() === 'Akuma') {
    			message.channel.send('Akuma: https://wiki.rage.mp/images/thumb/1/16/Akuma.png/800px-Akuma.png');
			}
	    	if (carros[i].trim() === 'Avarus') {
    			message.channel.send('Avarus: https://wiki.rage.mp/images/thumb/1/13/Avarus.png/800px-Avarus.png');
			}
			if (carros[i].trim() === 'Bagger') {
    			message.channel.send('Bagger: https://wiki.rage.mp/images/thumb/6/64/Bagger.png/800px-Bagger.png');
			}
			if (carros[i].trim() === 'Bati') {
    			message.channel.send('Bati: https://wiki.rage.mp/images/thumb/c/ce/Bati.png/800px-Bati.png');
			}
			if (carros[i].trim() === 'Bati2') {
    			message.channel.send('Bati2: https://wiki.rage.mp/images/thumb/6/60/Bati2.png/800px-Bati2.png');
			}
			if (carros[i].trim() === 'BF400') {
    			message.channel.send('BF400: https://wiki.rage.mp/images/thumb/3/3a/BF400.png/800px-BF400.png');
			}
			if (carros[i].trim() === 'CarbonRS') {
    			message.channel.send('CarbonRS: https://wiki.rage.mp/images/thumb/d/d3/CarbonRS.png/800px-CarbonRS.png');
			}
			if (carros[i].trim() === 'Chimera') {
    			message.channel.send('Chimera: https://wiki.rage.mp/images/thumb/3/36/Chimera.png/800px-Chimera.png');
			}
			if (carros[i].trim() === 'Cliffhanger') {
    			message.channel.send('Cliffhanger: https://wiki.rage.mp/images/thumb/1/12/Cliffhanger.png/800px-Cliffhanger.png');
			}
			if (carros[i].trim() === 'Daemon') {
    			message.channel.send('Daemon: https://wiki.rage.mp/images/thumb/2/27/Daemon.png/800px-Daemon.png');
			}
			if (carros[i].trim() === 'Daemon2') {
    			message.channel.send('Daemon2: https://wiki.rage.mp/images/thumb/8/86/Daemon2.png/800px-Daemon2.png');
			}
			if (carros[i].trim() === 'Defiler') {
    			message.channel.send('Defiler: https://wiki.rage.mp/images/thumb/4/41/Defiler.png/800px-Defiler.png');
			}
			if (carros[i].trim() === 'Deathbike') {
    			message.channel.send('Deathbike: https://wiki.rage.mp/images/thumb/e/eb/Deathbike.png/800px-Deathbike.png');
			}
			if (carros[i].trim() === 'Diablous') {
    			message.channel.send('Diablous: https://wiki.rage.mp/images/thumb/4/48/Diablous.png/800px-Diablous.png');
			}
			if (carros[i].trim() === 'Diablous2') {
    			message.channel.send('Diablous2: https://wiki.rage.mp/images/thumb/3/3e/Diablous2.png/800px-Diablous2.png');
			}
			if (carros[i].trim() === 'Double') {
    			message.channel.send('Double: https://wiki.rage.mp/images/thumb/0/01/Double.png/800px-Double.png');
			}
			if (carros[i].trim() === 'Enduro') {
    			message.channel.send('Enduro: https://wiki.rage.mp/images/thumb/f/f3/Enduro.png/800px-Enduro.png');
			}
			if (carros[i].trim() === 'Esskey') {
    			message.channel.send('Esskey: https://wiki.rage.mp/images/thumb/2/24/Esskey.png/800px-Esskey.png');
			}
			if (carros[i].trim() === 'Faggio') {
    			message.channel.send('Faggio: https://wiki.rage.mp/images/thumb/4/4d/Faggio.png/800px-Faggio.png');
			}
			if (carros[i].trim() === 'Faggio2') {
    			message.channel.send('Faggio2: https://wiki.rage.mp/images/thumb/2/25/Faggio2.png/800px-Faggio2.png');
			}
			if (carros[i].trim() === 'Faggio3') {
    			message.channel.send('Faggio3: https://wiki.rage.mp/images/thumb/a/a6/Faggio3.png/800px-Faggio3.png');
			}
			if (carros[i].trim() === 'Fcr') {
    			message.channel.send('Fcr: https://wiki.rage.mp/images/thumb/4/46/Fcr.png/800px-Fcr.png');
			}
			if (carros[i].trim() === 'Fcr2') {
    			message.channel.send('Fcr2: https://wiki.rage.mp/images/thumb/d/d5/Fcr2.png/800px-Fcr2.png');
			}
			if (carros[i].trim() === 'Gargoyle') {
    			message.channel.send('Gargoyle: https://wiki.rage.mp/images/thumb/4/44/Gargoyle.png/800px-Gargoyle.png');
			}
			if (carros[i].trim() === 'Hakuchou') {
    			message.channel.send('Hakuchou: https://wiki.rage.mp/images/thumb/2/23/Hakuchou.png/800px-Hakuchou.png');
			}
			if (carros[i].trim() === 'Hakuchou2') {
    			message.channel.send('Hakuchou2: https://wiki.rage.mp/images/thumb/8/87/Hakuchou2.png/800px-Hakuchou2.png');
			}
			if (carros[i].trim() === 'Hexer') {
    			message.channel.send('Hexer: https://wiki.rage.mp/images/thumb/5/56/Hexer.png/800px-Hexer.png');
			}
			if (carros[i].trim() === 'Innovation') {
    			message.channel.send('Innovation: https://wiki.rage.mp/images/thumb/4/42/Innovation.png/800px-Innovation.png');
			}
			if (carros[i].trim() === 'Lectro') {
    			message.channel.send('Lectro: https://wiki.rage.mp/images/thumb/0/00/Lectro.png/800px-Lectro.png');
			}
			if (carros[i].trim() === 'Manchez') {
    			message.channel.send('Manchez: https://wiki.rage.mp/images/thumb/3/3c/Manchez.png/800px-Manchez.png');
			}
			if (carros[i].trim() === 'Nemesis') {
    			message.channel.send('Nemesis: https://wiki.rage.mp/images/thumb/e/e3/Nemesis.png/800px-Nemesis.png');
			}
			if (carros[i].trim() === 'Nightblade') {
    			message.channel.send('Nightblade: https://wiki.rage.mp/images/thumb/c/c1/Nightblade.png/800px-Nightblade.png');
			}
			if (carros[i].trim() === 'Pcj') {
    			message.channel.send('Pcj: https://wiki.rage.mp/images/thumb/9/99/Pcj.png/800px-Pcj.png');
			}
			if (carros[i].trim() === 'Ruffian') {
    			message.channel.send('Ruffian: https://wiki.rage.mp/images/thumb/f/f6/Ruffian.png/800px-Ruffian.png');
			}
			if (carros[i].trim() === 'Sanchez') {
    			message.channel.send('Sanchez: https://wiki.rage.mp/images/5/52/Sanchez.png');
			}
			if (carros[i].trim() === 'Sanchez2') {
    			message.channel.send('Sanchez2: https://wiki.rage.mp/images/thumb/6/6d/Sanchez2.png/800px-Sanchez2.png');
			}
			if (carros[i].trim() === 'Sanctus') {
    			message.channel.send('Sanctus: https://wiki.rage.mp/images/thumb/e/e2/Sanctus.png/800px-Sanctus.png');
			}
			if (carros[i].trim() === 'Thrust') {
    			message.channel.send('Thrust: https://wiki.rage.mp/images/thumb/9/90/Thrust.png/800px-Thrust.png');
			}
			if (carros[i].trim() === 'Vader') {
    			message.channel.send('Vader: https://wiki.rage.mp/images/thumb/d/dc/Vader.png/800px-Vader.png');
			}
			if (carros[i].trim() === 'Vindicator') {
    			message.channel.send('Vindicator: https://wiki.rage.mp/images/thumb/b/bb/Vindicator.png/800px-Vindicator.png');
			}
			if (carros[i].trim() === 'Vortex') {
    			message.channel.send('Vortex: https://wiki.rage.mp/images/thumb/5/52/Vortex.png/800px-Vortex.png');
			}
			if (carros[i].trim() === 'Wolfsbane') {
    			message.channel.send('Wolfsbane: https://wiki.rage.mp/images/thumb/c/c6/Wolfsbane.png/800px-Wolfsbane.png');
			}
			if (carros[i].trim() === 'Zombiea') {
    			message.channel.send('Zombiea: https://wiki.rage.mp/images/thumb/7/7f/Zombiea.png/800px-Zombiea.png');
			}
			if (carros[i].trim() === 'Zombieb') {
    			message.channel.send('Zombieb: https://wiki.rage.mp/images/thumb/2/2c/Zombieb.png/800px-Zombieb.png');
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
