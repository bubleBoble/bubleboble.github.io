function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme');
    const body = document.body;
    const button = document.getElementById('theme-toggle');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        button.textContent = '☀️';
    } else {
        body.classList.remove('dark-theme');
        button.textContent = '🌙';
    }

    button.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            button.textContent = '🌙';
            setCookie('theme', 'light', 30);
        } else {
            body.classList.add('dark-theme');
            button.textContent = '☀️';
            setCookie('theme', 'dark', 30);;
        }
    });
});
