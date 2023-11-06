const images = document.querySelectorAll('thumbnail');
const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = thumbnail.src;
  
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}
