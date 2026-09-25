// Grab the toggle button
const themeToggle = document.getElementById("theme-toggle");

// Check if the user already picked a theme last time they visited
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

// When the button is clicked, flip the theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    // Swap the icon: moon for light mode, sun for dark mode
    themeToggle.textContent = isDark ? "☀️" : "🌙";

    // Remember the choice for next time
    localStorage.setItem("theme", isDark ? "dark" : "light");
});