let saldo = 200.00;
let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarProdutoAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco }); // Adiciona o produto ao carrinho
    console.log(`${nome} adicionado ao carrinho. Preço: R$${preco.toFixed(2)}`);
}

// Função para calcular o total da compra
function calcularTotalCompra() {
    let totalCompra = 0;
    for (let i = 0; i < carrinho.length; i++) {
        totalCompra += carrinho[i].preco; // Soma os preços dos produtos
    }
    return totalCompra;
}

// Função para finalizar a compra
function finalizarCompra() {
    let totalCompra = calcularTotalCompra(); // Calcula o total da compra
    
    let mensagemCompra = totalCompra <= saldo 
        ? "Compra realizada com sucesso!" 
        : "Saldo insuficiente!";
    
    console.log(mensagemCompra);

    if (totalCompra <= saldo) {
        saldo -= totalCompra;
        console.log(`Saldo atual: R$${saldo.toFixed(2)}`);
    }
}

adicionarProdutoAoCarrinho("Calça Jeans masculina", 50.00);
adicionarProdutoAoCarrinho("Blusa feminina", 75.00);
adicionarProdutoAoCarrinho("Camiseta masculina", 40.00);

finalizarCompra();
