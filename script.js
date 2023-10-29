// JavaScript to add scroll event for fixing the navigation bar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222'; // Change the background color when scrolling
    } else {
        header.style.backgroundColor = 'rgba(0,0,0,0.01)'; // Reset to original color
    }
});