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
video.addEventListener('click', handleToggle);
//