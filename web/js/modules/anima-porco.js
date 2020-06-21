export default function animaPorco(){
    /*
    function animaRight(){
        let frame = 1;
        let interval = setInterval(function(){
            frame++;
            document.querySelector(".porco").
                src="./web/img/volta_"+frame+".png";
            if(frame > 2){
                frame=1;
            }
        }, 500);
    }*/
    function andaRight(){ 
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        let frame = windowWidth;
        let cont = 1;

        let interval = setInterval(function(){
            let test = document.querySelector( '.section1');
            if(test){
                frame = frame-50;
                cont++;

                document.querySelector(".porco").
                src="./web/img/volta_"+cont+".png";
                if(cont > 2){
                    cont=1;
                }

                document.querySelector(".porco").style.right = frame+"px";
                if( frame < -180){
                    clearInterval(interval);
                    andaLeft();
                }
            }else{
                clearInterval(interval);
            }
        }, 500);
    }/*
    function animaLeft(){
        let frame = 1;
        let interval = setInterval(function(){
            frame++;
            document.querySelector(".porco").
                src="./web/img/"+frame+".png";
            if(frame > 2){
                frame=1;
            }
        }, 500);
    }*/
    function andaLeft(){

        let windowWidth = window.innerWidth;

        let frame = -150;
        let cont = 1;
        let interval = setInterval(function(){
            let test = document.querySelector( '.section1');
            if(test){
                
                cont++;

                document.querySelector(".porco").
                    src="./web/img/"+cont+".png";
                if(cont > 2){
                    cont=1;
                }

                document.querySelector(".porco").style.right = frame+"px";
                if( frame > windowWidth+150){
                    clearInterval(interval);
                    andaRight();    
                }
                frame = frame+50;
            }else{
                clearInterval(interval);
            }
        }, 500);
    }
    andaLeft();
    
}