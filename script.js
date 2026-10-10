
/* =========================
   MAMA'S MESSAGES
========================= */

const mamaMessages = [

    "Beta, pareshan mat hona... Mama hamesha tumhare saath hai. ❤️",

    "Mujhe pata hai tum mujhe bohat yaad karte ho.",

    "Jab tumhara dil udaas ho, mujhe yaad kar lena.",

    "Main tumhare dil ke bohat qareeb hoon.",

    "Apna khayal rakhna beta, aur khud ko kabhi akela mat samajhna.",

    "Tumhari har khushi meri khushi hai.",

    "Meri duaen hamesha tumhare saath hain.",

    "Bas khush rehna aur zindagi mein hamesha aage barhna.",

    "Maa ka pyaar kabhi khatam nahi hota. ❤️"

];


/* =========================
   SON'S MESSAGES
========================= */

const sonMessages = [

    "Mama, main aapko bohat yaad karta hoon... 🥺",

    "Kaash aap mere paas hotin, main aapko ek baar phir gale laga pata.",

    "Aapke bina sab kuch adhoora sa lagta hai.",

    "Jab bhi main udaas hota hoon, sabse pehle aapki yaad aati hai.",

    "Mama, mujhe aapki baatein aur aapka pyaar bohat yaad aata hai.",

    "Aap mere paas nahi hain, lekin mere dil mein hamesha hain.",

    "Main aapko kabhi nahi bhoolunga.",

    "I love you, Mama. ❤️"

];


/* =========================
   START STORY
========================= */

function startStory() {

    document.getElementById("welcome").style.display = "none";

    const mamaSection =
        document.getElementById("mamaSection");

    mamaSection.classList.add("show");

    window.scrollTo({
        top: mamaSection.offsetTop,
        behavior: "smooth"
    });

    startMamaMessages();
}


/* =========================
   TYPEWRITER EFFECT
========================= */

function typeMessage(element, text, speed = 45) {

    return new Promise((resolve) => {

        element.innerHTML = "";

        let index = 0;

        function typing() {

            if (index < text.length) {

                element.innerHTML += text.charAt(index);

                index++;

                setTimeout(typing, speed);

            } else {

                resolve();

            }
        }

        typing();

    });
}


/* =========================
   MAMA MESSAGES
========================= */

async function startMamaMessages() {

    const element =
        document.getElementById("mamaMessage");

    for (let message of mamaMessages) {

        await typeMessage(element, message);

        await new Promise(
            resolve => setTimeout(resolve, 2500)
        );
    }

    showSon();

}


/* =========================
   SHOW SON
========================= */

function showSon() {

    const sonSection =
        document.getElementById("sonSection");

    sonSection.classList.add("show");

    setTimeout(() => {

        window.scrollTo({
            top: sonSection.offsetTop,
            behavior: "smooth"
        });

        startSonMessages();

    }, 500);

}


/* =========================
   SON MESSAGES
========================= */

async function startSonMessages() {

    const element =
        document.getElementById("sonMessage");

    for (let message of sonMessages) {

        await typeMessage(element, message);

        await new Promise(
            resolve => setTimeout(resolve, 2500)
        );
    }

    showConversation();

}


/* =========================
   SHOW CONVERSATION
========================= */

function showConversation() {

    const conversation =
        document.getElementById("conversation");

    setTimeout(() => {

        window.scrollTo({
            top: conversation.offsetTop,
            behavior: "smooth"
        });

    }, 700);

}


/* =========================
   FINAL HUG
========================= */

function showHug() {

    const conversation =
        document.getElementById("conversation");

    const hugSection =
        document.getElementById("hugSection");

    conversation.style.display = "none";

    hugSection.classList.add("active");

    setTimeout(() => {

        window.scrollTo({
            top: hugSection.offsetTop,
            behavior: "smooth"
        });

    }, 300);

}
