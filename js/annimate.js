var endFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//狐のイメージが回転し終える
	foxkeh.removeEventListener("animationend", endFlipFoxkeh);
//アニメーションが終了するアニメーション。
	foxkeh.setAttribute("class", "");
};
//終了。

var endSlideinFoxkehAndStartFlipFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//狐のイメージが回転し終え、回転する
	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);
//スライドインした狐が回転して、それが終るアニメショーンへ。
	foxkeh.setAttribute("class", "flip");
};
//回転する

var startSlideinFoxkeh = function(){
	var foxkeh = document.querySelector("#slidein-foxkeh img");
	foxkeh.setAttribute("class", "slidein");
//狐のイメージがスライドインする
	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
};
//スライドインし終えた狐が回転し始めるアニメーションへ。

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//スライドインする狐のボタンの設定
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//クリックをすると狐がスライドイン