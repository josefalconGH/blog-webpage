// Path: Assets/js/blog.js

// VARIABLES
const blogUL = $('#blogs-list');// get the ul element with id="blog-list"
let blogPosts = []; // create an empty array to store the blog posts

// apply the saved theme from localStorage
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme); // add the saved theme to the body

        const header = document.querySelector('header');
        if (header) header.classList.add(savedTheme); // add the saved theme to the header

        const toggleControl = document.querySelector('.custom-toggle-control');
        if (toggleControl) toggleControl.classList.add(savedTheme); // add the saved theme to the toggle control

        const circle = document.querySelector('.circle');
        if (circle) circle.classList.add(savedTheme); // add the saved theme to the circle

        document.querySelectorAll('.custom-form-control').forEach(function(element) {
            element.classList.add(savedTheme); // add the saved theme to the form control
        });

        document.querySelectorAll('.btn').forEach(function(element) {
            element.classList.add(savedTheme); // add the saved theme to the buttons
        });

        // Optionally, update the toggle switch state based on the theme
        const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
        if (toggleSwitch && savedTheme === 'dark-mode') {
            toggleSwitch.checked = true; // set the toggle switch to checked if the saved theme is dark-mode
        }
    }
}

// Call applyTheme function on page load
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
});

// loop through the blogPosts array
function renderBlogPosts() {
    
    const existingBlogs = JSON.parse(localStorage.getItem('blogPosts')); // pull already created blog posts from local storage

    // if there are no blog posts, return
    if (!existingBlogs && existingBlogs.length === 0) {return;}

    // loop through the existing posts and add them to the blogPosts array
    for (const post of existingBlogs) {
        const postItem = $('<li>');
        const postTitle = $('<h2>').text(post.title);
        const postContent = $('<p>').text(post.content);
        const postAuthor = $('<p>').text(`Posted by: ${post.username}`);

        postItem.append(postTitle, postContent, postAuthor);
        blogUL.append(postItem);
    }
}

// redirect to the index.html when the add-post button is clicked
$('#add-post').on('click', function() {
    window.location.assign('index.html');
});

renderBlogPosts(); // call the renderBlogPosts function to render the blog posts

