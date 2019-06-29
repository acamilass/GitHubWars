function getApi(url,callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {    
            callback(JSON.parse(xhttp.responseText))
        }
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}  

function Usuario(nome, imagem, repositorio, seguidores, seguindo, estrela, gists){
    this.nome = nome;
    this.imagem = imagem;
    this.repositorio = repositorio;
    this.seguidores = seguidores;
    this.seguindo = seguindo;
    this.estrela = estrela;
    this.gists = gists;
}

let idUsuario1 = "brunasouza2";
let idUsuario2 = "caiocss";

const botaoLutar = document.getElementById('btnLutar');
botao.addEventListener('click', function() {
    let url1 = "https://api.github.com/users/"+idUsuario1;
    let url2 = "https://api.github.com/users/"+idUsuario2;
    getApi(url1, function (json) {
        let user1 = new Usuario(json.name, json.avatar_url, json.public_repos,
            json.followers, json.following, 0, json.public_gists);
        console.log(user1);
    })
    getApi(url2, function (json) {         
        let user2 = new Usuario(json.name, json.avatar_url, json.public_repos,
             json.followers, json.following, 0, json.public_gists);
        console.log(user2);
    })
});