function addRef(url, title, asset) {
    var ref = document.createElement("a");
    ref.href = url;
    ref.title = title;
    ref.target = "_blank";
    var img = document.createElement("img");
    img.src = asset;
    ref.appendChild(img);
    document.getElementsByClassName("refs")[0].appendChild(ref);
}
    //<a href="https://discord.gg/93JFPbk" title="Discord" target="_blank"><img src="assets/discord.png"></a>