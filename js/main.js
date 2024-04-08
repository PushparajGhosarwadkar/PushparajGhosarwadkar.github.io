/* JavaScript for Dark Mode Toggle */
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
    const body = document.body;

    darkModeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            darkModeToggleBtn.textContent = 'Toggle Light Mode';
        } else {
            darkModeToggleBtn.textContent = 'Toggle Dark Mode';
        }
    });

    /* Slowly reveal name and designation */
    const nameElement = document.getElementById('name');
    const designationElement = document.getElementById('designation');

    function revealText(element, text) {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= text.length) {
                element.textContent = text.slice(0, index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // 100 milliseconds per character
    }

    revealText(nameElement, 'John Doe');
    revealText(designationElement, 'Web Developer');
});
