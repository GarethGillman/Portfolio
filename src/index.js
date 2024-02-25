// Set Mode based on OS preferences
const dark_toggle = document.getElementById('dark-toggle');
const light_toggle = document.getElementById('light-toggle');

if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    dark_toggle.classList.add('hidden');
} else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    light_toggle.classList.add('hidden');
}

// Colour Mode Toggle
const colour_toggle = document.getElementById('colour-toggle');
if( colour_toggle ) {
    colour_toggle.addEventListener('click', function() {
        if(localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            dark_toggle.classList.remove('hidden');
            light_toggle.classList.add('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            dark_toggle.classList.add('hidden');
            light_toggle.classList.remove('hidden');
        }
    });
}
  
// Mobile Menu Toggle
const menu_toggle = document.getElementById('menu-toggle');
const menu_wrapper = document.getElementById('menu-wrapper');

if( menu_toggle ) {
    menu_toggle.addEventListener('click', function() {
        menu_wrapper.classList.toggle('hidden');
        menu_wrapper.classList.toggle('open');
    });
}