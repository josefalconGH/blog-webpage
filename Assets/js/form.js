// Path: Assets/js/form.js

// this code is to toggle the light/dark mode functionality of the website
// this uses the document.getElementById method to get the element with id="flexSwitchCheckDefault"
// the addEventListener method is used to listen for the change event on the toggle switch at the top of the page
document.getElementById('flexSwitchCheckDefault').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');

        document.querySelector('header').classList.remove('light-mode');
        document.querySelector('header').classList.add('dark-mode');

        document.querySelector('.custom-toggle-control').classList.remove('light-mode');
        document.querySelector('.custom-toggle-control').classList.add('dark-mode');

        document.querySelector('.circle').classList.remove('light-mode');
        document.querySelector('.circle').classList.add('dark-mode');

        document.querySelectorAll('.custom-form-control').forEach(function(element) {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        });

        document.querySelectorAll('.btn').forEach(function(element) {
            element.classList.remove('light-mode');
            element.classList.add('dark-mode');
        });
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');

        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('header').classList.add('light-mode');

        document.querySelector('.custom-toggle-control').classList.remove('dark-mode');
        document.querySelector('.custom-toggle-control').classList.add('light-mode');

        document.querySelector('.circle').classList.remove('dark-mode');
        document.querySelector('.circle').classList.add('light-mode');

        document.querySelectorAll('.custom-form-control').forEach(function(element) {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        });

        document.querySelectorAll('.btn').forEach(function(element) {
            element.classList.remove('dark-mode');
            element.classList.add('light-mode');
        });
    }
});