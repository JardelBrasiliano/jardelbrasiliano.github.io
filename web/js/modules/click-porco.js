export default function clickPorco(){
    const porco = document.querySelector(".porco");

    function remover(){
        const section = document.querySelector(".section1");
        const section2 = document.querySelector(".section2");

        const tela = document.querySelector(".tela-inicial-blue");

        section.parentNode.removeChild( section );
        tela.classList.add('tela-inicial-white');
        tela.classList.remove('tela-inicial-blue');

        section2.classList.remove('ativo');
    }
    porco.addEventListener('click',remover);
}