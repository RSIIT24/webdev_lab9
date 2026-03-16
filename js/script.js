document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("entrybutton");

  button.addEventListener("click", function () {

    const inputValue = document.getElementById("entryinput").value;

    alert("Rikki Sims: " + inputValue);

    document.getElementById("textoutput").textContent = inputValue;

  });

});
