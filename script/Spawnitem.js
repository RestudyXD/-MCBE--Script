var system = server.registerSystem(0, 0);

function execute(command) {
    system.executeCommand(command, () => {});
}

//禁用物品list
var illegalItems = [
  "barrier",
  "brewingstandblock",
  "bubble_column",
  "camera",
  "cave_vines",
  "cave_vines_body_with_berries",
  "cave_vines_head_with_berries",
  "cocoa",
  "command_block",
  "crops",
  "end_gateway",
  "end_portal",
  "fire",
  "flowing_lava",
  "flowing_water",
  "glow_frame",
  "glow_stick",
  "glowingobsidian",
  "info_update",
  "invisiblebedrock",
  "item.frame",
  "item.iron_door",
  "item.nether_wart",
  "item.reeds",
  "item.skull",
  "item.wooden_door",
  "itemkelp",
  "lava",
  "lit_furnace",
  "lit_redstone_lamp",
  "nether_sprouts",
  "netherreactor",
  "pisonarmcollision",
  "portal",
  "potatoes",
  "pumpkin_stem",
  "reserved6",
  "sign",
  "soul_fire",
  "spawn_egg",
  "stickypistonarmcollision",
  "structure_block",
  "structure_void",
  "tripwire",
  "underwater_torch",
  "unknown",
  "wall_sign",
  "water"
]

system.listenForEvent("minecraft:entity_use_item", function(eventData) {
    let r = false;

    for (let i=0; i<illegalItems.length; i++) {

        if (eventData.data.item_stack.item === "minecraft:" + illegalItems[i]) {
            let pos = system.getComponent(eventData.data.entity, "minecraft:position").data
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ clear @s`)
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ say @s §l還敢用give拿出: §c${illegalItems[i]}`)
            r = true;
        }

        if (r) return;
    }
})

system.listenForEvent("minecraft:entity_dropped_item", function(eventData) {
    let r = false;

    for (let i=0; i<illegalItems.length; i++) {

        if (eventData.data.item_stack.item === "minecraft:" + illegalItems[i]) {
            let pos = system.getComponent(eventData.data.entity, "minecraft:position").data
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ clear @s`)
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ say @s §l還敢用give拿出: §c${illegalItems[i]}`)
            r = true;
        }

        if (r) return;
    }
})

system.listenForEvent("minecraft:entity_acquired_item", function(eventData) {
    let r = false;

    for (let i=0; i<illegalItems.length; i++) {

        if (eventData.data.item_stack.item === "minecraft:" + illegalItems[i]) {
            let pos = system.getComponent(eventData.data.entity, "minecraft:position").data
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ clear @s`)
            execute(`execute @p[x=${pos.x.toString()}, y=${pos.y.toString()}, z=${pos.z.toString()}] ~ ~ ~ say @s §l撿到了非法物品: §c${illegalItems[i]}`)
            r = true;
        }

        if (r) return;
    }
})