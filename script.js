// ===============================
// Birthday Surprise Script
// ===============================

// List your photos here
const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg"
];

// Shuffle photos randomly
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(photos);

let currentPhoto = 0;

// ===============================
// Open Gift
// ===============================

function openGift() {

    // Change closed gift to open gift
    document.getElementById("giftBox").src = "images/gift-open.png";

    // Wait 1 second
    setTimeout(() => {

        document.getElementById("giftSection").style.display = "none";
        document.getElementById("surprise").style.display = "block";

        // Show first random photo
        document.getElementById("photo").src = photos[currentPhoto];

    }, 1000);

}

// ===============================
// Next Memory Button
// ===============================

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto < photos.length) {

        // Fade effect
        const photo = document.getElementById("photo");

        photo.style.opacity = 0;

        setTimeout(() => {

            photo.src = photos[currentPhoto];
            photo.style.opacity = 1;

        }, 300);

    } else {

        // Hide photo and button
        document.getElementById("photo").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";

        // Birthday message
        document.getElementById("message").innerHTML = `
        <h2>🎉 Happy Birthday Riya(menchi)! 🎂</h2>

        <p style="font-size:20px; line-height:1.8; color:#444;">

        Thank you for being such an amazing friend ❤️<br><br>

        Every memory with you makes life happier.<br>
        I hope today brings you lots of smiles,
        laughter, cake, and beautiful moments.<br><br>

        May all your dreams come true and may
        this year be your best one yet! 🌸✨<br><br>

        Happy Birthday once again! 🎈🎁❤️<br><br>

        <b>— Mehak 💖</b>

        </p>
        `;

    }

}
