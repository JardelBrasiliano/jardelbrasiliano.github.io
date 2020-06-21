export default function animaPorco2(){
    function volta(frame){
        const porco = document.querySelector('.porco2');

        let interval = setInterval(function(){      
            frame = frame + 1;
            document.querySelector(".porco2").style.top = frame + "px";
            
            if( frame > 100){
                clearInterval(interval);
            }
        }, 200);
        
    }
    function anima(){ 
        const porco = document.querySelector('.porco2');
        const card = document.querySelector('.card');
        
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        
        porco.style.right = (windowWidth/2)-150;
        porco.style.top = (windowHeight/2)-200;
        
        let frame = (windowHeight/2)-200;
        const pare = (windowHeight/10);
        
        let interval = setInterval(function(){            
            frame = frame-5;
            document.querySelector(".porco2").style.top = frame+"px";
            
            if( frame < pare){
                clearInterval(interval);
                volta(frame);
            }
        }, 200);
    }
    const porco2 = document.querySelector(".porco");
    porco2.addEventListener('click',anima);
}