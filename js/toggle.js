// Get the toggle switch and body element
document.addEventListener('DOMContentLoaded', function() {
const toggleSwitch = document.getElementById('toggle');
const body = document.body;

// Check the user's preference from localStorage (if available) when the page loads
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        toggleSwitch.checked = true;
    }
}

// Event listener for toggle switch change
toggleSwitch.addEventListener('change', () => {
    // Toggle the dark mode class on the body element
    body.classList.toggle('dark-mode');
    
    // Store the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
}
);
});


