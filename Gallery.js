const imageList = [
    '4ecd6190-a6e9-4d91-b79b-d2540d7d5f01.jpg',
    'deer-3275594_640.webp',
    'Your_reaction_at_this_moment.jpg',
    '7e64dca7-d881-4e67-b71d-556e3b86588a.jpg',
    'dramatic-chess-piece.jpg',
    '4850268f-c270-41c3-9b8e-f36bbf68bd10.jpg',
    '5319dc9e-9594-4dbd-8940-19b57f4bcec1.jpg',
    '655cac61-0961-464d-96b2-3e2a74dd896c.jpg',
    '—Pngtree—red and black cybersecurity shield_20704277.png',
    '91bcbb8d-1ca4-4886-9fe3-1e61702257fa.jpg',
    '1210f4c4-80ec-48f9-a246-8dcce8d2290d.jpg',
    '48499ace-9ff3-4178-b64d-5beea6ad5daa.jpg',
    'aptech-logo.jpg',
    'cloth1.jpg',
    'wall4.jpg',
    'wshoe2.jpg',
    'wshoe1.jpg',
    'WhatsApp Image 2025-04-29 at 20.56.46_45134585.jpg',
    'wall6.jpg',
    'wall5.jpg',
    'wall4.jpg',
    'wall3.jpg',
    'wall1.jpg',
    'wall2.jpg',
    'toxic-img.jpg',
    'ytlogo.png',
    '03951bcd-35ac-4e6c-a2c6-fe144ed81ffe.jpg',
    '7206021f-61c3-444d-af8a-c3d80c4f13fa.jpg',
];

let index = 0;
const batchSize = 8;
const gallery = document.getElementById('gallery');
const loadBtn = document.getElementById('loadMore');

let shuffled = [];

function shuffleImages() {
    shuffled = [...imageList].sort(() => 0.5 - Math.random());
}

function loadNextBatch() {
    const nextImages = shuffled.slice(index, index + batchSize);
    nextImages.forEach((src, i) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.style.animationDelay = `${(index + i) * 0.05}s`;

        card.innerHTML = `
      <img src="${src}" alt="Gallery Image">
      <a href="${src}" download class="download-btn">Download</a>
    `;
        gallery.appendChild(card);
    });

    index += batchSize;
    if (index >= shuffled.length) loadBtn.style.display = 'none';
}

function refreshGallery() {
    gallery.innerHTML = '';
    index = 0;
    shuffleImages();
    loadNextBatch();
    loadBtn.style.display = 'block';
}

// Initialize
shuffleImages();
loadNextBatch();

loadBtn.addEventListener('click', loadNextBatch);
document.getElementById('refreshBtn').addEventListener('click', refreshGallery);

// Light/Dark Mode
const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

function setMode(mode) {
    if (mode === 'dark') {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
setMode(savedTheme);
toggleBtn.onclick = () => {
    setMode(body.classList.contains('dark') ? 'light' : 'dark');
};
