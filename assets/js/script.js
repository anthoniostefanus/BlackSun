// Loading pages
window.addEventListener('load', function() {
    // Simulasikan waktu loading dengan delay
    setTimeout(function() {
        // Tambahkan kelas fade-out untuk animasi
        document.getElementById('loading-container').classList.add('fade-out');
        
        // Tampilkan konten utama setelah delay
        setTimeout(function() {
            document.getElementById('loading-container').style.display = 'none';
            const content = document.getElementById('content');
            content.style.display = 'block';
            content.classList.add('show');
        }, 1000); // Durasi fade-out harus sesuai dengan animasi fade-out di CSS
    }, 3000); // Ganti 3000 dengan waktu loading yang diinginkan (dalam milidetik)
});
// 

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Toggle fullscreen menu
    function toggleMenu() {
        fullscreenMenu.classList.toggle('show');
    }

    menuToggle.addEventListener('click', toggleMenu);
    fullscreenMenu.querySelector('.close').addEventListener('click', toggleMenu);

    // Slideshow functionality
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Change slides every 5 seconds
    setInterval(nextSlide, 500);

    // Optional: Add navigation for slides if needed
    // document.querySelector('.prev').addEventListener('click', prevSlide);
    // document.querySelector('.next').addEventListener('click', nextSlide);
});

document.querySelector('.arrow').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, // Ganti ini dengan posisi yang diinginkan
        behavior: 'smooth'
    });
});

