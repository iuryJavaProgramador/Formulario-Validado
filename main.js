document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  var campoA = parseFloat(document.getElementById("campoA").value);
  var campoB = parseFloat(document.getElementById("campoB").value);
  var message = document.getElementById("message");

  if (campoB > campoA) {
    message.textContent = "Formulário válido! Campo B é maior que Campo A.";
    message.className = "message positive";
  } else {
    message.textContent =
      "Formulário inválido! Campo B deve ser maior que Campo A.";
    message.className = "message negative";
  }

  message.style.display = "block";
});
