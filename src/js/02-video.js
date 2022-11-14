import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const newPlayer = document.querySelector('#vimeo-player');
const player = new Player(newPlayer);
// console.log(player);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCAL_STORAGE_KEY);

player.setCurrentTime(+currentTime);
player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(event) {
  //   console.log(event);
  localStorage.setItem(LOCAL_STORAGE_KEY, event.seconds);
}
