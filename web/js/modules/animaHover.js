const email = document.querySelector('.header-contato-email');
const barra = document.querySelector('.header-contato-email-anima')

email.addEventListener('mouseover', () => barra.style.height = '23px');
email.addEventListener('mouseout', () => barra.style.height = '');
/********/
const imagens = document.querySelectorAll('.header-liga-desliga-image');
imagens.forEach((imagem) => {
  imagem.addEventListener('mouseover', () => animaLampadaInicial(imagem))
})

function animaLampadaInicial(elemnt) {
  if (!elemnt.style.animationName) {
    elemnt.style.animationName = 'lampadaAnimacao';
    setTimeout(() => {elemnt.style.animationName = ''}, 3000)
  }
}