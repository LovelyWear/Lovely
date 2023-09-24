// JavaScript for hover animation (script.js)
// This is a simple hover animation example

const cardImages = document.querySelectorAll('.card-img-top');

cardImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// Produk
// JavaScript untuk menangani animasi saat menghover produk
const products = document.querySelectorAll('.product');

products.forEach((product) => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.05)';
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});

// Kontak
// JavaScript untuk menangani animasi transisi saat mengirim pesan
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('kirim');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mengaktifkan animasi saat mengirim pesan
    contactForm.classList.add('animate-fade');

    // Simulasi pengiriman pesan (Anda bisa menggantinya dengan pengiriman yang sesungguhnya)
    setTimeout(() => {
        alert('Pesan telah dikirim!');
        contactForm.reset();
        contactForm.classList.remove('animate-fade');
    }, 2000); // 2 detik simulasi pengiriman
});
