document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector("#circle-moon");
    const bodyElement = document.documentElement;
    const moonIcon = document.querySelector("#circle-moon img");

    
    if (localStorage.getItem("dark-mode") === "enabled") {
      bodyElement.classList.add("dark-mode");
      moonIcon.src = "./img/sun-icon.svg"; 
    }

    darkModeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (bodyElement.classList.contains("dark-mode")) {
        bodyElement.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        moonIcon.src = "./img/moon-icon.svg"; 
      } else {
        bodyElement.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        moonIcon.src = "./img/sun-icon.svg"; 
      }
    });
  });

 
