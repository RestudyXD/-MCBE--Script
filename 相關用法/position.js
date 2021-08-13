//data後面的是根據事件能讀取到的來更改
let player =  eventData.data.player

//範例
let pos = system.getComponent(player, "minecraft:position");
//假設xyz為0,4,0
system.ExecuteCommand(`say ${pos.x} ${pos.y} ${pos.z}`)
//輸出:[Script Engine] 0 4 0
