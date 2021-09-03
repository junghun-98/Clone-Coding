// Scroll
(function(){
    const header = document.querySelector("header");
    let locate;
    let currentLocate = 0;
    let lastLocate;

    function addClass(elem, addclass){
        elem.classList.add(addclass);
    }

    function removeClass(elem, removeclass){
        elem.classList.remove(removeclass);
    }

    function scrollHandler(){
        locate = window.pageYOffset;
        console.log(locate);
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
})();