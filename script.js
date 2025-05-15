// Function to store user preferences in localStorage
function savePreferences(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preferences from localStorage
function getPreferences(key) {
    return localStorage.getItem(key);
}

// Function to trigger an animation
function triggerAnimation() {
    const box = document.getElementById('animatedBox');
    box.style.transition = 'transform 0.5s ease-in-out';
    box.style.transform = 'translateX(200px)';
    
    setTimeout(() => {
        box.style.transform = 'translateX(0)';
    }, 500);
}

// Event listener to save preferences, retrieve preferences, and trigger animation
document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const retrieveButton = document.getElementById('retrieveButton');
    const colorInput = document.getElementById('colorInput');
    const box = document.getElementById('animatedBox');
    const displayArea = document.getElementById('displayArea');

    // Load saved preferences on page load
    const savedColor = getPreferences('boxColor');
    if (savedColor) {
        box.style.backgroundColor = savedColor;
    }

    saveButton.addEventListener('click', () => {
        const color = colorInput.value;
        savePreferences('boxColor', color);
        box.style.backgroundColor = color;
        triggerAnimation();
    });

    retrieveButton.addEventListener('click', () => {
        const savedColor = getPreferences('boxColor');
        if (savedColor) {
            displayArea.textContent = `Saved Color: ${savedColor}`;
        } else {
            displayArea.textContent = 'No color saved.';
        }
    });
});