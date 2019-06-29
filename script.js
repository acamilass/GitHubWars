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
    this.GetTotalPontos = () => {
           
       let pontuacaoRepositorio = this.repositorio * 20;
       let pontuacaoFollowers = this.seguidores * 10;
       let pontuacaoSeguindo = this.seguindo * 5;
       let pontuacaoEstrela = this.estrela * 10;
       let pontuacaoGist = this.gists * 5;
    
        let totalDePontos = pontuacaoRepositorio + pontuacaoFollowers + pontuacaoSeguindo + pontuacaoEstrela
                            + pontuacaoGist;
        
        return totalDePontos;
    }
}

const botaoLutar = document.getElementById('btnLutar');
botao.addEventListener('click', function() {
    let idUsuario1 = "brunasouza2";
    let idUsuario2 = "caiocss";
    let url1 = "https://api.github.com/users/"+idUsuario1;
    let url2 = "https://api.github.com/users/"+idUsuario2;
    let user1;
    let user2;
    let usuarioVencedor;

    getApi(url1, function (json) {
        user1 = new Usuario(json.name, json.avatar_url, json.public_repos,
            json.followers, json.following, 0, json.public_gists);
            getApi(url2, function (json) {         
                user2 = new Usuario(json.name, json.avatar_url, json.public_repos,
                     json.followers, json.following, 0, json.public_gists);
                     
                //verifica usuario vencedor
                usuarioVencedor = VerificarVencedor(user1, user2);
            })
        console.log(user1);
        console.log(user2);       
    });    
});

function VerificarVencedor(usuario1, usuario2) {
    if(usuario1.totalDePontos() == usuario2.totalDePontos()){
        return "draw";
    }
    else if(usuario1.GetTotalPontos() > usuario2.GetTotalPontos()) {
        return usuario1;
    }
    return usuario2;
}