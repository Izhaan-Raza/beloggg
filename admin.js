document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('savePostBtn').addEventListener('click', function () {
        const title = prompt('Enter the title of the new post:');
        const content = prompt('Enter the content of the new post:');

        if (title && content) {
            const newPost = {
                title,
                date: new Date().toDateString(),
                content
            };

            // Call the savePostToGitHub function from main.js with the new post data
            savePostToGitHub(newPost);
        } else {
            alert('Please enter both title and content.');
        }
    });
});
