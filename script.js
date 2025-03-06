document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrollPosition + 'px');
});