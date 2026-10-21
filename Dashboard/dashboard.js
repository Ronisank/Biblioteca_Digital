import { livrosCadastrados } from "../Dados/livros-cadastrados.js";
import { exibirEstatisticas } from "../js/estatisticas.js";

const dashboard = document.getElementById('dashboard');
const sair = document.getElementById('sair');
const usuario = document.querySelector('.nomeUsuario');
const cursos = document.getElementById('cursosUsuario');
const cadastroAlunos = document.getElementById('cadastro');
const cadastroLivro = document.getElementById('cadastroLivro');
const listarLivro = document.getElementById('listarLivro');
const erroCursos = document.querySelector('.erroCursos');

const usuarioString = sessionStorage.getItem('usuario');

const usuarioSession = JSON.parse(usuarioString);

usuario.textContent = usuarioSession.nome;

dashboard.addEventListener('click', () => window.location.href = '../dashboard/dashboard.html');


cadastroAlunos.addEventListener('click', () => {
    navigation.navigate('../cadastro-Usuario/cadastro-usuario.html');
})
cadastroLivro.addEventListener('click', () => {
    navigation.navigate('../cadastro-Livro/cadastro-livro.html');
})
listarLivro.addEventListener('click', () => {
    navigation.navigate('../Listagem-Livro/listagem-livro.html');
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
                     <span class="textoSpan" data-valor="${dados.acervo}">0</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Livros disponíveis no acervo:</h3>
                     <span class="textoSpan" data-valor="${dados.acervoDisponivel}">0</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Livros indisponíveis no acervo: </h3>
                     <span class="textoSpan" data-valor="${dados.acervoIndisponivel}">0</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Total de páginas no acervo: </h3>
                     <span class="textoSpan" data-valor="${dados.totalPaginasAcervo}">0</span>
               </div>
           </div>`;
                cursos.innerHTML += `<div class="cardCurso">
                <div class="infoCurso">
                     <h3>Média de páginas no acervo:</h3>
                     <span class="textoSpan" data-valor="${dados.mediaPaginasAcervo}">0</span>
               </div>
           </div>`;
            const numeros = cursos.querySelectorAll(".textoSpan");

            numeros.forEach((numero) => {
                animarNumero(numero);
            });
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
function animarNumero(elemento) {
    const valorFinal = Number(elemento.dataset.valor);
    const duracao = 1500; // 1,5 segundo
    let inicio = null;

    function atualizar(tempoAtual) {
        if (inicio === null) inicio = tempoAtual;

        const progresso = Math.min(
            (tempoAtual - inicio) / duracao, 1
        );

        const valorAtual = Math.floor(progresso * valorFinal);

        elemento.textContent = valorAtual.toLocaleString("pt-BR");

        if (progresso < 1) {
            requestAnimationFrame(atualizar);
        } else {
            elemento.textContent = valorFinal.toLocaleString("pt-BR");
        }
    }

    requestAnimationFrame(atualizar);
}

listarEstatisticas();