// Path: Assets/js/form.js
// get the form element with id="blog-form"
const blogForm = $('#blog-form');

blogForm.on('submit', function(event) {
    event.preventDefault(); // prevent the default form submission

    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || []; // get the blogPosts from the localStorage

    // create a newBlogPost object
    const newBlogPost = {
        username: blogForm.find('input[name="username"]'),
        blogTitle: blogForm.find('input[name="blogTitle"]'),
        blogText: blogForm.find('textarea[name="blogText"]')
    };

    if (!newBlogPost.username || !newBlogPost.blogTitle || !newBlogPost.blogText) {return;} // if any of the fields are empty, return

    // create a new blogData object
    const blogData = {
        username: newBlogPost.username.val().trim(),
        blogTitle: newBlogPost.blogTitle.val().trim(),
        blogText: newBlogPost.blogText.val()
    };

    // blogData entry field validation
    // if any of the fields are empty, return an alert
    if (blogData.username === '' || blogData.blogTitle === '' || blogData.blogText === '' ) {
        return;
    }

    // clear the form fields
    newBlogPost.username.val('');
    newBlogPost.blogTitle.val('');
    newBlogPost.blogText.val('');

    blogPosts.push(blogData); // add the new blogData object to the blogPosts array

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts)); // save the blogPosts array to the localStorage

    window.location.assign('blog.html'); // redirect the user to the blog.html page
});

// add redirect funtionality to the blog.html page when View Blog button is clicked
document.getElementById('view-blogs').addEventListener('click', function() {
    window.location.assign('blog.html');
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