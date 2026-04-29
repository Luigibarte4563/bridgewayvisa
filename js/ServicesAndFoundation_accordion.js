// services
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.accordion-icon');

            // FIX: Check if it's currently open (handling the initial empty state)
            const isOpen = content.style.maxHeight !== '0px' && content.style.maxHeight !== "";

            // Close all other sections
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.maxHeight = '0px';
            });
            document.querySelectorAll('.accordion-icon').forEach(i => {
                i.style.transform = 'rotate(0deg)';
            });

            // If it was closed, open it now
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});