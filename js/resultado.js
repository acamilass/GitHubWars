let usuarioVencedor = JSON.parse(localStorage.getItem('vencedor'));
let user1 = JSON.parse(localStorage.getItem('user1'));
let user2 = JSON.parse(localStorage.getItem('user2'));

let pontuacaoUser1 = user1.GetTotalPontos();
document.getElementById('qtdRepo_user1').innerText =   user1.repositorio;
document.getElementById('qtdRepoPontos_user1').innerText = pontuacaoUser1.pontuacaoRepositorio;

                        // <td id="qtdFlw_user1"></td>
                        // <td id="qtdFlwPontos_user1"></td>

                        // <td id="qtdFlwg_user1"></td>
                        // <td id="qtdFlwgPontos_user1"></td>

                        // <td id="qtdStars_user1"></td>
                        // <td id="qtdStarsPontos_user1"></td>

                        // <td id="qtdGists_user1"></td>
                        // <td id="qtdGistsPontos_user1"></td>



