var system = server.registerSystem(0, 0);

function execute(command) {
    system.executeCommand(command, () => {});
}

system.listenForEvent("minecraft:entity_hurt", function(eventData) {
    if (!eventData.data.attacker) return;
    if (eventData.data.damage)
        if (eventData.data.attacker)
            if (eventData.data.attacker.__identifier__ == "minecraft:player") {
                let maxDmg = 30; //
                let attacker = eventData.data.attacker;
                if (system.hasComponent(attacker, "minecraft:position") && eventData.data.damage > maxDmg) {
					let pos = system.getComponent(attacker, "minecraft:position").data;
                    execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ clear @s`);
					execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ say @s 還敢32k阿`);
					execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ kill @s`);
                }
    }
});