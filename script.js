```javascript
/* =========================================
   PERSONAL INFORMATION
========================================= */

const CONFIG = {

    herName: "Chandani",

    yourName: "Dev"

};



/* =========================================
   FORMSPREE NOTIFICATION
========================================= */

// Put your REAL Formspree endpoint here
const NOTIFICATION_URL =
    "https://formspree.io/f/abcdwxyz";



/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .getElementById("introName")
            .textContent =
            CONFIG.herName;


        document
            .getElementById("birthdayName")
            .textContent =
            CONFIG.herName;


        document
            .getElementById("proposalName")
            .textContent =
            CONFIG.herName;


        document
            .getElementById("footerName")
            .textContent =
            CONFIG.herName;


        createParticles();

    }
);



/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(
            screen => {

                screen.classList.remove(
                    "active"
                );

            }
        );


    const target =
        document.getElementById(id);


    if (!target) return;


    target.classList.add(
        "active"
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =========================================
   SURPRISE FLOW
========================================= */

function openSurprise() {

    showScreen(
        "birthday"
    );

}


function showGift() {

    showScreen(
        "gift"
    );

}


function showStory() {

    showScreen(
        "story"
    );

}


function showSecret() {

    showScreen(
        "secret"
    );

}


function showProposal() {

    showScreen(
        "proposal"
    );

    createHeartBurst();

}



/* =========================================
   GIFT
========================================= */

function openGift() {

    const box =
        document.getElementById(
            "giftBox"
        );


    const message =
        document.getElementById(
            "giftMessage"
        );


    const hint =
        document.getElementById(
            "giftHint"
        );


    box.style.transform =
        "scale(0.8) rotate(-5deg)";


    setTimeout(
        () => {

            box.style.display =
                "none";


            hint.style.display =
                "none";


            message.classList.add(
                "show"
            );

        },

        400
    );

}



/* =========================================
   📧 SEND NOTIFICATION
========================================= */

async function sendNotification(choice) {

    try {

        const isYes =
            choice === "YES";


        const subject =
            isYes
                ? "❤️ CHANDANI CLICKED YES!"
                : "😐 CHANDANI CLICKED NO!";


        const message =
            isYes

                ? `
❤️ SHE CLICKED YES!

Chandani clicked YES on Dev's birthday proposal website.

This means she accepted the date. 🥹❤️

Choice: YES

Time:
${new Date().toLocaleString()}
`

                : `
😐 SHE CLICKED NO!

Chandani clicked NO on Dev's birthday proposal website.

The No button ran away. 😂

Choice: NO

Time:
${new Date().toLocaleString()}
`;


        const response =
            await fetch(
                NOTIFICATION_URL,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Accept":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            subject:
                                subject,

                            name:
                                CONFIG.herName,

                            choice:
                                choice,

                            message:
                                message,

                            clickedAt:
                                new Date()
                                    .toLocaleString()

                        })

                }
            );


        if (response.ok) {

            console.log(
                `📧 ${choice} notification sent successfully.`
            );

        } else {

            console.error(
                "❌ Formspree notification failed:",
                response.status
            );

        }

    }

    catch (error) {

        console.error(
            "❌ Notification error:",
            error
        );

    }

}



/* =========================================
   ❤️ YES BUTTON
========================================= */

function sayYes() {

    // Send notification to Dev
    sendNotification(
        "YES"
    );


    const response =
        document.getElementById(
            "response"
        );


    response.innerHTML = `

        <strong>
            ❤️ You said YES!
        </strong>

        <br><br>

        I think this just became
        the best part of your birthday. 🥹

        <br><br>

        I'll see you on our date. ❤️

    `;


    response.classList.remove(
        "show"
    );


    void response.offsetWidth;


    response.classList.add(
        "show"
    );


    createHeartBurst();

}



/* =========================================
   😐 NO BUTTON
========================================= */

function runAway() {

    // Send notification EVERY TIME
    // she clicks the No button.
    sendNotification(
        "NO"
    );


    const noBtn =
        document.getElementById(
            "noBtn"
        );


    const area =
        document.getElementById(
            "choiceArea"
        );


    const response =
        document.getElementById(
            "response"
        );



    /* ==============================
       RANDOM MESSAGES
    =============================== */

    const messages = [

        "Are you sure? 👀",

        "Hmm... that button seems nervous 😂",

        "You really tried to click No? 😭",

        "Nice try 😌",

        "I don't think the button agrees with you 😂",

        "The No button has left the chat 🏃‍♂️",

        "Maybe give Yes a chance? ❤️",

        "That was almost a No... almost. 😭",

        "The button said: absolutely not 😂",

        "Try again... if you can catch it 👀❤️",

        "Someone is determined today 😂",

        "Nope. The button has other plans. 🏃‍♀️💨",

        "You caught me once. Not happening again 😂",

        "The No button has trust issues now 😭",

        "Are we really doing this? 😂❤️",

        "I can do this all day 🏃‍♂️💨"

    ];



    /* ==============================
       RANDOM MESSAGE
    =============================== */

    const randomMessage =
        messages[
            Math.floor(
                Math.random() *
                messages.length
            )
        ];


    response.innerHTML =
        randomMessage;


    response.classList.remove(
        "show"
    );


    void response.offsetWidth;


    response.classList.add(
        "show"
    );



    /* ==============================
       AREA SIZE
    =============================== */

    const areaWidth =
        area.clientWidth;


    const areaHeight =
        area.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;


    const buttonHeight =
        noBtn.offsetHeight;



    /* ==============================
       SAFE MOVEMENT
    =============================== */

    const padding = 5;


    const maxX =
        Math.max(
            padding,
            areaWidth -
            buttonWidth -
            padding
        );


    const maxY =
        Math.max(
            padding,
            areaHeight -
            buttonHeight -
            padding
        );


    const randomX =
        padding +
        Math.random() *
        Math.max(
            0,
            maxX - padding
        );


    const randomY =
        padding +
        Math.random() *
        Math.max(
            0,
            maxY - padding
        );



    /* ==============================
       MOVE BUTTON
    =============================== */

    noBtn.style.position =
        "absolute";


    noBtn.style.left =
        `${randomX}px`;


    noBtn.style.top =
        `${randomY}px`;



    /* ==============================
       CHANGE BUTTON TEXT
    =============================== */

    const noTexts = [

        "No 😐",

        "Still No? 😂",

        "Nope 🙃",

        "Catch me! 🏃",

        "Not so fast 😭",

        "No ❤️‍🩹",

        "Try again 😂",

        "Can't catch me 😌"

    ];


    noBtn.textContent =
        noTexts[
            Math.floor(
                Math.random() *
                noTexts.length
            )
        ];

}



/* =========================================
   ✨ PARTICLES
========================================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    const symbols = [

        "♡",

        "✦",

        "·",

        "♥"

    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


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
            Math.random() *
            100 +
            "%";


        particle.style.fontSize =
            (
                8 +
                Math.random() *
                16
            ) +
            "px";


        particle.style.animationDuration =
            (
                7 +
                Math.random() *
                10
            ) +
            "s";


        particle.style.animationDelay =
            Math.random() *
            8 +
            "s";


        container.appendChild(
            particle
        );

    }

}



/* =========================================
   ❤️ HEART BURST
========================================= */

function createHeartBurst() {

    const symbols = [

        "❤️",

        "♡",

        "✨",

        "♥"

    ];


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


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
            (
                14 +
                Math.random() *
                20
            ) +
            "px";


        heart.style.zIndex =
            "100";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            200;


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
                    Math.random() *
                    700,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(
            () => {

                heart.remove();

            },

            2000
        );

    }

}
```
