document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("entrybutton");
  const input = document.getElementById("entryinput");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function () {

    const message = input.value;

    alert("Rikki Sims: " + message);

    output.textContent = message;

  });

});
