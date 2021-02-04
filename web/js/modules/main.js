const cicle = document.querySelector('.circle')
cicle.addEventListener('click', toggle)

function toggle() {

  cicle.classList.toggle('clicked');
  const toggle = document.querySelector('.toggle');
  console.log(toggle);
  toggle.classList.toggle('clicked');
}

export default toggle;