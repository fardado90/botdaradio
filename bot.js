const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

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
			//----------------------------------------Muscle--------------------------------------------------------------
			if (carros[i].trim() === 'Blade') {
    			message.channel.send('Blade: https://wiki.rage.mp/images/thumb/a/ad/Blade.png/800px-Blade.png');
			}
			if (carros[i].trim() === 'Buccaneer') {
    			message.channel.send('Buccaneer: https://wiki.rage.mp/images/thumb/d/de/Buccaneer.png/800px-Buccaneer.png');
			}
			if (carros[i].trim() === 'Buccaneer2') {
    			message.channel.send('Buccaneer2: https://wiki.rage.mp/images/thumb/1/16/Buccaneer2.png/800px-Buccaneer2.png');
			}
			if (carros[i].trim() === 'Chino') {
    			message.channel.send('Chino: https://wiki.rage.mp/images/thumb/4/4d/Chino.png/800px-Chino.png');
			}
			if (carros[i].trim() === 'Chino2') {
    			message.channel.send('Chino2: https://wiki.rage.mp/images/thumb/6/61/Chino2.png/800px-Chino2.png');
			}
			if (carros[i].trim() === 'Clique') {
    			message.channel.send('Clique: https://wiki.rage.mp/images/thumb/3/3c/Clique.png/800px-Clique.png');
			}
			if (carros[i].trim() === 'Coquette3') {
    			message.channel.send('Coquette3: https://wiki.rage.mp/images/thumb/6/67/Coquette3.png/800px-Coquette3.png');
			}
			if (carros[i].trim() === 'Deviant') {
    			message.channel.send('Deviant: https://wiki.rage.mp/images/thumb/d/d5/Deviant.png/800px-Deviant.png');
			}
			if (carros[i].trim() === 'Dominator') {
    			message.channel.send('Dominator: https://wiki.rage.mp/images/thumb/6/6e/Dominator.png/800px-Dominator.png');
			}
			if (carros[i].trim() === 'Dominator2') {
    			message.channel.send('Dominator2: https://wiki.rage.mp/images/thumb/5/57/Dominator2.png/800px-Dominator2.png');
			}
			if (carros[i].trim() === 'Dominator3') {
    			message.channel.send('Dominator3: https://wiki.rage.mp/images/thumb/b/ba/Dominator3.png/800px-Dominator3.png');
			}
			if (carros[i].trim() === 'Dukes') {
    			message.channel.send('Dukes: https://wiki.rage.mp/images/thumb/6/6e/Dukes.png/800px-Dukes.png');
			}
			if (carros[i].trim() === 'Faction') {
    			message.channel.send('Faction: https://wiki.rage.mp/images/thumb/5/55/Faction.png/800px-Faction.png');
			}
			if (carros[i].trim() === 'Faction2') {
    			message.channel.send('Faction2: https://wiki.rage.mp/images/thumb/4/41/Faction2.png/800px-Faction2.png');
			}
			if (carros[i].trim() === 'Faction3') {
    			message.channel.send('Faction3: https://wiki.rage.mp/images/thumb/a/a8/Faction3.png/800px-Faction3.png');
			}
			if (carros[i].trim() === 'Ellie') {
    			message.channel.send('Ellie: https://wiki.rage.mp/images/thumb/e/ef/Ellie.png/800px-Ellie.png');
			}
			if (carros[i].trim() === 'Gauntlet') {
    			message.channel.send('Gauntlet: https://wiki.rage.mp/images/thumb/7/71/Gauntlet.png/800px-Gauntlet.png');
			}
			if (carros[i].trim() === 'Gauntlet2') {
    			message.channel.send('Gauntlet2: https://wiki.rage.mp/images/thumb/b/b0/Gauntlet2.png/800px-Gauntlet2.png');
			}
			if (carros[i].trim() === 'Hermes') {
    			message.channel.send('Hermes: https://wiki.rage.mp/images/thumb/0/0d/Hermes.png/800px-Hermes.png');
			}
			if (carros[i].trim() === 'Hotknife') {
    			message.channel.send('Hotknife: https://wiki.rage.mp/images/thumb/1/16/Hotknife.png/800px-Hotknife.png');
			}
			if (carros[i].trim() === 'Hustler') {
    			message.channel.send('Hustler: https://wiki.rage.mp/images/3/3f/Hustler.png');
			}
			if (carros[i].trim() === 'Impaler') {
    			message.channel.send('Impaler: https://wiki.rage.mp/images/thumb/3/31/Impaler.png/800px-Impaler.png');
			}
			if (carros[i].trim() === 'Imperator') {
    			message.channel.send('Imperator: https://wiki.rage.mp/images/thumb/b/be/Imperator.png/800px-Imperator.png');
			}
			if (carros[i].trim() === 'Lurcher') {
    			message.channel.send('Lurcher: https://wiki.rage.mp/images/thumb/0/03/Lurcher.png/800px-Lurcher.png');
			}
			if (carros[i].trim() === 'Moonbeam') {
    			message.channel.send('Moonbeam: https://wiki.rage.mp/images/thumb/5/5d/Moonbeam.png/800px-Moonbeam.png');
			}
			if (carros[i].trim() === 'Moonbeam2') {
    			message.channel.send('Moonbeam2: https://wiki.rage.mp/images/thumb/c/c1/Moonbeam2.png/800px-Moonbeam2.png');
			}
			if (carros[i].trim() === 'Nightshade') {
    			message.channel.send('Nightshade: https://wiki.rage.mp/images/thumb/e/ec/Nightshade.png/800px-Nightshade.png');
			}
			if (carros[i].trim() === 'Pheonix') {
    			message.channel.send('Pheonix: https://wiki.rage.mp/images/thumb/5/53/Pheonix.png/800px-Pheonix.png');
			}
			if (carros[i].trim() === 'Picador') {
    			message.channel.send('Picador: https://wiki.rage.mp/images/thumb/1/15/Picador.png/800px-Picador.png');
			}
			if (carros[i].trim() === 'Ratloader2') {
    			message.channel.send('Ratloader2: https://wiki.rage.mp/images/thumb/b/b7/Ratloader2.png/800px-Ratloader2.png');
			}
			if (carros[i].trim() === 'Ratloader') {
    			message.channel.send('Ratloader: https://wiki.rage.mp/images/thumb/7/7a/Ratloader.png/800px-Ratloader.png');
			}
			if (carros[i].trim() === 'Ruiner') {
    			message.channel.send('Ruiner: https://wiki.rage.mp/images/thumb/b/b4/Ruiner.png/800px-Ruiner.png');
			}
			if (carros[i].trim() === 'Sabregt') {
    			message.channel.send('Sabregt: https://wiki.rage.mp/images/thumb/0/04/Sabregt.png/800px-Sabregt.png');
			}
			if (carros[i].trim() === 'Sabregt2') {
    			message.channel.send('Sabregt2: https://wiki.rage.mp/images/thumb/b/ba/Sabregt2.png/800px-Sabregt2.png');
			}
			if (carros[i].trim() === 'SlamVan') {
    			message.channel.send('SlamVan: https://wiki.rage.mp/images/3/39/SlamVan.png');
			}
			if (carros[i].trim() === 'SlamVan2') {
    			message.channel.send('SlamVan2: https://wiki.rage.mp/images/3/3a/SlamVan2.png');
			}
			if (carros[i].trim() === 'SlamVan3') {
    			message.channel.send('SlamVan3: https://wiki.rage.mp/images/thumb/f/fe/Slamvan3.png/800px-Slamvan3.png');
			}
			if (carros[i].trim() === 'Stalion') {
    			message.channel.send('Stalion: https://wiki.rage.mp/images/thumb/c/ce/Stalion.png/800px-Stalion.png');
			}
			if (carros[i].trim() === 'Stalion2') {
    			message.channel.send('Stalion2: https://wiki.rage.mp/images/thumb/4/4a/Stalion2.png/800px-Stalion2.png');
			}
			if (carros[i].trim() === 'Tampa') {
    			message.channel.send('Tampa: https://wiki.rage.mp/images/thumb/3/30/Tampa.png/800px-Tampa.png');
			}
			if (carros[i].trim() === 'Tulip') {
    			message.channel.send('Tulip: https://wiki.rage.mp/images/thumb/c/cf/Tulip.png/800px-Tulip.png');
			}
			if (carros[i].trim() === 'Vamos') {
    			message.channel.send('Vamos: https://wiki.rage.mp/images/thumb/0/07/Vamos.png/800px-Vamos.png');
			}
			if (carros[i].trim() === 'Vigero') {
    			message.channel.send('Vigero: https://wiki.rage.mp/images/thumb/2/22/Vigero.png/800px-Vigero.png');
			}
			if (carros[i].trim() === 'Virgo') {
    			message.channel.send('Virgo: https://wiki.rage.mp/images/thumb/4/41/Virgo.png/800px-Virgo.png');
			}
			if (carros[i].trim() === 'Virgo2') {
    			message.channel.send('Virgo2: https://wiki.rage.mp/images/thumb/8/81/Virgo2.png/800px-Virgo2.png');
			}
			if (carros[i].trim() === 'Virgo3') {
    			message.channel.send('Virgo3: https://wiki.rage.mp/images/thumb/4/4d/Virgo3.png/800px-Virgo3.png');
			}
			if (carros[i].trim() === 'Voodoo') {
    			message.channel.send('Voodoo: https://wiki.rage.mp/images/thumb/1/1e/Voodoo.png/800px-Voodoo.png');
			}
			if (carros[i].trim() === 'Voodoo2') {
    			message.channel.send('Voodoo2: https://wiki.rage.mp/images/thumb/5/5e/Voodoo2.png/800px-Voodoo2.png');
			}
			if (carros[i].trim() === 'Yosemite') {
    			message.channel.send('Yosemite: https://wiki.rage.mp/images/thumb/7/7a/Yosemite.png/800px-Yosemite.png');
			}
			//----------------------------------------------Off-Road--------------------------------------------------------
			if (carros[i].trim() === 'Bfinject') {
    			message.channel.send('Bfinject: https://wiki.rage.mp/images/thumb/3/3d/Bfinject.png/800px-Bfinject.png');
			}
			if (carros[i].trim() === 'Bifta') {
    			message.channel.send('Bifta: https://wiki.rage.mp/images/thumb/b/b7/Bifta.png/800px-Bifta.png');
			}
			if (carros[i].trim() === 'Blazer') {
    			message.channel.send('Blazer: https://wiki.rage.mp/images/thumb/3/3e/Blazer.png/800px-Blazer.png');
			}
			if (carros[i].trim() === 'Blazer4') {
    			message.channel.send('Blazer4: https://wiki.rage.mp/images/thumb/5/5f/Blazer4.png/800px-Blazer4.png');
			}
			if (carros[i].trim() === 'Bodhi2') {
    			message.channel.send('Bodhi2: https://wiki.rage.mp/images/thumb/c/ce/Bodhi2.png/800px-Bodhi2.png');
			}
			if (carros[i].trim() === 'Brawler') {
    			message.channel.send('Brawler: https://wiki.rage.mp/images/thumb/f/fa/Brawler.png/800px-Brawler.png');
			}
			if (carros[i].trim() === 'Brutus') {
    			message.channel.send('Brutus: https://wiki.rage.mp/images/thumb/5/5a/Brutus.png/800px-Brutus.png');
			}
			if (carros[i].trim() === 'Dloader') {
    			message.channel.send('Dloader: https://wiki.rage.mp/images/thumb/1/1a/Dloader.png/800px-Dloader.png');
			}
			if (carros[i].trim() === 'Dubsta3') {
    			message.channel.send('Dubsta3: https://wiki.rage.mp/images/thumb/d/d6/Dubsta3.png/800px-Dubsta3.png');
			}
			if (carros[i].trim() === 'Dune') {
    			message.channel.send('Dune: https://wiki.rage.mp/images/thumb/c/c6/Dune.png/800px-Dune.png');
			}
			if (carros[i].trim() === 'Kalahari') {
    			message.channel.send('Kalahari: https://wiki.rage.mp/images/thumb/5/55/Kalahari.png/800px-Kalahari.png');
			}
			if (carros[i].trim() === 'Kamacho') {
    			message.channel.send('Kamacho: https://wiki.rage.mp/images/thumb/d/d0/Kamacho.png/800px-Kamacho.png');
			}
			if (carros[i].trim() === 'Marshall') {
    			message.channel.send('Marshall: https://wiki.rage.mp/images/thumb/7/71/Marshall.png/800px-Marshall.png');
			}
			if (carros[i].trim() === 'Mesa3') {
    			message.channel.send('Mesa3: https://wiki.rage.mp/images/thumb/c/c6/Mesa3.png/800px-Mesa3.png');
			}
			if (carros[i].trim() === 'Monster') {
    			message.channel.send('Monster: https://wiki.rage.mp/images/thumb/1/13/Monster.png/800px-Monster.png');
			}
			if (carros[i].trim() === 'Rancherxl') {
    			message.channel.send('Rancherxl: https://wiki.rage.mp/images/thumb/e/ef/Rancherxl.png/800px-Rancherxl.png');
			}
			if (carros[i].trim() === 'Rebel') {
    			message.channel.send('Rebel: https://wiki.rage.mp/images/thumb/e/e3/Rebel.png/800px-Rebel.png');
			}
			if (carros[i].trim() === 'Rebel2') {
    			message.channel.send('Rebel2: https://wiki.rage.mp/images/thumb/9/90/Rebel2.png/800px-Rebel2.png');
			}
			if (carros[i].trim() === 'Riata') {
    			message.channel.send('Riata: https://wiki.rage.mp/images/thumb/4/4d/Riata.png/800px-Riata.png');
			}
			if (carros[i].trim() === 'Sandking') {
    			message.channel.send('Sandking: https://wiki.rage.mp/images/thumb/6/64/Sandking.png/800px-Sandking.png');
			}
			if (carros[i].trim() === 'Sandking2') {
    			message.channel.send('Sandking2: https://wiki.rage.mp/images/thumb/d/d1/Sandking2.png/800px-Sandking2.png');
			}
			if (carros[i].trim() === 'Trophytruck') {
    			message.channel.send('Trophytruck: https://wiki.rage.mp/images/thumb/1/18/Trophytruck.png/800px-Trophytruck.png');
			}
			//------------------------------------------------SUVs----------------------------------------------------------------------
			if (carros[i].trim() === 'Baller') {
    			message.channel.send('Baller: https://wiki.rage.mp/images/thumb/7/79/Baller.png/800px-Baller.png');
			}
			if (carros[i].trim() === 'Baller2') {
    			message.channel.send('Baller2: https://wiki.rage.mp/images/thumb/9/98/Baller2.png/800px-Baller2.png');
			}
			if (carros[i].trim() === 'Baller3') {
    			message.channel.send('Baller3: https://wiki.rage.mp/images/thumb/9/9b/Baller3.png/800px-Baller3.png');
			}
			if (carros[i].trim() === 'Baller4') {
    			message.channel.send('Baller4: https://wiki.rage.mp/images/thumb/e/e8/Baller4.png/800px-Baller4.png');
			}
			if (carros[i].trim() === 'Baller5') {
    			message.channel.send('Baller5: https://wiki.rage.mp/images/thumb/3/34/Baller5.png/800px-Baller5.png');
			}
			if (carros[i].trim() === 'Baller6') {
    			message.channel.send('Baller6: https://wiki.rage.mp/images/thumb/8/81/Baller6.png/800px-Baller6.png');
			}
			if (carros[i].trim() === 'Bjxl') {
    			message.channel.send('Bjxl: https://wiki.rage.mp/images/thumb/d/da/Bjxl.png/800px-Bjxl.png');
			}
			if (carros[i].trim() === 'Cavalcade') {
    			message.channel.send('Cavalcade: https://wiki.rage.mp/images/thumb/9/9e/Cavalcade.png/800px-Cavalcade.png');
			}
			if (carros[i].trim() === 'Cavalcade2') {
    			message.channel.send('Cavalcade2: https://wiki.rage.mp/images/thumb/b/bc/Cavalcade2.png/800px-Cavalcade2.png');
			}
			if (carros[i].trim() === 'Contender') {
    			message.channel.send('Contender: https://wiki.rage.mp/images/thumb/2/2e/Contender.png/800px-Contender.png');
			}
			if (carros[i].trim() === 'Dubsta') {
    			message.channel.send('Dubsta: https://wiki.rage.mp/images/thumb/e/ec/Dubsta.png/800px-Dubsta.png');
			}
			if (carros[i].trim() === 'Dubsta2') {
    			message.channel.send('Dubsta2: https://wiki.rage.mp/images/thumb/3/36/Dubsta2.png/800px-Dubsta2.png');
			}
			if (carros[i].trim() === 'Fq2') {
    			message.channel.send('Fq2: https://wiki.rage.mp/images/thumb/a/a4/Fq2.png/800px-Fq2.png');
			}
			if (carros[i].trim() === 'Granger') {
    			message.channel.send('Granger: https://wiki.rage.mp/images/thumb/4/4d/Granger.png/800px-Granger.png');
			}
			if (carros[i].trim() === 'Gresley') {
    			message.channel.send('Gresley: https://wiki.rage.mp/images/thumb/d/d6/Gresley.png/800px-Gresley.png');
			}
			if (carros[i].trim() === 'Habanero') {
    			message.channel.send('Habanero: https://wiki.rage.mp/images/thumb/1/1e/Habanero.png/800px-Habanero.png');
			}
			if (carros[i].trim() === 'Huntley') {
    			message.channel.send('Huntley: https://wiki.rage.mp/images/thumb/1/1c/Huntley.png/800px-Huntley.png');
			}
			if (carros[i].trim() === 'Landstalker') {
    			message.channel.send('Landstalker: https://wiki.rage.mp/images/thumb/7/70/Landstalker.png/800px-Landstalker.png');
			}
			if (carros[i].trim() === 'Mesa') {
    			message.channel.send('Mesa: https://wiki.rage.mp/images/thumb/c/cc/Mesa.png/800px-Mesa.png');
			}
			if (carros[i].trim() === 'Patriot') {
    			message.channel.send('Patriot: https://wiki.rage.mp/images/thumb/1/12/Patriot.png/800px-Patriot.png');
			}
			if (carros[i].trim() === 'Patriot2') {
    			message.channel.send('Patriot2: https://wiki.rage.mp/images/8/83/Patriot2.png');
			}
			if (carros[i].trim() === 'Radius') {
    			message.channel.send('Radius: https://wiki.rage.mp/images/thumb/9/9c/Radi.png/800px-Radi.png');
			}
			if (carros[i].trim() === 'Rocoto') {
    			message.channel.send('Rocoto: https://wiki.rage.mp/images/thumb/2/23/Rocoto.png/800px-Rocoto.png');
			}
			if (carros[i].trim() === 'Seminole') {
    			message.channel.send('Seminole: https://wiki.rage.mp/images/thumb/c/cc/Seminole.png/800px-Seminole.png');
			}
			if (carros[i].trim() === 'Serrano') {
    			message.channel.send('Serrano: https://wiki.rage.mp/images/thumb/a/ac/Serrano.png/800px-Serrano.png');
			}
			if (carros[i].trim() === 'Toros') {
    			message.channel.send('Toros: https://wiki.rage.mp/images/thumb/f/f1/Toros.png/800px-Toros.png');
			}
			if (carros[i].trim() === 'Xls') {
    			message.channel.send('Xls: https://wiki.rage.mp/images/thumb/0/0f/Xls.png/800px-Xls.png');
			}
			if (carros[i].trim() === 'Xls2') {
    			message.channel.send('Xls2: https://wiki.rage.mp/images/thumb/3/35/Xls2.png/800px-Xls2.png');
			}
			//------------------------------------------Sedans----------------------------------------------------
			if (carros[i].trim() === 'Asea') {
    			message.channel.send('Asea: https://wiki.rage.mp/images/thumb/c/ce/Asea.png/800px-Asea.png');
			}
			if (carros[i].trim() === 'Asterope') {
    			message.channel.send('Asterope: https://wiki.rage.mp/images/thumb/0/05/Asterope.png/800px-Asterope.png');
			}
			if (carros[i].trim() === 'Cog55') {
    			message.channel.send('Cog55: https://wiki.rage.mp/images/thumb/d/d5/Cog55.png/800px-Cog55.png');
			}
			if (carros[i].trim() === 'Cog552') {
    			message.channel.send('Cog552: https://wiki.rage.mp/images/thumb/7/79/Cog552.png/800px-Cog552.png');
			}
			if (carros[i].trim() === 'Cognoscenti') {
    			message.channel.send('Cognoscenti: https://wiki.rage.mp/images/thumb/5/51/Cognoscenti.png/800px-Cognoscenti.png');
			}
			if (carros[i].trim() === 'Cognoscenti2') {
    			message.channel.send('Cognoscenti2: https://wiki.rage.mp/images/thumb/2/2e/Cognoscenti2.png/800px-Cognoscenti2.png');
			}
			if (carros[i].trim() === 'Emperor') {
    			message.channel.send('Emperor: https://wiki.rage.mp/images/thumb/c/c5/Emperor.png/800px-Emperor.png');
			}
			if (carros[i].trim() === 'Emperor2') {
    			message.channel.send('Emperor2: https://wiki.rage.mp/images/thumb/1/16/Emperor2.png/800px-Emperor2.png');
			}
			if (carros[i].trim() === 'Fugitive') {
    			message.channel.send('Fugitive: https://wiki.rage.mp/images/thumb/7/73/Fugitive.png/800px-Fugitive.png');
			}
			if (carros[i].trim() === 'Glendale') {
    			message.channel.send('Glendale: https://wiki.rage.mp/images/thumb/b/b2/Glendale.png/800px-Glendale.png');
			}
			if (carros[i].trim() === 'Ingot') {
    			message.channel.send('Ingot: https://wiki.rage.mp/images/thumb/7/74/Ingot.png/800px-Ingot.png');
			}
			if (carros[i].trim() === 'Intruder') {
    			message.channel.send('Intruder: https://wiki.rage.mp/images/thumb/9/92/Intruder.png/800px-Intruder.png');
			}
			if (carros[i].trim() === 'Premier') {
    			message.channel.send('Premier: https://wiki.rage.mp/images/thumb/9/9d/Premier.png/800px-Premier.png');
			}
			if (carros[i].trim() === 'Primo') {
    			message.channel.send('Primo: https://wiki.rage.mp/images/thumb/4/45/Primo.png/800px-Primo.png');
			}
			if (carros[i].trim() === 'Primo2') {
    			message.channel.send('Primo2: https://wiki.rage.mp/images/thumb/3/30/Primo2.png/800px-Primo2.png');
			}
			if (carros[i].trim() === 'Regina') {
    			message.channel.send('Regina: https://wiki.rage.mp/images/thumb/5/5f/Regina.png/800px-Regina.png');
			}
			if (carros[i].trim() === 'Romero') {
    			message.channel.send('Romero: https://wiki.rage.mp/images/thumb/7/73/Romero.png/800px-Romero.png');
			}
			if (carros[i].trim() === 'Stafford') {
    			message.channel.send('Stafford: https://wiki.rage.mp/images/e/e9/Stafford.png');
			}
			if (carros[i].trim() === 'Stanier') {
    			message.channel.send('Stanier: https://wiki.rage.mp/images/thumb/5/57/Stanier.png/800px-Stanier.png');
			}
			if (carros[i].trim() === 'Stratum') {
    			message.channel.send('Stratum: https://wiki.rage.mp/images/thumb/b/ba/Stratum.png/800px-Stratum.png');
			}
			if (carros[i].trim() === 'Stretch') {
    			message.channel.send('Stretch: https://wiki.rage.mp/images/thumb/8/8a/Stretch.png/800px-Stretch.png');
			}
			if (carros[i].trim() === 'Superd') {
    			message.channel.send('Superd: https://wiki.rage.mp/images/thumb/6/6e/Superd.png/800px-Superd.png');
			}
			if (carros[i].trim() === 'Surge') {
    			message.channel.send('Surge: https://wiki.rage.mp/images/thumb/1/1a/Surge.png/800px-Surge.png');
			}
			if (carros[i].trim() === 'Tailgater') {
    			message.channel.send('Tailgater: https://wiki.rage.mp/images/thumb/a/af/Tailgater.png/800px-Tailgater.png');
			}
			if (carros[i].trim() === 'Warrener') {
    			message.channel.send('Warrener: https://wiki.rage.mp/images/thumb/2/22/Warrener.png/800px-Warrener.png');
			}
			if (carros[i].trim() === 'Washington') {
    			message.channel.send('Washington: https://wiki.rage.mp/images/thumb/e/e2/Washington.png/800px-Washington.png');
			}
			//-----------------------------------------------Sports----------------------------------------------------------------
			if (carros[i].trim() === 'Alpha') {
    			message.channel.send('Alpha: https://wiki.rage.mp/images/thumb/a/a8/Alpha.png/800px-Alpha.png');
			}
			if (carros[i].trim() === 'Banshee') {
    			message.channel.send('Banshee: https://wiki.rage.mp/images/thumb/d/d3/Banshee.png/800px-Banshee.png');
			}
			if (carros[i].trim() === 'BestiaGTS') {
    			message.channel.send('BestiaGTS: https://wiki.rage.mp/images/thumb/5/5c/Bestiagts.png/800px-Bestiagts.png');
			}
			if (carros[i].trim() === 'Blista2') {
    			message.channel.send('Blista2: https://wiki.rage.mp/images/thumb/0/0c/Blista2.png/800px-Blista2.png');
			}
			if (carros[i].trim() === 'Blista3') {
    			message.channel.send('Blista3: https://wiki.rage.mp/images/thumb/8/8c/Blista3.png/800px-Blista3.png');
			}
			if (carros[i].trim() === 'Buffalo') {
    			message.channel.send('Buffalo: https://wiki.rage.mp/images/thumb/0/0a/Buffalo.png/800px-Buffalo.png');
			}
			if (carros[i].trim() === 'Buffalo2') {
    			message.channel.send('Buffalo2: https://wiki.rage.mp/images/thumb/2/2c/Buffalo2.png/800px-Buffalo2.png');
			}
			if (carros[i].trim() === 'Buffalo3') {
    			message.channel.send('Buffalo3: https://wiki.rage.mp/images/thumb/6/68/Buffalo3.png/800px-Buffalo3.png');
			}
			if (carros[i].trim() === 'Carbonizzare') {
    			message.channel.send('Carbonizzare: https://wiki.rage.mp/images/thumb/4/43/Carbonizzare.png/800px-Carbonizzare.png');
			}
			if (carros[i].trim() === 'Comet2') {
    			message.channel.send('Comet2: https://wiki.rage.mp/images/thumb/c/cb/Comet2.png/800px-Comet2.png');
			}
			if (carros[i].trim() === 'Comet3') {
    			message.channel.send('Comet3: https://wiki.rage.mp/images/thumb/b/b6/Comet3.png/800px-Comet3.png');
			}
			if (carros[i].trim() === 'Comet4') {
    			message.channel.send('Comet4: https://wiki.rage.mp/images/thumb/f/f1/Comet4.png/800px-Comet4.png');
			}
			if (carros[i].trim() === 'Coquette') {
    			message.channel.send('Coquette: https://wiki.rage.mp/images/thumb/d/d6/Coquette.png/800px-Coquette.png');
			}
			if (carros[i].trim() === 'Deveste') {
    			message.channel.send('Deveste: https://wiki.rage.mp/images/thumb/3/3f/Deveste.png/800px-Deveste.png');
			}
			if (carros[i].trim() === 'Elegy') {
    			message.channel.send('Elegy: https://wiki.rage.mp/images/thumb/e/ea/Elegy.png/800px-Elegy.png');
			}
			if (carros[i].trim() === 'Elegy2') {
    			message.channel.send('Elegy2: https://wiki.rage.mp/images/thumb/3/33/Elegy2.png/800px-Elegy2.png');
			}
			if (carros[i].trim() === 'Feltzer2') {
    			message.channel.send('Feltzer2: https://wiki.rage.mp/images/thumb/7/7c/Feltzer2.png/800px-Feltzer2.png');
			}
			if (carros[i].trim() === 'Furoregt') {
    			message.channel.send('Furoregt: https://wiki.rage.mp/images/thumb/c/cb/Furoregt.png/800px-Furoregt.png');
			}
			if (carros[i].trim() === 'Flashgt') {
    			message.channel.send('Flashgt: https://wiki.rage.mp/images/thumb/8/80/Flashgt.png/800px-Flashgt.png');
			}
			if (carros[i].trim() === 'Fusilade') {
    			message.channel.send('Fusilade: https://wiki.rage.mp/images/thumb/5/56/Fusilade.png/800px-Fusilade.png');
			}
			if (carros[i].trim() === 'Futo') {
    			message.channel.send('Futo: https://wiki.rage.mp/images/thumb/0/04/Futo.png/800px-Futo.png');
			}
			if (carros[i].trim() === 'ItaliGTO') {
    			message.channel.send('ItaliGTO: https://wiki.rage.mp/images/thumb/8/83/ItaliGTO.png/800px-ItaliGTO.png');
			}
			if (carros[i].trim() === 'Jester') {
    			message.channel.send('Jester: https://wiki.rage.mp/images/thumb/e/e0/Jester.png/800px-Jester.png');
			}
			if (carros[i].trim() === 'Jester2') {
    			message.channel.send('Jester2: https://wiki.rage.mp/images/thumb/3/34/Jester2.png/800px-Jester2.png');
			}
			if (carros[i].trim() === 'Jester3') {
    			message.channel.send('Jester3: https://wiki.rage.mp/images/thumb/1/19/Jester3.png/800px-Jester3.png');
			}
			if (carros[i].trim() === 'Khamelion') {
    			message.channel.send('Khamelion: https://wiki.rage.mp/images/thumb/2/2e/Khamelion.png/800px-Khamelion.png');
			}
			if (carros[i].trim() === 'Kuruma') {
    			message.channel.send('Kuruma: https://wiki.rage.mp/images/thumb/8/8f/Kuruma.png/800px-Kuruma.png');
			}
			if (carros[i].trim() === 'Lynx') {
    			message.channel.send('Lynx: https://wiki.rage.mp/images/thumb/a/a7/Lynx2.png/800px-Lynx2.png');
			}
			if (carros[i].trim() === 'Massacro') {
    			message.channel.send('Massacro: https://wiki.rage.mp/images/thumb/7/78/Massacro.png/800px-Massacro.png');
			}
			if (carros[i].trim() === 'Massacro2') {
    			message.channel.send('Massacro2: https://wiki.rage.mp/images/thumb/b/be/Massacro2.png/800px-Massacro2.png');
			}
			if (carros[i].trim() === 'Neon') {
    			message.channel.send('Neon: https://wiki.rage.mp/images/thumb/1/17/Neon.png/800px-Neon.png');
			}
			if (carros[i].trim() === 'Ninef') {
    			message.channel.send('Ninef: https://wiki.rage.mp/images/thumb/5/59/Ninef.png/800px-Ninef.png');
			}
			if (carros[i].trim() === 'Ninef2') {
    			message.channel.send('Ninef2: https://wiki.rage.mp/images/thumb/f/f6/Ninef2.png/800px-Ninef2.png');
			}
			if (carros[i].trim() === 'Omnis') {
    			message.channel.send('Omnis: https://wiki.rage.mp/images/thumb/1/12/Omnis.png/800px-Omnis.png');
			}
			if (carros[i].trim() === 'Pariah') {
    			message.channel.send('Pariah: https://wiki.rage.mp/images/thumb/d/df/Pariah.png/800px-Pariah.png');
			}
			if (carros[i].trim() === 'Penumbra') {
    			message.channel.send('Penumbra: https://wiki.rage.mp/images/thumb/9/93/Penumbra.png/800px-Penumbra.png');
			}
			if (carros[i].trim() === 'Raiden') {
    			message.channel.send('Raiden: https://wiki.rage.mp/images/thumb/5/5f/Raiden.png/800px-Raiden.png');
			}
			if (carros[i].trim() === 'Rapidgt') {
    			message.channel.send('Rapidgt: https://wiki.rage.mp/images/thumb/e/e9/Rapidgt.png/800px-Rapidgt.png');
			}
			if (carros[i].trim() === 'Rapidgt2') {
    			message.channel.send('Rapidgt2: https://wiki.rage.mp/images/thumb/3/3e/Rapidgt2.png/800px-Rapidgt2.png');
			}
			if (carros[i].trim() === 'Raptor') {
    			message.channel.send('Raptor: https://wiki.rage.mp/images/thumb/0/08/Raptor.png/800px-Raptor.png');
			}
			if (carros[i].trim() === 'Revolter') {
    			message.channel.send('Revolter: https://wiki.rage.mp/images/thumb/2/24/Revolter.png/800px-Revolter.png');
			}
			if (carros[i].trim() === 'Schafter2') {
    			message.channel.send('Schafter2: https://wiki.rage.mp/images/thumb/c/cc/Schafter2.png/800px-Schafter2.png');
			}
			if (carros[i].trim() === 'Schafter3') {
    			message.channel.send('Schafter3: https://wiki.rage.mp/images/thumb/a/a9/Schafter3.png/800px-Schafter3.png');
			}
			if (carros[i].trim() === 'Schafter4') {
    			message.channel.send('Schafter4: https://wiki.rage.mp/images/thumb/2/29/Schafter4.png/800px-Schafter4.png');
			}
			if (carros[i].trim() === 'Schafter5') {
    			message.channel.send('Schafter5: https://wiki.rage.mp/images/thumb/2/28/Schafter5.png/800px-Schafter5.png');
			}
			if (carros[i].trim() === 'Schafter6') {
    			message.channel.send('Schafter6: https://wiki.rage.mp/images/thumb/a/a6/Schafter6.png/800px-Schafter6.png');
			}
			if (carros[i].trim() === 'Schlagen') {
    			message.channel.send('Schlagen: https://wiki.rage.mp/images/thumb/9/97/Schlagen.png/800px-Schlagen.png');
			}
			if (carros[i].trim() === 'Schwarzer') {
    			message.channel.send('Schwarzer: https://wiki.rage.mp/images/thumb/1/19/Schwarzer.png/800px-Schwarzer.png');
			}
			if (carros[i].trim() === 'Sentinel3') {
    			message.channel.send('Sentinel3: https://wiki.rage.mp/images/thumb/0/0f/Sentinel3.png/800px-Sentinel3.png');
			}
			if (carros[i].trim() === 'Seven70') {
    			message.channel.send('Seven70: https://wiki.rage.mp/images/thumb/6/60/Seven70.png/800px-Seven70.png');
			}
			if (carros[i].trim() === 'Specter') {
    			message.channel.send('Specter: https://wiki.rage.mp/images/thumb/f/f1/Specter.png/800px-Specter.png');
			}
			if (carros[i].trim() === 'Specter2') {
    			message.channel.send('Specter2: https://wiki.rage.mp/images/thumb/9/9f/Specter2.png/800px-Specter2.png');
			}
			if (carros[i].trim() === 'Streiter') {
    			message.channel.send('Streiter: https://wiki.rage.mp/images/thumb/8/81/Streiter.png/800px-Streiter.png');
			}
			if (carros[i].trim() === 'Sugoi') {
    			message.channel.send('Sugoi: https://wiki.rage.mp/images/thumb/2/25/Sugoi.png/800px-Sugoi.png');
			}
			if (carros[i].trim() === 'Sultan') {
    			message.channel.send('Sultan: https://wiki.rage.mp/images/thumb/f/f4/Sultan.png/800px-Sultan.png');
			}
			if (carros[i].trim() === 'Surano') {
    			message.channel.send('Surano: https://wiki.rage.mp/images/thumb/9/96/Surano.png/800px-Surano.png');
			}
			if (carros[i].trim() === 'Tampa2') {
    			message.channel.send('Tampa2: https://wiki.rage.mp/images/thumb/a/af/Tampa2.png/800px-Tampa2.png');
			}
			if (carros[i].trim() === 'Tropos') {
    			message.channel.send('Tropos: https://wiki.rage.mp/images/thumb/7/71/Tropos.png/800px-Tropos.png');
			}
			if (carros[i].trim() === 'Verlierer2') {
    			message.channel.send('Verlierer2: https://wiki.rage.mp/images/thumb/8/81/Verlierer2.png/800px-Verlierer2.png');
			}
			//------------------------------------------------Sports Classic----------------------------------------------------
			if (carros[i].trim() === 'Ardent') {
    			message.channel.send('Ardent: https://wiki.rage.mp/images/thumb/3/3d/Ardent.png/800px-Ardent.png');
			}
			if (carros[i].trim() === 'Btype') {
    			message.channel.send('Btype: https://wiki.rage.mp/images/thumb/6/64/Btype.png/800px-Btype.png');
			}
			if (carros[i].trim() === 'Btype2') {
    			message.channel.send('Btype2: https://wiki.rage.mp/images/thumb/9/98/Btype2.png/800px-Btype2.png');
			}
			if (carros[i].trim() === 'Btype3') {
    			message.channel.send('Btype3: https://wiki.rage.mp/images/thumb/3/34/Btype3.png/800px-Btype3.png');
			}
			if (carros[i].trim() === 'Casco') {
    			message.channel.send('Casco: https://wiki.rage.mp/images/thumb/d/d7/Casco.png/800px-Casco.png');
			}
			if (carros[i].trim() === 'Cheetah2') {
    			message.channel.send('Cheetah2: https://wiki.rage.mp/images/thumb/d/dd/Cheetah2.png/800px-Cheetah2.png');
			}
			if (carros[i].trim() === 'Coquette2') {
    			message.channel.send('Coquette2: https://wiki.rage.mp/images/thumb/8/8a/Coquette2.png/800px-Coquette2.png');
			}
			if (carros[i].trim() === 'Fagaloa') {
    			message.channel.send('Fagaloa: https://wiki.rage.mp/images/thumb/1/15/Fagaloa.png/800px-Fagaloa.png');
			}
			if (carros[i].trim() === 'Feltzer3') {
    			message.channel.send('Feltzer3: https://wiki.rage.mp/images/thumb/0/0b/Feltzer3.png/800px-Feltzer3.png');
			}
			if (carros[i].trim() === 'Gt500') {
    			message.channel.send('Gt500: https://wiki.rage.mp/images/thumb/8/84/Gt500.png/800px-Gt500.png');
			}
			if (carros[i].trim() === 'Infernus2') {
    			message.channel.send('Infernus2: https://wiki.rage.mp/images/thumb/9/91/Infernus2.png/800px-Infernus2.png');
			}
			if (carros[i].trim() === 'Mamba') {
    			message.channel.send('Mamba: https://wiki.rage.mp/images/thumb/c/c0/Mamba.png/800px-Mamba.png');
			}
			if (carros[i].trim() === 'Manana') {
    			message.channel.send('Manana: https://wiki.rage.mp/images/thumb/5/50/Manana.png/800px-Manana.png');
			}
			if (carros[i].trim() === 'Michelli') {
    			message.channel.send('Michelli: https://wiki.rage.mp/images/1/15/Michelli.png');
			}
			if (carros[i].trim() === 'Monroe') {
    			message.channel.send('Monroe: https://wiki.rage.mp/images/thumb/6/64/Monroe.png/800px-Monroe.png');
			}
			if (carros[i].trim() === 'Peyote') {
    			message.channel.send('Peyote: https://wiki.rage.mp/images/thumb/2/21/Peyote.png/800px-Peyote.png');
			}
			if (carros[i].trim() === 'Pigalle') {
    			message.channel.send('Pigalle: https://wiki.rage.mp/images/thumb/7/76/Pigalle.png/800px-Pigalle.png');
			}
			if (carros[i].trim() === 'Rapidgt3') {
    			message.channel.send('Rapidgt3: https://wiki.rage.mp/images/thumb/0/09/Rapidgt3.png/800px-Rapidgt3.png');
			}
			if (carros[i].trim() === 'Retinue') {
    			message.channel.send('Retinue: https://wiki.rage.mp/images/thumb/5/53/Retinue.png/800px-Retinue.png');
			}
			if (carros[i].trim() === 'Savestra') {
    			message.channel.send('Savestra: https://wiki.rage.mp/images/thumb/2/26/Savestra.png/800px-Savestra.png');
			}
			if (carros[i].trim() === 'Stinger') {
    			message.channel.send('Stinger: https://wiki.rage.mp/images/thumb/b/b6/Stinger.png/800px-Stinger.png');
			}
			if (carros[i].trim() === 'Stingergt') {
    			message.channel.send('Stingergt: https://wiki.rage.mp/images/thumb/8/8d/Stingergt.png/800px-Stingergt.png');
			}
			if (carros[i].trim() === 'Stromberg') {
    			message.channel.send('Stromberg: https://wiki.rage.mp/images/thumb/f/f1/Stromberg.png/800px-Stromberg.png');
			}
			if (carros[i].trim() === 'Swinger') {
    			message.channel.send('Swinger: https://wiki.rage.mp/images/8/86/Swinger.png');
			}
			if (carros[i].trim() === 'Torero') {
    			message.channel.send('Torero: https://wiki.rage.mp/images/thumb/5/5f/Torero.png/800px-Torero.png');
			}
			if (carros[i].trim() === 'Tornado') {
    			message.channel.send('Tornado: https://wiki.rage.mp/images/thumb/4/40/Tornado.png/800px-Tornado.png');
			}
			if (carros[i].trim() === 'Tornado2') {
    			message.channel.send('Tornado2: https://wiki.rage.mp/images/thumb/0/05/Tornado2.png/800px-Tornado2.png');
			}
			if (carros[i].trim() === 'Tornado3') {
    			message.channel.send('Tornado3: https://wiki.rage.mp/images/thumb/7/7d/Tornado3.png/800px-Tornado3.png');
			}
			if (carros[i].trim() === 'Tornado4') {
    			message.channel.send('Tornado4: https://wiki.rage.mp/images/thumb/f/fa/Tornado4.png/800px-Tornado4.png');
			}
			if (carros[i].trim() === 'Tornado5') {
    			message.channel.send('Tornado5: https://wiki.rage.mp/images/thumb/8/83/Tornado5.png/800px-Tornado5.png');
			}
			if (carros[i].trim() === 'Turismo2') {
    			message.channel.send('Turismo2: https://wiki.rage.mp/images/thumb/f/fa/Turismo2.png/800px-Turismo2.png');
			}
			if (carros[i].trim() === 'Viseris') {
    			message.channel.send('Viseris: https://wiki.rage.mp/images/thumb/2/24/Viseris.png/800px-Viseris.png');
			}
			if (carros[i].trim() === 'Z190') {
    			message.channel.send('Z190: https://wiki.rage.mp/images/e/e1/Z190.png');
			}
			if (carros[i].trim() === 'Ztype') {
    			message.channel.send('Ztype: https://wiki.rage.mp/images/thumb/5/56/Ztype.png/800px-Ztype.png');
			}
			if (carros[i].trim() === 'Cheburek') {
    			message.channel.send('Cheburek: https://wiki.rage.mp/images/thumb/4/4f/Cheburek.png/800px-Cheburek.png');
			}
			//---------------------------------------------------Super--------------------------------------------------------
			if (carros[i].trim() === 'Adder') {
    			message.channel.send('Adder: https://wiki.rage.mp/images/thumb/c/c2/Adder.png/800px-Adder.png');
			}
			if (carros[i].trim() === 'Autarch') {
    			message.channel.send('Autarch: https://wiki.rage.mp/images/thumb/3/38/Autarch.png/800px-Autarch.png');
			}
			if (carros[i].trim() === 'Banshee2') {
    			message.channel.send('Banshee2: https://wiki.rage.mp/images/thumb/9/9b/Banshee2.png/800px-Banshee2.png');
			}
			if (carros[i].trim() === 'Bullet') {
    			message.channel.send('Bullet: https://wiki.rage.mp/images/thumb/7/7a/Bullet.png/800px-Bullet.png');
			}
			if (carros[i].trim() === 'Cheetah') {
    			message.channel.send('Cheetah: https://wiki.rage.mp/images/thumb/9/9e/Cheetah.png/800px-Cheetah.png');
			}
			if (carros[i].trim() === 'Cyclone') {
    			message.channel.send('Cyclone: https://wiki.rage.mp/images/thumb/7/79/Cyclone.png/800px-Cyclone.png');
			}
			if (carros[i].trim() === 'Entity2') {
    			message.channel.send('Entity2: https://wiki.rage.mp/images/thumb/f/f3/Entity2.png/800px-Entity2.png');
			}
			if (carros[i].trim() === 'Entityxf') {
    			message.channel.send('Entityxf: https://wiki.rage.mp/images/thumb/6/61/Entityxf.png/800px-Entityxf.png');
			}
			if (carros[i].trim() === 'Fmj') {
    			message.channel.send('Fmj: https://wiki.rage.mp/images/thumb/d/d2/Fmj.png/800px-Fmj.png');
			}
			if (carros[i].trim() === 'Furia') {
    			message.channel.send('Furia: https://wiki.rage.mp/images/thumb/0/05/Furia.png/800px-Furia.png');
			}
			if (carros[i].trim() === 'Gp1') {
    			message.channel.send('Gp1: https://wiki.rage.mp/images/thumb/a/a4/Gp1.png/800px-Gp1.png');
			}
			if (carros[i].trim() === 'Infernus') {
    			message.channel.send('Infernus: https://wiki.rage.mp/images/thumb/d/d2/Infernus.png/800px-Infernus.png');
			}
			if (carros[i].trim() === 'Italigtb') {
    			message.channel.send('Italigtb: https://wiki.rage.mp/images/thumb/d/dd/Italigtb.png/800px-Italigtb.png');
			}
			if (carros[i].trim() === 'Italigtb2') {
    			message.channel.send('Italigtb2: https://wiki.rage.mp/images/thumb/5/57/Italigtb2.png/800px-Italigtb2.png');
			}
			if (carros[i].trim() === 'Le7b') {
    			message.channel.send('Le7b: https://wiki.rage.mp/images/thumb/e/ee/Le7b.png/800px-Le7b.png');
			}
			if (carros[i].trim() === 'Nero') {
    			message.channel.send('Nero: https://wiki.rage.mp/images/thumb/e/ed/Nero.png/800px-Nero.png');
			}
			if (carros[i].trim() === 'Nero2') {
    			message.channel.send('Nero2: https://wiki.rage.mp/images/thumb/e/ec/Nero2.png/800px-Nero2.png');
			}
			if (carros[i].trim() === 'Osiris') {
    			message.channel.send('Osiris: https://wiki.rage.mp/images/thumb/e/e3/Osiris.png/800px-Osiris.png');
			}
			if (carros[i].trim() === 'Penetrator') {
    			message.channel.send('Penetrator: https://wiki.rage.mp/images/thumb/d/d9/Penetrator.png/800px-Penetrator.png');
			}
			if (carros[i].trim() === 'Pfister811') {
    			message.channel.send('Pfister811: https://wiki.rage.mp/images/thumb/8/8e/Pfister811.png/800px-Pfister811.png');
			}
			if (carros[i].trim() === 'Prototipo') {
    			message.channel.send('Prototipo: https://wiki.rage.mp/images/thumb/f/fb/Prototipo.png/800px-Prototipo.png');
			}
			if (carros[i].trim() === 'Reaper') {
    			message.channel.send('Reaper: https://wiki.rage.mp/images/thumb/6/6a/Reaper.png/800px-Reaper.png');
			}
			if (carros[i].trim() === 'Sc1') {
    			message.channel.send('Sc1: https://wiki.rage.mp/images/thumb/5/59/Sc1.png/800px-Sc1.png');
			}
			if (carros[i].trim() === 'Sheava') {
    			message.channel.send('Sheava: https://wiki.rage.mp/images/thumb/0/06/Sheava.png/800px-Sheava.png');
			}
			if (carros[i].trim() === 'Sultanrs') {
    			message.channel.send('Sultanrs: https://wiki.rage.mp/images/thumb/8/88/Sultanrs.png/800px-Sultanrs.png');
			}
			if (carros[i].trim() === 'T20') {
    			message.channel.send('T20: https://wiki.rage.mp/images/thumb/7/7d/T20.png/800px-T20.png');
			}
			if (carros[i].trim() === 'Tempesta') {
    			message.channel.send('Tempesta: https://wiki.rage.mp/images/thumb/8/8a/Tempesta.png/800px-Tempesta.png');
			}
			if (carros[i].trim() === 'Turismor') {
    			message.channel.send('Turismor: https://wiki.rage.mp/images/thumb/7/7f/Turismor.png/800px-Turismor.png');
			}
			if (carros[i].trim() === 'Tyrus') {
    			message.channel.send('Tyrus: https://wiki.rage.mp/images/thumb/e/e4/Tyrus.png/800px-Tyrus.png');
			}
			if (carros[i].trim() === 'Vacca') {
    			message.channel.send('Vacca: https://wiki.rage.mp/images/thumb/1/14/Vacca.png/800px-Vacca.png');
			}
			if (carros[i].trim() === 'Vagner') {
    			message.channel.send('Vagner: https://wiki.rage.mp/images/thumb/9/92/Vagner.png/800px-Vagner.png');
			}
			if (carros[i].trim() === 'Visione') {
    			message.channel.send('Visione: https://wiki.rage.mp/images/thumb/0/01/Visione.png/800px-Visione.png');
			}
			if (carros[i].trim() === 'Voltic') {
    			message.channel.send('Voltic: https://wiki.rage.mp/images/thumb/e/ef/Voltic.png/800px-Voltic.png');
			}
			if (carros[i].trim() === 'Xa21') {
    			message.channel.send('Xa21: https://wiki.rage.mp/images/thumb/4/4d/Xa21.png/800px-Xa21.png');
			}
			if (carros[i].trim() === 'Zentorno') {
    			message.channel.send('Zentorno: https://wiki.rage.mp/images/thumb/2/2b/Zentorno.png/800px-Zentorno.png');
			}
			//-------------------------------------------------------Vans------------------------------------------------------
			if (carros[i].trim() === 'Bison') {
    			message.channel.send('Bison: https://wiki.rage.mp/images/f/f6/Bison.png');
			}		
			if (carros[i].trim() === 'Bison2') {
    			message.channel.send('Bison2: https://wiki.rage.mp/images/4/44/Bison2.png');
			}		
			if (carros[i].trim() === 'Bison3') {
    			message.channel.send('Bison3: https://wiki.rage.mp/images/7/7f/Bison3.png');
			}
			if (carros[i].trim() === 'BobcatXL') {
    			message.channel.send('BobcatXL: https://wiki.rage.mp/images/d/d8/BobcatXL.png');
			}
			if (carros[i].trim() === 'Burrito') {
    			message.channel.send('Burrito: https://wiki.rage.mp/images/e/e0/Burrito.png');
			}
			if (carros[i].trim() === 'Camper') {
    			message.channel.send('Camper: https://wiki.rage.mp/images/b/bd/Camper.png');
			}
			if (carros[i].trim() === 'GBurrito') {
    			message.channel.send('GBurrito: https://wiki.rage.mp/images/b/b0/GBurrito.png');
			}
			if (carros[i].trim() === 'GBurrito2') {
    			message.channel.send('GBurrito2: https://wiki.rage.mp/images/f/ff/GBurrito2.png');
			}
			if (carros[i].trim() === 'Journey') {
    			message.channel.send('Journey: https://wiki.rage.mp/images/0/0c/Journey.png');
			}
			if (carros[i].trim() === 'Minivan') {
    			message.channel.send('Minivan: https://wiki.rage.mp/images/1/12/Minivan.png');
			}
			if (carros[i].trim() === 'Minivan2') {
    			message.channel.send('Minivan2: https://wiki.rage.mp/images/2/21/Minivan2.png');
			}
			if (carros[i].trim() === 'Paradise') {
    			message.channel.send('Paradise: https://wiki.rage.mp/images/b/b3/Paradise.png');
			}
			if (carros[i].trim() === 'Pony') {
    			message.channel.send('Pony: https://wiki.rage.mp/images/b/b1/Pony.png');
			}
			if (carros[i].trim() === 'Rumpo') {
    			message.channel.send('Rumpo: https://wiki.rage.mp/images/9/9f/Rumpo.png');
			}
			if (carros[i].trim() === 'Rumpo3') {
    			message.channel.send('Rumpo3: https://wiki.rage.mp/images/7/7a/Rumpo3.png');
			}
			if (carros[i].trim() === 'Speedo') {
    			message.channel.send('Speedo: https://wiki.rage.mp/images/2/2b/Speedo.png');
			}
			if (carros[i].trim() === 'Speedo2') {
    			message.channel.send('Speedo2: https://wiki.rage.mp/images/5/53/Speedo2.png');
			}
			if (carros[i].trim() === 'Speedo4') {
    			message.channel.send('Speedo4: https://wiki.rage.mp/images/thumb/b/b4/Speedo4.png/800px-Speedo4.png');
			}
			if (carros[i].trim() === 'Surfer') {
    			message.channel.send('Surfer: https://wiki.rage.mp/images/d/d7/Surfer.png');
			}
			if (carros[i].trim() === 'Surfer2') {
    			message.channel.send('Surfer2: https://wiki.rage.mp/images/d/d5/Surfer2.png');
			}
			if (carros[i].trim() === 'Youga') {
    			message.channel.send('Youga: https://wiki.rage.mp/images/d/d5/Youga.png');
			}
			if (carros[i].trim() === 'Youga2') {
    			message.channel.send('Youga2: https://wiki.rage.mp/images/thumb/e/e6/Youga2.png/800px-Youga2.png');
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


 
