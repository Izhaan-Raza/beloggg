document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch and display blog posts
    function fetchAndDisplayPosts() {
        fetch('posts.json')
            .then(response => response.json())
            .then(posts => {
                posts.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Display each post on both the home and admin pages
                posts.forEach(post => {
                    displayPost(post, 'main-content');
                    displayPost(post, 'admin-content');
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Function to display a single blog post
    function displayPost(post, containerId) {
        const container = document.getElementById(containerId);

        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p class="post-meta">Published on ${post.date}</p>
            <div class="post-content">${post.content}</div>
        `;

        container.appendChild(article);
    }

    // Fetch and display posts when the page loads
    fetchAndDisplayPosts();
});
