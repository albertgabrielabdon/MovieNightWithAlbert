
const bodyBefore = document.querySelector('body::before');
const bodyAfter = document.querySelector('body::after'); 

let bgToggle = false;
setInterval(() => {
    if(bgToggle) {
        document.body.classList.remove('show-eternity');
    } else {
        document.body.classList.add('show-eternity');
    }
    bgToggle = !bgToggle;
}, 5000);


function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleImg = document.getElementById('togglePasswordImg');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleImg.src = "hide.png";
    } else {
        passwordInput.type = "password";
        toggleImg.src = "show.png"; 
    }
}


function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('errorMsg');

    if (password === "EternityWithLeanne") {
        window.location.href = "page1.html";
    } else if (password === "HamnetNeedsLeanne") {
        window.location.href = "page2.html";
    } else {
        errorMsg.textContent = "Wrong password! Please try again.";
        errorMsg.style.opacity = 1;
    }
}

const texts = [
    "What movie should we watch?",
    "Eternity is one of your favorite what ifs turned into a movie.",
    "Hamnet is William Shakespeare's child."
];

let currentText = 0;
const animatedDiv = document.getElementById('animatedText');

function showNextText() {
    animatedDiv.style.opacity = 0;

    setTimeout(() => {
        currentText = (currentText + 1) % texts.length;
        animatedDiv.textContent = texts[currentText];

        animatedDiv.style.opacity = 1;
    }, 800);
}

setInterval(showNextText, 3500);

