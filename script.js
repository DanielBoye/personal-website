const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ";
let interval = 1;

function startAnimation() {
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    const h1 = document.querySelector("h1");
    h1.innerText = h1.dataset.value
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return h1.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 29)]
      })
      .join("");
    
    if(iteration >= h1.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

window.addEventListener("load", startAnimation);

document.querySelector("h1").addEventListener("mouseover", startAnimation);
