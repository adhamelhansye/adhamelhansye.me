function toggleMenu(open) {
    const navbar = document.querySelector(".dropdown");
    if (navbar) {
        navbar.style.transform = open ? "translateY(0px)" : "translateY(-500px)";
    }
}

function hamburg() {
    toggleMenu(true);
}

function cancel() {
    toggleMenu(false);
}

const texts = [
    "Red Teamer",
    "Penetration Tester",
    "Malware Developer",
    "Binary Exploiter",
    "Threat Hunter"
];

let speed = 100;
const textElement = document.querySelector(".typewriter-text");

if (textElement) {
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < texts[textIndex].length) {
            textElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElement.textContent.length > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    window.onload = typeWriter;
}
