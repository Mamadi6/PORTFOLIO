const toggle = document.getElementById('burgerToggle');
const content = document.getElementById('burgerContent');
const photo = document.querySelector('.photo').forEach(photo =>{

photo.addEventListener('mouseenter', () => {
    photo.classList.add('active');
});
photo.addEventListener('mouseleave', () => {
    photo.classList.remove('active');
});
});

toggle.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
 });

 const typed = new Typed('.multiple-text', {

    strings: ['Developepeur web', 'Frontend', 'Backend', 'Etudiant IESIG'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
 const Slogan = new Typed('.slogan', {

    strings: ['Créez l\'avenir du web avec moi', 'Votre projet , ma mission','Transformez vos idées en expériences digitales'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Scroll reveal( animation au scroll: reset se joue a chaque scroll, distance de l'animation, duration duree de l'animation, delay delai avant le debut de l'animation)
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.nom, .fonction, .description, .titre', { origin: 'top' });
ScrollReveal().reveal('#apropos, #competence, #projet, #contact', { origin: 'bottom' });
ScrollReveal().reveal('.left', { origin: 'left' });
ScrollReveal().reveal('.interets-item, .photo, experience-item', { origin: 'right' });