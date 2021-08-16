//這個事件會在玩家破壞方塊時觸發
//我這邊用計算方塊挖掘數量當例子

//先將要計算方塊創建一個array list
var cblock = [
  "log",
];

system.listenForEvent("minecraft:player_destroyed_block", function(eventData) {
  //抓player
	let playername = eventData.data.player
  //抓player的位置
  let pos = system.getComponent(playername, "minecraft:position").data;
  //重複直到找到玩家挖的方塊跟array list裡面相同
        for (let i = 0; i < cblock.length; i++) {
            if (eventData.data.block_identifier === "minecraft:"+cblock[i]) {
              //找到之後給挖的player在計算挖掘方塊記分板+1分數
                system.ExecuteCommand(`execute @p[x=${(pos.x).toString()}, y=${(pos.y).toString()}, z=${(pos.z).toString()}] ~ ~ ~ scoreboard players add @s count 1`);
           }
       }
});
