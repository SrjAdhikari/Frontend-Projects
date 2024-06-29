// Select the settings menu element
const settingsMenu = document.querySelector('.settings-menu');

// Select the dark mode toggle button
const darkBtn = document.getElementById('dark-btn');

// Function to toggle the visibility of the settings menu
function settingsMenuToggle() {
    // Toggle the 'settings-menu-height' class to show/hide the menu
    settingsMenu.classList.toggle('settings-menu-height');
}

// Add an onclick event listener to the dark mode toggle button
darkBtn.onclick = function() {
    // Toggle the 'dark-btn-on' class to change the button's appearance
    darkBtn.classList.toggle('dark-btn-on');
    // Toggle the 'dark-theme' class on the body to switch the theme
    document.body.classList.toggle('dark-theme');

    // Check the current theme stored in local storage
    if(localStorage.getItem('theme') == 'light') {
        // If the current theme is light, change it to dark
        localStorage.setItem('theme', 'dark');
    } else {
        // Otherwise, change it to light
        localStorage.setItem('theme', 'light');
    }
}

// Check the current theme stored in localStorage when the page loads
if(localStorage.getItem('theme') == 'light') {
    // If the theme is light, remove dark mode classes
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
} else if(localStorage.getItem('theme') == 'dark') {
    // If the theme is dark, add dark mode classes
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
} else {
    // If no theme is stored in localStorage, set the theme to 'light'
    localStorage.setItem('theme', 'light');
}
