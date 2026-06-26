const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg"
];

let current = 0;

function openGift(){

    document.getElementById("giftBox").src="images/gift-open.png";

    setTimeout(()=>{

        document.getElementById("giftSection").style.display="none";

        document.getElementById("surprise").style.display="block";

        slideShow();

    },1000);

}

function slideShow(){

    const photo=document.getElementById("photo");
    const message=document.getElementById("message");

    photo.src=photos[current];

    current++;

    if(current<photos.length){

        setTimeout(slideShow,2500);

    }

    else{

        message.innerHTML="❤️ Thank you for being such an amazing friend! Happy birthday ❤️";

    }

}
