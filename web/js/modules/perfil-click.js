export default function clickPerfil(){
    const foto = document.querySelector('.turtle');
    let cont = 1;
    function mudarFoto(){
        cont++;
        if(cont == 4){
            cont = 1;
        }
        const atual = document.querySelector('.perfil');
        atual.src= "./web/img/perfil_"+ cont + ".png"
    }
    foto.addEventListener('click', mudarFoto);
}