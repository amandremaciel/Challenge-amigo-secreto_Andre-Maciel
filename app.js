//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    
    if (nomeAmigo.trim() === "") { // Verifica se o campo está em branco
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nomeAmigo);
    limparCampo();
    console.log(nomeAmigo);
    listarAmigos();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function listarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) { // Verifica se há amigos na lista antes de sortear
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }
    
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigoAleatorio];
    document.getElementById('resultado').innerHTML = amigoSorteado;
}