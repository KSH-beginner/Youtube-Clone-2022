const moreBtn = document.querySelector(
  "#video-info .video-titleAndBtn .moreBtn"
);
const video_title = document.querySelector(
  "#video-info .video-titleAndBtn .title"
);

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  video_title.classList.toggle("clamp");
});
