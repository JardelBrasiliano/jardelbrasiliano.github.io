const email = document.querySelector('.header-contato-email');
const barra = document.querySelector('.header-contato-email-anima')

email.addEventListener('mouseover', animaNome);
email.addEventListener('mouseout', animaNome);

function animaNome() {
  console.log('função');
  barra.classList.toggle('hover')
}

const imagens = document.querySelectorAll('.header-liga-desliga-image');
imagens.forEach((imagem) => {
  imagem.addEventListener('mouseover', () => animaLampadaInicial(imagem))
})

function animaLampadaInicial(elemnt) {
  elemnt.style.animationName = 'lampadaAnimacao';
  setTimeout(() => {elemnt.style.animationName = ''}, 3000)
}

export default animaNome;