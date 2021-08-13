//data後面的是根據事件能讀取到的來更改
//這邊用player+block當範本
let player = eventData.data.player
let block_pos = eventData.data.block

//讀取player的區塊+block座標
let tick_world = system.getComponent(player, "minecraft:tick_world");
let blockpos = system.getComponent(block, "minecraft:position");

//抓方塊檔案
const block = system.getblock(tick_world.data.ticking_area, blockpos);
//讀取抓到的block的檔案
let blockD = system.getComponent(block, "minecraft:blockstate);

//範例
if (blockD.__identifier__ == "minecraft:stone") {
     system.ExecuteCommand(`say 有石頭！`)
}

//建議搭配事件來做使用
