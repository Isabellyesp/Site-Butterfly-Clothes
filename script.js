function adicionarAoCarrinho(produto) {
    alert(produto + " foi adicionado ao carrinho!");
}

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});
// Abrir e Fechar o Carrinho
var modal = document.getElementById("cartModal");
var btn = document.getElementById("openCart");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Adicionar itens ao Carrinho
var cartItems = [];

function adicionarAoCarrinho(produto) {
    cartItems.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    var cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = ""; // Limpa o conteúdo anterior

    if (cartItems.length === 0) {
        cartDiv.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        var list = document.createElement("ul");
        cartItems.forEach(function(item) {
            var listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        cartDiv.appendChild(list);
    }
}

// Exemplo de manipulação do botão de finalizar compra
document.getElementById("checkout").addEventListener("click", function() {
    alert("Compra finalizada com sucesso!");
    cartItems = []; // Limpa o carrinho
    atualizarCarrinho(); // Atualiza a exibição do carrinho
    modal.style.display = "none"; // Fecha o modal
});