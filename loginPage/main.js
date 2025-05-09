const input = document.getElementById("input-name");

function verificaNomeValido(nome){

    if(nome.length == 0){
        return false
    }else{
        return nome
    }
}

function setValueCounter(){
    document.getElementById("button-counter").addEventListener("click", () => {
        let counter = document.getElementById("counter");
        counter.innerText = parseInt(counter.textContent) + 1;
    })
}

function exibeCounter(){
    document.getElementById("counterDiv").style.display = "block";
    document.getElementById("form").style.display = "none";
}

document.getElementById("button-entrar").addEventListener("click", () => {
    let userName = input.value;

    const verificacao = verificaNomeValido(userName);

    if(!verificacao){
        document.getElementById("error").style.visibility = "visible";

        input.addEventListener("input", (event) => {
            console.log(event)
            if(event.target.value.length < 3){
                document.getElementById("error").innerText = "Digite pela menos três caracteres!";
                document.getElementById("error").style.visibility = "visible";
            }else if(event.target.value.length === 0){
                document.getElementById("error").style.visibility = "visible";
            }else{
                document.getElementById("error").style.visibility = "hidden";
            }

        })

    }else{
        document.getElementById("title-counter").textContent = verificacao;
        document.getElementById("error").style.visibility = "hidden";
        
        exibeCounter()
        setValueCounter()
    }
})

input.addEventListener("keydown", ({key}) => {
    console.log(key)

})


