import { livrosCadastrados } from "../Dados/livros-cadastrados.js";
import { exibirEstatisticas } from "../js/estatisticas.js";

const dashboard = document.getElementById('dashboard');
const sair = document.getElementById('sair');
const usuario = document.querySelector('.nomeUsuario');
const cursos = document.getElementById('cursosUsuario');
const cadastroAlunos = document.getElementById('cadastro');
const erroCursos = document.querySelector('.erroCursos');

const usuarioString = sessionStorage.getItem('usuario');

const usuarioSession = JSON.parse(usuarioString);

usuario.textContent = usuarioSession.nome;

dashboard.addEventListener('click', () => window.location.href = '../dashboard/dashboard.html');


cadastroAlunos.addEventListener('click', () => {
    navigation.navigate('../cadastro-Usuario/cadastro-usuario.html');
})

sair.addEventListener('click', () => {
    sessionStorage.removeItem('usuario');
    navigation.navigate('../login/login.html');

});

function listarEstatisticas() {
    return exibirEstatisticas(livrosCadastrados)
        .then((dados) => {

                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Total de livros no acervo:</h3>
                     <span class="textoSpan">${dados.acervo}</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Livros disponíveis no acervo:</h3>
                     <span class="textoSpan">${dados.acervoDisponivel}</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Livros indisponíveis no acervo: </h3>
                     <span class="textoSpan">${dados.acervoIndisponivel}</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Total de páginas no acervo: </h3>
                     <span class="textoSpan">${dados.totalPaginasAcervo}</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Média de páginas no acervo:</h3>
                     <span class="textoSpan">${dados.mediaPaginasAcervo}</span>
               </div>
           </div>`;
            })
                .catch((erro) => {
                    erroCursos.innerHTML = `<div class="erroCursos"><p class="hidden">${erro}</p></div>`
                    console.error(`Erro: ${erro}`);

                })
                .finally(() => {
                    console.log("Verificação finalizada.");
                });
        // })
}

listarEstatisticas();