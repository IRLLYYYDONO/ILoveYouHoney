const text = document.querySelector("#theLine");
  const letters = text.innerText.split("");

  text.innerHTML = ""; 

  letters.forEach((letter, index) => {
    let span = document.createElement("span");
    span.innerText = letter;
    span.classList.add("char");
    span.style.animationDelay = `${index * 0.15}s`; // Delay for each letter
    text.appendChild(span);
  });