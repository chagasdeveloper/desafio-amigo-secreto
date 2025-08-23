amigos = [];
function adicionarAmigo(){
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == ""){
        alert("Por favor, insira um nome!");
    } else{
        amigos.push(nomeDoAmigo);
        document.querySelector('input').value = "";
    }
}