// Featured Program
const container = document.querySelector('#scrollContainer');

// 1. Triple the content to allow infinite left/right swiping
const initialContent = container.innerHTML;
container.innerHTML = initialContent + initialContent + initialContent;

let isDown = false;
let startX;
let currentTranslate = 0;

function getComputedTranslateX(obj) {
    const style = window.getComputedStyle(obj);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
}

const start = (e) => {
    isDown = true;
    container.classList.add('is-dragging');

    const currentX = getComputedTranslateX(container);
    container.style.transform = `translateX(${currentX}px)`;

    startX = (e.pageX || e.touches[0].pageX) - container.offsetLeft;
    currentTranslate = currentX;
};

const end = () => {
    if (!isDown) return;
    isDown = false;
    container.classList.remove('is-dragging');
    // Resume CSS animation from current position
    container.style.transform = '';
};

const move = (e) => {
    if (!isDown) return;

    const x = (e.pageX || (e.touches ? e.touches[0].pageX : 0)) - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    let newTransform = currentTranslate + walk;

    // 33.33% is the width of one original set of cards
    const thirdWidth = container.scrollWidth / 3;

    // IF swipe too far RIGHT (reaching the start)
    if (newTransform > 0) {
        newTransform -= thirdWidth;
        currentTranslate -= thirdWidth;
        startX = x;
    }
    // IF swipe too far LEFT (reaching the end)
    else if (newTransform < -(thirdWidth * 2)) {
        newTransform += thirdWidth;
        currentTranslate += thirdWidth;
        startX = x;
    }

    container.style.transform = `translateX(${newTransform}px)`;
};

// Event Listeners
container.addEventListener('mousedown', start);
window.addEventListener('mousemove', move);
window.addEventListener('mouseup', end);

container.addEventListener('touchstart', start, { passive: true });
window.addEventListener('touchmove', move, { passive: false });
window.addEventListener('touchend', end);