document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('savePostBtn').addEventListener('click', function () {
        const titleInput = document.getElementById('postTitle');
        const contentInput = document.getElementById('postContent');

        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title && content) {
            const newPost = {
                title,
                date: new Date().toDateString(),
                content
            };

            // Call the savePostToGitHub function from main.js with the new post data
            savePostToGitHub(newPost);

            // Clear input fields after saving
            titleInput.value = '';
            contentInput.value = '';
        } else {
            alert('Please enter both title and content.');
        }
    });
});
