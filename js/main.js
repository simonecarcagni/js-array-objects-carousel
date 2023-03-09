
let imagesArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const containerRightDom = document.querySelector('.images-right')

const imagesDom = document.querySelector('.images');

let imageContent = "";
let imageRightContent = "";

for (let i = 0; i < imagesArray.length; i++){

    let chiavi = imagesArray[i];

    let autoImages = `<div class="img-container">
                          <img src="${chiavi.image}">
                          <h1 class="position-a-1">${chiavi.title}</h1>
                          <p class="position-a-2">${chiavi.text}</p>  
                      </div>`;

    let autoRightImages = `<div class="img-container-right opacity">
                          <img src="${chiavi.image}">

                      </div>`;

    imageContent += autoImages;
    imageRightContent += autoRightImages;
}

imagesDom.innerHTML = imageContent;
containerRightDom.innerHTML = imageRightContent;

console.log(imageContent);

const buttonNextDom = document.querySelector('.btn-next');
const buttonBackDom = document.querySelector('.btn-back');

const imgContainerDom = document.getElementsByClassName('img-container');
const imgContainerRightDom = document.getElementsByClassName('img-container-right');

let showedImage = 0;

imgContainerDom[showedImage].classList.add('showed');
imgContainerRightDom[showedImage].classList.add('border-white');

console.log(imgContainerDom);

setInterval(function () {

    imgContainerRightDom[showedImage].classList.remove('border-white');
    imgContainerDom[showedImage].classList.remove('showed');

    if (showedImage == imgContainerRightDom.length - 1) {
        showedImage = 0;
    } else {
        showedImage++;
    }

    imgContainerDom[showedImage].classList.add('showed');
    imgContainerRightDom[showedImage].classList.add('border-white');

}, 5000)


