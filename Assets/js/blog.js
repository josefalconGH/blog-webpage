// Path: Assets/js/blog.js

// VARIABLES
const blogUL = $('#blogs-list');// get the ul element with id="blog-list"
let blogPosts = []; // create an empty array to store the blog posts

// loop through the blogPosts array
function renderBlogPosts() {
    
    const existingBlogs = JSON.parse(localStorage.getItem('blogPosts')); // pull already created blog posts from local storage

    // if there are no blog posts, return
    if (!existingBlogs) {
        return;
    }

    // loop through the existing posts and add them to the blogPosts array
    for (const post of existingBlogs) {
        const postItem = $('<li>');
        const postTitle = $('<h2>').text(post.title);
        const postContent = $('<p>').text(post.content);
        const postDate = $('<p>').text(post.date);

        postItem.append(postTitle, postContent, postDate);
        blogUL.append(postItem);
    }
}

renderBlogPosts(); // call the renderBlogPosts function to render the blog posts

// this code is to redirect the user to the blog.html page
document.getElementById('add-post').addEventListener('click', function() {
    window.location.assign('index.html');
});

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