/* =====================================
   PERSONALIZATION
===================================== */

const CONFIG = {

    // Change these
    herName: "Her Name",

    yourName: "Your Name",

};


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("introName").textContent =
        CONFIG.herName;

    document.getElementById("birthdayName").textContent =
        CONFIG.herName;

    document.getElementById("proposalName").textContent =
        CONFIG.herName;

    document.getElementById("footerName").textContent =
        CONFIG.herName;

    createParticles();

});


/* =====================================
   SCREEN NAVIGATION
===================================== */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });

    const target =
        document.getElementById(id);

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================
   SURPRISE FLOW
===================================== */

function openSurprise() {

    showScreen("birthday");

}


function showGift() {

    showScreen("gift");

}


function openGift() {

    const box =
        document.getElementById("giftBox");

    box.style.transform =
        "scale(0.85) rotate(-4deg)";

    setTimeout(() => {

        document
            .getElementById("giftMessage")
            .classList.add("show");

        box.style.display = "none";

        document
            .querySelector("#gift .hint")
            .style.display = "none";

    }, 500);

}


function showStory() {

    showScreen("story");

}


function showSecret() {

    showScreen("secret");

}


function showProposal() {

    showScreen("proposal");

    createHeartBurst();

}


/* =====================================
   RESPONSE
===================================== */

function sayYes() {

    const response =
        document.getElementById("response");

    response.innerHTML = `
        ❤️ You just made this birthday
        proposal very special.

        <br><br>

        I'll remember this one.
    `;

    createHeartBurst();

}


function needTime() {

    const response =
        document.getElementById("response");

    response.innerHTML = `
        That's completely okay. ❤️

        <br><br>

        Take all the time you need.
        I just wanted to be honest with you.
    `;

}


/* =====================================
   BACKGROUND PARTICLES
===================================== */

function createParticles() {

    const container =
        document.getElementById("particles");

    const symbols = [
        "♡",
        "✦",
        "·",
        "♥"
    ];

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.fontSize =
            (8 + Math.random() * 16) + "px";

        particle.style.animationDuration =
            (7 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        container.appendChild(particle);

    }

}


/* =====================================
   HEART BURST
===================================== */

function createHeartBurst() {

    const symbols = [
        "❤️",
        "♡",
        "✨",
        "♥"
    ];

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.fontSize =
            (14 + Math.random() * 20) + "px";

        heart.style.zIndex =
            "100";

        heart.style.pointerEvents =
            "none";

        document.body.appendChild(heart);

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 200;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    1200 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}
