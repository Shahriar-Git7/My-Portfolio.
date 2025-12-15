/*--------------------toggle navbar-------------------- */

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navLinks.classList.toggle('active');
}

/*--------------------scroll sections active link-------------------- */
let sections = document.querySelectorAll('section');
let navLinks2 = document.querySelectorAll('.nav-links a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks2.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

/*--------------------sticky navbar-------------------- */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*--------------------remove toggle icon and navbar when click navbar link (scroll)-------------------- */
    menuIcon.classList.remove('fa-xmark');
    navLinks.classList.remove('active');
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

/*--------------------scroll reveal-------------------- */
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/*--------------------typed js-------------------- */
const typed = new Typed('.multiple-text' , {
    strings: ['Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})


