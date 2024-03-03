document.addEventListener('DOMContentLoaded', function () {
    // GitHub repository information
    const username = 'Izhaan-Raza';
    const repoName = 'beloggg';
    const branchName = 'main';
    const filePath = 'posts.json';
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents/${filePath}`;

    // Function to fetch and display blog posts
    function fetchAndDisplayPosts() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(responseData => {
                const posts = JSON.parse(atob(responseData.content));

                // Sort posts by date in descending order (most recent first)
                posts.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Display each post
                posts.forEach(post => {
                    displayPost(post);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Function to display a single blog post
    function displayPost(post) {
        const main = document.querySelector('main');

        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p class="post-meta">Published on ${post.date}</p>
            <div class="post-content">${post.content}</div>
        `;

        main.appendChild(article);
    }

    // Function to save a post to GitHub
    function savePostToGitHub(post) {
        const token = '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';
        const message = 'Add a new blog post';
        const content = JSON.stringify(post);
        const b64content = btoa(content);

        // Fetch the current file content
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => response.json())
        .then(responseData => {
            const sha = responseData.sha;

            // Update the file content
            return fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message,
                    content: b64content,
                    sha
                })
            });
        })
        .then(response => response.json())
        .then(() => {
            // Reload the page to display the updated posts
            location.reload();
        })
        .catch(error => console.error('Error saving post:', error));
    }

    // Fetch and display posts when the page loads
    fetchAndDisplayPosts();

    // Example: Save a new post on button click
    document.getElementById('savePostBtn').addEventListener('click', function () {
        const newPost = {
            title: 'New Blog Post',
            date: new Date().toDateString(),
            content: '<p>This is a new blog post.</p>'
        };

        // Call the savePostToGitHub function with the new post data
        savePostToGitHub(newPost);
    });
});
