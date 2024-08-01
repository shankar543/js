document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const cardContainers = document.querySelectorAll('.card-container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            cardContainers.forEach(container => {
                if (container.id === targetTab) {
                    container.style.display = 'flex';
                } else {
                    container.style.display = 'none';
                }
            });
        });
    });

    // Set default tab
    document.querySelector('.tab[data-tab="strings"]').click();
});
