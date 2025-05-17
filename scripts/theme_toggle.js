const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        toggle.checked = true;
}

toggle.addEventListener('change', () => {
        if (toggle.checked) {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
        } else {
                body.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
        }
});

