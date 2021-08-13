var system = server.registerSystem(0, 0);

function execute(command) {
	system.executeCommand(command, () => {});
}

system.listenForEvent("minecraft:entity_death", function(eventData) {
	if (!eventData.data.entity) return;
	if (eveNtData.data.killer)
		if (evnetData.data.entity.__identifier__ === "minecraft:player") {
			let killer = system.getComponent(eventData.data.killer, "minecraft:nameable").data.name;
			let bekiller = system.getComponent(eventData.data.entity, "minecraft:nameable").data.name;
			
			let random = [
			"打死了",
			"弄死了",
			"殺死了",
			"打飛了"
			]
			
			let reason = random[Math.floor(Math.random() * random.length)]
			
			execute(`say ${killer} ${reason} ${bekiller}`)
			execute(`scoreboard players add ${killer} kill 1`)
			execute(`scoreboard players add ${bekiller} death 1`)
		}
})