console.log('%c Oh, hello curious person,', 'background: lightgreen; color:blue; font-weight: bold; font-size: 12px; padding:0.5em',' I hope you enjoy your visit to the console //', ' （＾・ω・＾❁）');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link =>{
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    });
});