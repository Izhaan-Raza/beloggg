document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const date = new Date().toLocaleDateString();

        const newPost = {
            title,
            date,
            content,
        };

        // Call a function to save the post to your GitHub repo (to be implemented later)
        savePost(newPost);

        // Optionally, redirect to the home page after posting
        window.location.href = 'index.html';
    });

    // Function to save the post (to be implemented later)
    function savePost(post) {
        // This is where you'll implement the logic to save the post to your GitHub repo
        // For now, you can log the post to the console
        console.log('Post to be saved:', post);
    }
});
