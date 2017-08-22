/* 获取元素  */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player_slider');

/* 事件监听 */
//点击播放
video.addEventListener('click', Videoplay);
//点击或播放是改变播放和暂停状态的图标
video.addEventListener('play', handleToggle);
//暂停改变图标状态
video.addEventListener("pause", handleToggle);
//时间轴的改变
video.addEventListener("timeupdate", filleUpdate);

//点击播放或者暂停图标的监听
toggle.addEventListener('click', Videoplay);
toggle.addEventListener("click", handleToggle);

//音量和播放速度滑动条事件监听
let mouseflag = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

//