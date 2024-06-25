document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const typingText = document.querySelector('.typing-text');
    const features = [
        "Bodybuilding",
        "Cardio Training",
        "Strength Training",
        "Personal Coaching",
        "Group Classes",
        "Nutritional Advice"
    ];
    let featureIndex = 0;
    let charIndex = 0;
    let isAdding = true;
    let typingTimer;

    function type() {
        if (isAdding) {
            // Typing
            if (charIndex <= features[featureIndex].length) {
                typingText.textContent = features[featureIndex].slice(0, charIndex);
                charIndex++;
                typingText.style.color = 'aqua'; // Change text color to blue
                typingTimer = setTimeout(type, 100);
            } else {
                // Finished typing, wait before erasing
                isAdding = false;
                clearTimeout(typingTimer);
                setTimeout(type, 1500); // Wait before erasing
            }
        } else {
            // Erasing
            if (charIndex >= 0) {
                typingText.textContent = features[featureIndex].slice(0, charIndex);
                charIndex--;
                typingText.style.color = 'aqua'; // Change text color to blue
                typingTimer = setTimeout(type, 100);
            } else {
                // Finished erasing, move to the next feature
                isAdding = true;
                featureIndex = (featureIndex + 1) % features.length;
                setTimeout(type, 1000); // Wait before typing next
            }
        }
    }

    type();
});

