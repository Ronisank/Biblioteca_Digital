import { livrosCadastrados } from "../Dados/livros-cadastrados.js";
import { Livro } from "../js/Livro.js";
import { CadastrarLivro } from "../js/livros.js";

const dashboard = document.getElementById('dashboard');
const sair = document.getElementById('sair');
const usuario = document.querySelector('.nomeUsuario');
const usuarioLogin = document.querySelector('.nomeUsuario');
const formulario = document.querySelector(".formContainer");
const cadastroAlunos = document.getElementById('cadastro');
const cadastroLivro = document.getElementById('cadastroLivro');
const listarLivro = document.getElementById('listarLivro');
const nome = document.getElementById('nome');
const nomeAutor = document.getElementById('nomeAutor');
const numeroPaginas = document.getElementById('nPaginas');
const categoria = document.getElementById('categoria');
const btnSalvar = document.querySelector('.btnSalvar');
const camposErros = document.querySelector('.obrigatorio');
const autorErro = document.querySelector('.autorObrigatorio');

const usuarioString = sessionStorage.getItem('usuario');

const usuarioSession = JSON.parse(usuarioString);

usuarioLogin.textContent = usuarioSession.nome;

btnSalvar.disabled = true;

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

const camposObrigatorios = [nome, categoria, numeroPaginas, nomeAutor];

function validaTitulo(){
    const tituloValido = nome.value.trim().length >= 4 && nome.value.trim().length <= 80;
    if (!tituloValido) {
        nome.classList.add('erroNome');
        camposErros.innerHTML = 'O texto deve ter entre 4 e 80 caracteres.';
    } else {
        nome.classList.remove('erroNome');
        camposErros.innerHTML = '';
    }
validaCampos();
}

function validaAutor() {
    const autorValido = nomeAutor.value.trim().length >= 4 && nomeAutor.value.trim().length <= 80;
    if (!autorValido) {
        nomeAutor.classList.add('erroNomeAutor');
        autorErro.innerHTML = 'O texto deve ter entre 4 e 80 caracteres.';
    } else {
        nomeAutor.classList.remove('erroNomeAutor');
        autorErro.innerHTML = '';
    }
    validaCampos();
}
nome.addEventListener('blur', validaTitulo);
nomeAutor.addEventListener('blur', validaAutor);

function validaCampos() {

    const tituloValido = nome.value.trim().length >= 4 && nome.value.trim().length <= 80;

    const autorValido = nomeAutor.value.trim().length >= 4 && nomeAutor.value.trim().length <= 80;

    const nPaginasValido = numeroPaginas.value.replace(/\D/g, '');

    const todosPreenchidos = camposObrigatorios.every(input => input.value.trim() !== '');

    btnSalvar.disabled = !(
        todosPreenchidos &&
        nPaginasValido &&
        tituloValido &&
        autorValido
    );
}

const camposDigitados = [nome, categoria, nomeAutor, numeroPaginas];

camposDigitados.forEach(input => {
    input.addEventListener('input', validaCampos);
    if (input.tagName === 'SELECT') {
        input.addEventListener('change', validaCampos);
    }
});

btnSalvar.addEventListener('click', () => {
    validaCampos();
    if (btnSalvar.disabled) {
        return;
    }
    const novoLivro = new Livro(
        nome.value,
        nomeAutor.value,
        categoria.value,
        Number(numeroPaginas.value)
        
    );
    CadastrarLivro(novoLivro);
    formulario.reset();
    btnSalvar.disabled = true;
    console.log(livrosCadastrados)
});
