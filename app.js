amigos = [];
function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome!");
    } else{
        amigos.push(nomeDoAmigo);
        document.querySelector('input').value = "";
    }
    atualizarLista();
}
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(novoAmigo);
    }
}