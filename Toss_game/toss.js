let coin = document.querySelector(".coins");
let flipBtn = document.querySelector("#flip-button");
let restBtn = document.querySelector("#rest-button");
console.log(coin);
// heads and tails value
let heads = 0;
let tails = 0;
restBtn.addEventListener('click',()=>{
  heads=0;
  tails=0;
  updateStats()
})
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  console.log(i);

  coin.style.animation = "none";

  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
      console.log(coin.style.animation);
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateStats,3000);
   disableButton();
});

function disableButton(){
  flipBtn.disabled=true
  restBtn.disabled=true
  setTimeout(enableBtns,3000);
}

function enableBtns(){
  flipBtn.disabled=false
  restBtn.disabled=false
}
function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads:
  ${heads}`;
  document.querySelector("#tails-count").textContent = `tails:
  ${tails}`;
}
