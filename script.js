document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.modal__close');

    // Ouvrir la modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Fermer la modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});