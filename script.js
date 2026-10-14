document.addEventListener('DOMContentLoaded', () => {

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
        }
    });


    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const fontReset = document.getElementById('font-reset');

    let currentFontSize = 16;

    fontIncrease.addEventListener('click', () => {
        if (currentFontSize < 22) {
            currentFontSize += 2;
            document.documentElement.style.fontSize = currentFontSize + 'px';
        }
    });

    fontDecrease.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.documentElement.style.fontSize = currentFontSize + 'px';
        }
    });

    fontReset.addEventListener('click', () => {
        currentFontSize = 16;
        document.documentElement.style.fontSize = currentFontSize + 'px';
    });


    console.log("Welcome to Dorant Anthony Esty Jr's Portfolio! Built for performance, accessibility, and clean design.");
});