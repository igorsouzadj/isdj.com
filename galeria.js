document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    const galleryImages = document.querySelectorAll('.gallery-image');

    function checkImages() {
        galleryImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                img.classList.add('blurred');
            } else {
                img.classList.remove('blurred');
            }
        });
    }

    function updateScroll() {
        galleryContainer.style.setProperty('--scroll', galleryContainer.scrollTop);
    }

    galleryContainer.addEventListener('scroll', function() {
        checkImages();
        updateScroll();
    });

    checkImages();
    updateScroll();
});