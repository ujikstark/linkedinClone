const search = document.querySelector('.search_container');

search.addEventListener('click', () => {
    search.classList.add('active');
    document.querySelector('.input-search').focus();
    
    const main = document.querySelector('.main');
    const main_container = document.querySelector('.main_container');
    main.style.backgroundColor = 'black';
    main.style.opacity = 0.5;
    main_container.style.opacity = 0.5;
});

window.addEventListener('focusout', function() {
    if (!(document.querySelector('.input-search') == document.activeElement)) {

        search.classList.remove('active');
        const main = document.querySelector('.main');
        const main_container = document.querySelector('.main_container');
        main.style.opacity = 1;
        main.style.backgroundColor = '#f3f2ef';
        main_container.style.opacity = 1;
        
    }
    
});


const scrollFixed = () => {
    const fixed1 = document.querySelector('.main_card-2');
    const fixed2 = document.querySelector('.main_right--bottom')
    let scrollPos = window.scrollY;
    if (window.innerWidth >= 768 && scrollPos > 390) {
        fixed1.classList.add('active');
    }

    if (window.innerWidth >= 768 && scrollPos > 290) {
        fixed2.classList.add('active');
    }

    if (window.innerWidth < 768 || scrollPos < 390) {
        fixed1.classList.remove('active');
    }

    if (window.innerWidth < 768 || scrollPos < 290) {
        fixed2.classList.remove('active');
    }
};

window.addEventListener('scroll', scrollFixed);


