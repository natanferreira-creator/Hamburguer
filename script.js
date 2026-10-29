// ===================== JavaScript =====================

// Função chamada quando o usuário clica no botão.
// Ela mostra ou esconde a mensagem da promoção.
function mostrarPromocao() {

  // Pega no HTML o elemento que tem id="mensagem"
  var caixa = document.getElementById("mensagem");

  // Se a caixa já está aparecendo, esconde. Se não, mostra.
  if (caixa.style.display === "block") {
    caixa.style.display = "none";
  } else {
    caixa.innerHTML = "🔥 Hoje o X-Burger com batata frita sai por apenas R$ 25,00!";
    caixa.style.display = "block";
  }
}
