(function(){
    const headertop = document.querySelector('header');
    let lastPos = 0;

    function toggleNone(pos, last, elem){
        // up
        if(last >= pos){
            elem.classList.remove('none');
        }
        // down
        else{
            elem.classList.add('none');
        }
    }

    function removePadding(elem){
        elem.classList.add('delpadding');
    }

    function addPadding(elem){
        elem.classList.remove('delpadding');
    }
    
    function scrollHandler(){
        let posY = window.pageYOffset;
        
        if(posY == 0 && headertop.classList.contains('delpadding')){
            addPadding(headertop);
        }
        else if(posY > 30 && posY < 200){
            removePadding(headertop);
        }
        else if(posY > 200){
            toggleNone(posY, lastPos, headertop);
        }
        
        lastPos = posY;
    }
    
    document.addEventListener('scroll', scrollHandler);
    
})();

(function(){
    const parent = document.querySelector('.every');

    const images = document.querySelectorAll('.mainimage');
    const comentsH = document.querySelectorAll('.coment h2');
    const comentsP = document.querySelectorAll('.coment p');

    console.log(comentsH);

    let currentimg = images[0];
    let currentcomH= comentsH[0];
    let currentcomP= comentsP[0];

    let i = 0;

    images[0].classList.add('visable');
    comentsH[0].classList.add('uppon');
    comentsP[0].classList.add('uppon');

    function changeVisual(){
        i++;
        if(i > 2){
            i = 0;
        }
        currentimg.classList.remove('visable');
        currentcomH.classList.remove('uppon');
        currentcomP.classList.remove('uppon');

        currentimg = images[i];
        currentcomH = comentsH[i];
        currentcomP = comentsP[i];

        currentimg.classList.add('visable');
        currentcomH.classList.add('uppon');
        currentcomP.classList.add('uppon');
    }
    
    window.setInterval(changeVisual, 8000);
})();