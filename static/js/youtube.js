let player;

function onYouTubeIframeAPIReady() {
  const videoId = "yjPTd17G_uQ";

  const options = {
    height: "100%",
    width: "100%",
    videoId: videoId,
    playerVars: {
      cc_load_policy: 0,
      disablekb: 1,
      enablejsapi: 1,
    },
  };

  player = new YT.Player("player", options);
}
