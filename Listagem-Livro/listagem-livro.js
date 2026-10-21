import { listarLivros } from "../js/livros.js";

const dashboard = document.getElementById('dashboard');
const sair = document.getElementById('sair');
const cursos = document.getElementById('cursosUsuario');
const cadastroAlunos = document.getElementById('cadastro');
const cadastroLivro = document.getElementById('cadastroLivro');
const listarLivro = document.getElementById('listarLivro');
const usuario = document.querySelector('.nomeUsuario');

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

export function exibirTabela() {

    cursos.innerHTML = '';
    return listarLivros()
        .then((dados) => {
            dados.forEach(livro => {
                cursos.innerHTML += `
               <tr class="tabela">
            <td data-label="Título">${livro.titulo}</td>
            <td data-label="Autor">${livro.autor}</td>
            <td data-label="Categoria">${livro.categoria}</td>
            <td data-label="Paginas">${livro.paginas}</td>
            <td data-label="Disponivel">${livro.disponivel === true ? 'Sim' : 'Não'}</td>
        </tr>`

            });
        })
        .catch(erro => {
            console.error("Falha ao exibir tabela:", erro);
        });
};
exibirTabela();