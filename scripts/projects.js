document.addEventListener('DOMContentLoaded', () => {

    const pmb = document.querySelector('.pmb');
    const promenu = document.querySelector('.promenu');
    const closebutton = document.querySelector('.pmclosebutton');

    pmb.addEventListener('click', () => {
        promenu.classList.toggle('show');
    });
    closebutton.addEventListener('click', () => {
        promenu.classList.remove('show');
    });
    document.addEventListener('click', (event) => {
        if (!promenu.contains(event.target) && !pmb.contains(event.target)) {
            promenu.classList.remove('show');
        }
    });
});
