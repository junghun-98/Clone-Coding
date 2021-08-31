(function(){
    const headertop = document.querySelector('header');
    let lastPos = 0;

    function toggleNone(pos, last, elem){
        
        // up
        if(last >= pos){
            elem.classList.remove('none');
            console.log('up');
            console.log('p:' + pos);
            console.log('l:' + last);
        }
        // down
        else{
            elem.classList.add('none');
            console.log('down');

            console.log('p:' + pos);
            console.log('l:' + last);
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
    
    window.addEventListener('scroll', scrollHandler);
    
})();