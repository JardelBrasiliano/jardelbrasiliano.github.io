const cicle = document.querySelector('.circle')
cicle.addEventListener('click', toggle)

var audio = new Audio('../../web/audio/click.mp4');

function toggle() {
  audio.currentTime = 0;
  
  cicle.classList.toggle('clicked');
  const toggle = document.querySelector('.toggle');

  setTimeout(() => {toggle.classList.toggle('clicked');},[600])
  
  
  audio.play();
}

export default toggle;