// header & mainVisual
(function(){
    // Scroll
    const header = document.querySelector("header");
    let locate;
    let currentLocate = 0;
    let lastLocate;

    function addClass(elem, className){
        elem.classList.add(className);
    }

    function removeClass(elem, className){
        elem.classList.remove(className);
    }

    function scrollHandler(){
        locate = window.pageYOffset;
        currentLocate = locate;

        if(locate == 0){
            removeClass(header, 'down');
        }
        else if(locate > 30 && locate < 200){
            addClass(header, 'down');
        }
        else if(locate > 200){
            header.style.transform = 'translateY(-100%)';
        }

        if(locate > 200 && lastLocate >= currentLocate){
            //up
            header.style.transform = 'translateY(0)';
        }

        lastLocate = locate;
    }

    window.addEventListener('scroll', scrollHandler);

    
    // Timing
    const images = document.querySelectorAll('.main-visual .main-con .image');
    const textH2 = document.querySelectorAll('.main-visual .main-con .coment h2');
    const textP = document.querySelectorAll('.main-visual .main-con .coment p');

    let currentImage = images[0];
    let currentH2 = textH2[0];
    let currentP = textP[0];

    let i = 0;

    addClass(images[0], 'zoomout');
    addClass(textH2[0], 'textH2');
    addClass(textP[0], 'textP');

    function changeElem(){
        i++;
        if(i > 2){
            i = 0;
        }
        addClass(currentImage, 'zoomin');

        currentImage = images[i];
        currentH2 = textH2[i];
        currentP = textP[i];

        addClass(images[i], 'zoomout');
        addClass(textH2[i], 'textH2');
        addClass(textP[i], 'textP');
    }

    function timingHandler(){
        if(currentImage.classList.contains('zoomin')){
            removeClass(currentImage, 'zoomin');
        }

        removeClass(currentImage, 'zoomout');
        removeClass(currentH2, 'textH2');
        removeClass(currentP, 'textP');
        
        changeElem();
    }
    let visualChange = window.setInterval(timingHandler, 6000);
    
    //Clcik
    const button = document.querySelector('.change-button');
    let button_icon = document.querySelector('.change-button i');    

    function changeButton(e){
        if(!e.target.classList.contains('fas')){
            return;
        }
        if(button_icon.classList.contains('fa-pause')){
            removeClass(button_icon, 'fa-pause');
            addClass(button_icon, 'fa-play');
            clearInterval(visualChange);
        }
        else if(button_icon.classList.contains('fa-play')){
            removeClass(button_icon, 'fa-play');
            addClass(button_icon, 'fa-pause');
            visualChange = window.setInterval(timingHandler, 6000);
        }
        else return;
    }

    function clickHandler(e){
        changeButton(e);
    }

    window.addEventListener('click', clickHandler);
})();

