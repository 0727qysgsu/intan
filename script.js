// Inisialisasi AOS
AOS.init({ offset: 0 });

// Fungsi hamburger menu
function hamburg() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.display = 'block';
    navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    navbar.style.display = 'none';
}

// Fungsi untuk box click di education section
function boxClick(box) {
    box.style.transform = "scale(1.1)";
}

// Typewriter Effect
const texts = ["DEVELOPER", "DESIGNER"];
let speed = 100;
let textIndex = 0;
let charIndex = 0;

window.onload = function() {
    const textElements = document.querySelector(".typewriter-text");
    if (textElements) {
        typewriter(textElements);
    }
};

function typewriter(textElements) {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(() => typewriter(textElements), speed);
    } else {
        setTimeout(() => eraseText(textElements), 1000);
    }
}

function eraseText(textElements) {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(() => eraseText(textElements), 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(() => typewriter(textElements), 500);
    }
}

// Fungsi Zoom Project
function zoomProject(element) {
    element.classList.toggle('zoomed');
}

const zoomableImages = document.querySelectorAll(".zoomable");

zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
        const zoomedImg = document.createElement('img');
        zoomedImg.src = image.src;
        zoomedImg.style.position = 'fixed';
        zoomedImg.style.top = '50%';
        zoomedImg.style.left = '50%';
        zoomedImg.style.transform = 'translate(-50%, -50%) scale(1.5)';
        zoomedImg.style.zIndex = '9999';
        zoomedImg.style.cursor = 'zoom-out';
        zoomedImg.style.transition = 'transform 0.3s ease';
        
        document.body.appendChild(zoomedImg);

        zoomedImg.addEventListener('click', () => {
            zoomedImg.style.transform = 'translate(-50%, -50%) scale(1)';
            setTimeout(() => {
                document.body.removeChild(zoomedImg);
            }, 300);
        });
    });
});

function clickEffect(element) {
    element.style.transform = "scale(1.1)";
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 200); // Kembali ke ukuran semula setelah 200ms
}