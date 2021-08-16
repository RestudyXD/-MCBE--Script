//callback顧名思義類似指令執行完會回傳的輸出
//這邊用回傳記分板分數例子
system.executeCommand(`scoreboard players add @a[tag=reload] Oplay 0`, (commandResults) => this.cmdCallback(commandResults));

function cmdCallback(results) {
	//抓Message
	let Message = results.data.statusMessage;
	let args = (Message.split(" "));
	if (args[0] == undefined) return;
    	//擷取Pplayer ID
	let nameN = args[3];
    	//擷取ScoreName
	let scorenameN = args[5];
  	//擷取Score
	let scoreN = args[7];
  	//刪除不必要的文字
	let scorename = scorenameN.substring(1).replace("]", "");
  	//同上
	let score = scoreN.replace(")", "");
}

system.executeCommand(`say @a ${nameN} ${scorename} 的分數為 ${score}`);
//輸出: [Script Engine] Player ScoreName 的分數為 Score
