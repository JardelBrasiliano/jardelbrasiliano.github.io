import listaProjetos from '../services/projetos.js';

const verTodos = `
    <div class="projeto-content-ver-tudo">
      <a class="projeto-ver-tudo" href="https://github.com/JardelBrasiliano?tab=repositories">Ver todos</a>
    </div>
  `

function montaHtml( titulo, link, sobre, topicos) {
  let listaAtual = document.querySelector('.projeto-contents-lista');
  let textoTopico = ''

  for (const topico of topicos) {
    textoTopico = textoTopico + `<div class="projeto-projeto-box"><p>${topico}</p></div>`
  }

  const htmlProjeto = `
    <li class="projeto-projeto">
      <div class="projeto-projeto-content-nome">
        <a href="${link}" class="projeto-projeto-nome">${titulo}</a>
      </div>
      <p class="projeto-projeto-descricao">${sobre}</p>
      <div class="projeto-projeto-content-box">
  `
  const htmlFinal = htmlProjeto + textoTopico + `</li>`;

  listaAtual.innerHTML = listaAtual.innerHTML + htmlFinal;
}

for (const key in listaProjetos) {
  const projeto = listaProjetos[key];

  montaHtml(projeto.name, projeto.url, projeto.descricao, projeto.topicos)
}

let listaAtual = document.querySelector('.projeto-contents-lista');
listaAtual.innerHTML = listaAtual.innerHTML + verTodos;