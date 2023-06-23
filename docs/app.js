window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  
    const btn = document.getElementById("btn");
    btn.addEventListener("click", (event) => {
      document.querySelector("p").className = "hilite";
    });
  });