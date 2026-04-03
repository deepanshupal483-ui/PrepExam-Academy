/**
 * Opens a URL using JavaScript.
 */
function openLink(url) {
    window.location.href = url;
}

/**
 * Search/Filter Function
 */
function filterExams() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.update-card');

    cards.forEach(card => {
        let title = card.querySelector('.card-title').innerText.toLowerCase();
        let desc = card.querySelector('.card-desc').innerText.toLowerCase();

        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

/**
 * --- Theme Toggle Logic ---
 */
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check local storage for existing theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply new theme
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    updateToggleIcon(newTheme);
}

function updateToggleIcon(theme) {
    if (theme === 'dark') {
        themeToggleBtn.innerText = '☀️'; // Sun icon for switching back to light
    } else {
        themeToggleBtn.innerText = '🌙'; // Moon icon for switching to dark
    }
}

/**
 * --- Modal / Popup Logic ---
 */
const modal = document.getElementById('examModal');

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

// Close modal if user clicks outside the modal box (on the blurred background)
function closeModalOnOutsideClick(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Simulate form submission
function submitAlert() {
    const email = document.getElementById('alertEmail').value;
    if(email.includes('@')) {
        alert('Success! We will notify ' + email + ' when updates are available.');
        closeModal();
        document.getElementById('alertEmail').value = ''; // clear input
    } else {
        alert('Please enter a valid email address.');
    }
}