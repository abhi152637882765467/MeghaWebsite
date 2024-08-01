document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.falling-hearts');
    const redirectUrl = 'inside-my-heart.html'; // Updated URL to the new page

    function createHearts() {
        for (let i = 0; i < 20; i++) { // Adjust the number of hearts as needed
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            heart.style.top = `${Math.random() * 100}vh`;  // Random vertical position
            heart.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random falling speed

            // Add click event to heart
            heart.addEventListener('click', () => {
                window.location.href = redirectUrl;
            });

            heartsContainer.appendChild(heart);
        }
    }

    createHearts();
});
