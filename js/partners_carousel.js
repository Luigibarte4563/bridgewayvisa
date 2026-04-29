const container = document.querySelector('#scrollContainer');

// 1. Triple the content so [A, B, C] exists.
// This ensures that when the "tail" of Set A moves, the "head" of Set B is right behind it.
const initialContent = container.innerHTML;
container.innerHTML = initialContent + initialContent + initialContent;

// 2. Add the animation class AFTER the content is tripled
container.classList.add('animate-infinite-scroll');

let isDown = false;
let startX;
let currentTranslate = 0;

// Helper to get the exact pixel position during an active CSS animation
function getComputedTranslateX(obj) {
    const style = window.getComputedStyle(obj);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

const start = (e) => {
    isDown = true;
    container.classList.add('is-dragging');
    
    // Capture exactly where the carousel is at this millisecond
    const currentX = getComputedTranslateX(container);

    // Disable CSS animation so it doesn't fight the user's hand
    container.style.animation = 'none';
    container.style.transform = `translateX(${currentX}px)`;

    startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
    currentTranslate = currentX;
};

const move = (e) => {
    if (!isDown) return;
    if (e.cancelable) e.preventDefault();

    const x = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - container.offsetLeft;
    const walk = (x - startX) * 1.2; 
    let newTransform = currentTranslate + walk;

    // The width of one original set of cards
    const setWidth = container.scrollWidth / 3;

    // --- INFINITE TELEPORTATION LOGIC ---
    // This allows the user to drag left or right forever.
    if (newTransform > 0) {
        newTransform -= setWidth;
        currentTranslate -= setWidth;
        startX = x;
    } else if (newTransform < -setWidth) {
        newTransform += setWidth;
        currentTranslate += setWidth;
        startX = x;
    }

    container.style.transform = `translateX(${newTransform}px)`;
};

const end = () => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove('is-dragging');

    // --- DYNAMIC SPEED SYNC ---
    // This reads your --scroll-speed variable directly from the CSS
    const style = window.getComputedStyle(container);
    const userSpeed = style.getPropertyValue('--scroll-speed').trim() || '10s';

    // Resume the infinite scroll using the CSS-defined speed
    container.style.animation = `scroll ${userSpeed} linear infinite`;
    container.style.transform = '';
};

// Event Listeners
container.addEventListener('mousedown', start);
window.addEventListener('mousemove', move);
window.addEventListener('mouseup', end);
container.addEventListener('touchstart', start, { passive: true });
window.addEventListener('touchmove', move, { passive: false });
window.addEventListener('touchend', end);