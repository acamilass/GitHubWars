let user1 = JSON.parse(localStorage.getItem('user1'));
let user2 = JSON.parse(localStorage.getItem('user2'));

//Preenche todos os campos do usuário1
document.getElementById('img_user1').setAttribute('src', user1.imagem);
document.getElementById('qtdRepo_user1').innerText =   user1.repositorio;
document.getElementById('qtdRepoPontos_user1').innerText = user1.pontos.pontuacaoRepositorio;
document.getElementById('qtdFlw_user1').innerText = user1.seguidores;
document.getElementById('qtdFlwPontos_user1').innerText = user1.pontos.pontuacaoSeguidores;
document.getElementById('qtdFlwg_user1').innerText = user1.seguindo;
document.getElementById('qtdFlwgPontos_user1').innerText = user1.pontos.pontuacaoSeguidores;
document.getElementById('qtdStars_user1').innerText = 0;
document.getElementById('qtdStarsPontos_user1').innerText = 0;
document.getElementById('qtdGists_user1').innerText = user1.gists;
document.getElementById('qtdGistsPontos_user1').innerText = user1.pontos.pontuacaoGist
document.getElementById('qtdPontos_user1').innerText = user1.pontos.totalDePontos;

//Preenche todos os campos do usuário1
document.getElementById('img_user2').setAttribute('src', user2.imagem);
document.getElementById('qtdRepo_user2').innerText =   user2.repositorio;
document.getElementById('qtdRepoPontos_user2').innerText = user2.pontos.pontuacaoRepositorio;
document.getElementById('qtdFlw_user2').innerText = user2.seguidores;
document.getElementById('qtdFlwPontos_user2').innerText = user2.pontos.pontuacaoSeguidores;
document.getElementById('qtdFlwg_user2').innerText = user2.seguindo;
document.getElementById('qtdFlwgPontos_user2').innerText = user2.pontos.pontuacaoSeguindo;
document.getElementById('qtdStars_user2').innerText = 0;
document.getElementById('qtdStarsPontos_user2').innerText = 0;
document.getElementById('qtdGists_user2').innerText = user2.gists;
document.getElementById('qtdGistsPontos_user2').innerText = user2.pontos.pontuacaoGist;
document.getElementById('qtdPontos_user2').innerText = user2.pontos.totalDePontos;


//Verificar Vencedor
let trofeu;
if(user1.pontos.totalDePontos > user2.pontos.totalDePontos){
  trofeu = document.getElementById('trophy_user1');
}
else {
  trofeu = document.getElementById('trophy_user2');
}
trofeu.style.display = 'block';