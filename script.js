// Ambil form
const form = document.getElementById('contactForm');

// Event submit
form.addEventListener('submit', function(e) {
  e.preventDefault(); // cegah reload halaman
  alert("Terima kasih telah menghubungi saya!");
  form.reset(); // kosongkan input setelah kirim
});