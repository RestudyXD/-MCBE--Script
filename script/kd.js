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
			`${killer} 打死了 ${bekiller}`,
			`${killer} 弄死了 ${bekiller}`,
			`${killer} 殺死了 ${bekiller}`,
			`${killer} 打飛了 ${bekiller}`,
			`${killer} 踹死了 ${bekiller}`,
			`${killer} 詛咒了 ${bekiller} 死`,
			"踢飛了"
			]
			
			let reason = random[Math.floor(Math.random() * random.length)]
			
			execute(`say {reason}`)
			execute(`scoreboard players add ${killer} kill 1`)
			execute(`scoreboard players add ${bekiller} death 1`)
		}
})
