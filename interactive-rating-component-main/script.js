const rateBtn = document.querySelector(".Rate-button");
const main = document.querySelector(".main");
const buttonContainer = document.querySelector(".button-container");
const submitBtn = document.querySelector('.submit-btn');
const thankYouBox = document.querySelector('.thank-you-box');
const allRatingBtn = document.querySelectorAll('.ratings ul li');
const ratingBox = document.querySelector('.rating-box');
const ratingE = document.querySelector('.rating');
const submitError = document.querySelector('.submit-error');
let currentRating = 1;


let ratingList = [0,0,0,0,0];

// const init = function () {
//   main.style.display = "none";
// };

// init();

rateBtn.addEventListener("click", function () {
  buttonContainer.classList.add("hidden");
  ratingBox.classList.remove("hidden");

  main.style.display = "flex";
});

allRatingBtn.forEach((btn) => {
  btn.addEventListener("click", function(){
    document.querySelector(`.rating-${currentRating}`).style.backgroundColor = '#272E38';
    allRatingBtn.forEach((btn) => {
    }) 
    currentRating = parseInt(btn.innerText);
    document.querySelector(`.rating-${currentRating}`).style.backgroundColor = '#7a8088';
  })


});

submitBtn.addEventListener("click", function(){
  if(currentRating === 0){
    submitError.classList.remove('hidden');
  } else {
    console.log(currentRating);
    ratingE.textContent = currentRating;
    ratingBox.classList.add('hidden');
    thankYouBox.classList.remove('hidden');
  }

});

document.addEventListener('keydown', function(e){

  let goToRate = e.key;
  console.log(goToRate)
  if(goToRate === 'Escape' &&  !thankYouBox.classList.contains('hidden')){
    document.querySelector(`.rating-${currentRating}`).style.backgroundColor = '#272E38';
    thankYouBox.classList.add('hidden');
    ratingBox.classList.remove('hidden');
  } else if(goToRate === 'Escape' && thankYouBox.classList.contains('hidden') && !ratingBox.classList.contains('hidden')){
    document.querySelector(`.rating-${currentRating}`).style.backgroundColor = '#272E38';
    buttonContainer.classList.remove("hidden");
    ratingBox.classList.add('hidden');
  }
})
