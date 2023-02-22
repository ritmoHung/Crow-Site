// Detect color scheme
// Order: Local Storage > OS theme
const detectColorScheme = () => {
    // Defaults as dark
    var theme = "dark";

    // ...if OS theme is light
    if(window.matchMedia("(prefers-color-scheme: light)").matches)
        var theme = "light";
    // ...if local storage is light
    if(localStorage.getItem("data-user-theme") == "light")
        var theme = "light";
    else
        var theme = "dark";

    document.documentElement.setAttribute("data-user-theme", theme);
}
detectColorScheme();



// Twemoji
const emo = () => {
    twemoji.parse(document.body, {
        folder: "svg", 
        ext: ".svg"
    });
}
window.addEventListener('load', emo);



// Button: Toggle color scheme
const toggleTheme = () => {
    var theme = document.documentElement.getAttribute("data-user-theme");
    if(theme == "dark") theme = "light";
    else if(theme == "light") theme = "dark";

    document.documentElement.setAttribute("data-user-theme", theme);
    localStorage.setItem("data-user-theme", theme);
}



// Navbar background color
const getVH = () => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return vh;
}
window.onscroll = function(event) {
    var navbar = document.getElementById('main-navbar');
    var scroll = window.scrollY;
    var breakpoint = 0.05 * getVH();
    if(scroll < breakpoint) {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('drop-shadow');
    }
    else {
        navbar.style.backgroundColor = 'var(--navbar-color)';
        navbar.classList.add('drop-shadow');
    }
}