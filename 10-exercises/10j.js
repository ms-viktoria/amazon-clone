let calculation = localStorage.getItem("calculation") || "";

  dislayCalculation();

  function updateCalculation(value) {
    calculation += value;

    dislayCalculation();
    localStorage.setItem("calculation", calculation);
  }

  function dislayCalculation() {
    document.querySelector(".js-calculation").innerHTML = calculation;
  }