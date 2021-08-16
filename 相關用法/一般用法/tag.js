//data後面的是根據事件能讀取到的來更改
//抓取對象要根據官方給的來抓取 不可以隨便來打!
let player = eventData.data.player;

//這邊用讀取出來的player來讀取tag數據
let tag = system.getComponent(player, "minecraft:tag")

//tag語法
tag.data.includes("這邊放要找的tag")
tag.data.push("放要新增的tag")

//範例
if (!tag.data.includes("first")) {
    tag.data.push("first");
};
//輸出: 新稱first標籤到目標player
