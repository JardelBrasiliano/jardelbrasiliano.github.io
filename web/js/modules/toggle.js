const cicle = document.querySelector('.circle')
cicle.addEventListener('click', toggle)

var audio = new Audio('../../web/audio/click.mp4');
console.log(audio);

function toggle() {
  audio.currentTime = 0;
  
  cicle.classList.toggle('clicked');
  const toggle = document.querySelector('.toggle');
  toggle.classList.toggle('clicked');
  
  console.log('lick');
  audio.play();
}

export default toggle;