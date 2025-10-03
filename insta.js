let MUJ = document.querySelector('.MUJ');
let title=document.querySelector('.title');
  let toggle = true; 

  function transition() {
    setInterval(() => {
      if (toggle) {
        MUJ.innerText = "Manipal University Jaipur";
        MUJ.style.color = "#f7b538"; 
        MUJ.style.position = "relative";
        MUJ.style.top = "0px";
        title.style.position = "relative";
      } else {
        MUJ.innerText = "MUJ";
        MUJ.style.color = "#f7b538"; 
      }
      toggle = !toggle; 
    }, 4000); 
  }

  // Run after page loads
  window.onload = transition;