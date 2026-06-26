const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg"
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
