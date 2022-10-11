const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//Asyn function to fetch API
const getImage = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images);
};


//image randomizer
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
};

//display image with author and url
const displayImage = function (randomImage){
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

//click event listener- getImage() waits to button click to retrieve image
button.addEventListener("click", function() {
    getImage();
});
