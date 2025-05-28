let listaPedidos = [
    {
        id: 1,
        cliente: "João",
        endereco: "Rua HTML",
        status: "pendente"
    },
    {
        id: 2,
        cliente: "Maria",
        endereco: "Rua JS",
        status: "pendente"
    },
    {
        id: 3,
        cliente: "Mariano",
        endereco: "Rua Python",
        status: "pendente"
    }
]

function atualizaStatusPedido (idPedido){
    return new Promise((sucesso, fracasso) => {
        setTimeout(() => {
            const pedido = listaPedidos.find(pedido => pedido.id === idPedido)
            
            if(pedido){
                pedido.status = "entregue"
                sucesso(pedido)
            }else{
                fracasso(`Atualização de status do pedido de id: ${idPedido} deu errado!`)
            }
        }, 1000)
    })

}

atualizaStatusPedido(2).then(pedidoAtualizado => {
    console.log("Pedido Atualizado: ", pedidoAtualizado)
    console.log("\nLista de Pedidos")
    listaPedidos.forEach(pedido => console.log(pedido))
}).catch((erro) => {
    console.error(erro)
})





