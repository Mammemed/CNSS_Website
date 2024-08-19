document.getElementById('scrollLeft').addEventListener('click', function() {
    document.querySelector('.card-container').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

document.getElementById('scrollRight').addEventListener('click', function() {
    document.querySelector('.card-container').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});



