const toggle = document.getElementById('burgerToggle');
const content = document.getElementById('burgerContent');

toggle.addEventListener('click', () => {
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
 });