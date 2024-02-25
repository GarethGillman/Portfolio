const menu_toggle = document.getElementById('menu-toggle');
const menu_wrapper = document.getElementById('menu-wrapper');

if( menu_toggle ) {
    menu_toggle.addEventListener('click', function() {
        menu_wrapper.classList.toggle('hidden');
        menu_wrapper.classList.toggle('open');
    });
}