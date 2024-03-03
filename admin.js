document.addEventListener('DOMContentLoaded', function () {
    const savePostBtn = document.getElementById('savePostBtn');

    savePostBtn.addEventListener('click', function () {
        const title = prompt('Enter the title of the new post:');
        const content = prompt('Enter the content of the new post:');

        if (title && content) {
            const newPost = {
                title,
                date: new Date().toDateString(),
                content
            };

            // Log the new post data to the console
            console.log('New Post:', newPost);
        } else {
            alert('Please enter both title and content.');
        }
    });
});
