const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;

function toggleDarkMode() {
  const isDark = root.classList.toggle('dark');
  toggleButton.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

toggleButton.addEventListener('click', toggleDarkMode);