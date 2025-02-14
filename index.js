const text = document.querySelector("#theLine");
const letters = text.innerText.split("");
var amountClicks = 0;
var respnseList = [
  "Noo Honey!!",
  "Pwease!!",
  "Say, Yes!",
  "IK you dont want this",
  "But Honeeey",
  "Pleaasseee!",
  "Im your Poookieee",
  "but I miss youuuuu"]

text.innerHTML = ""; 

letters.forEach((letter, index) => {
  let span = document.createElement("span");
  span.innerText = letter;
  span.classList.add("char");
  span.style.animationDelay = `${index * 0.05}s`; // Delay for each letter
  text.appendChild(span);
});

window.onload = () => {
  lockScroll(); 
};

function lockScroll() {
  document.body.style.overflow = "hidden"; // Disable scrolling
}

function unlockScroll() {
  document.body.style.overflow = "auto"; // Enable scrolling
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  amountClicks++;
  hideNoButton("no", "yes");
  return currentIndex
}

function scrollToSection(targetSection) {
  let target = document.getElementById(targetSection);
  let targetPosition = target.getBoundingClientRect().top + window.scrollY;
  let startPosition = window.scrollY;
  let distance = targetPosition - startPosition;
  let duration = 1000; // Scroll duration in milliseconds
  let startTime = null;

  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

      if (timeElapsed < duration) {
          requestAnimationFrame(animation);
      }
  }

  function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  requestAnimationFrame(animation);
}

function hideNoButton(no,yes) {
  let noButton = document.getElementById(no);
  let yesButton = document.getElementById(yes);
  if (noButton && amountClicks > 15) {
    noButton.style.display = 'none';
    yesButton.classList.add('active', 'expand');
  }
}

function changeText() {
  document.getElementById("no").innerText = respnseList[shuffle(respnseList)];
  console.log(shuffle(respnseList))
}