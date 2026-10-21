import { livrosCadastrados } from "../Dados/livros-cadastrados.js";


export function CadastrarLivro(livro) {
    return new Promise((resolve, reject) => {
        if (livro) {
            const maiorId = livrosCadastrados.reduce((maiorIdAteAgora, idAtual) => {
                return idAtual.id > maiorIdAteAgora ? idAtual.id : maiorIdAteAgora;
            }, 0);
            livro.id = maiorId + 1;

            livrosCadastrados.push(livro);
            // localStorage.setItem('Livros', JSON.stringify(livrosCadastrados));

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Livro cadastrado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            })
            resolve(livro);
        } else {

            reject(Swal.fire({
                title: "Erro ao cadastrar o livro",
                icon: "error",
                draggable: true
            }));
        }

    })
};


export function listarLivros() {
    return new Promise((resolve, reject) => {
        // const livroSalvos = JSON.parse(localStorage.getItem('Livros'));
        if (livrosCadastrados.length > 0) {

            resolve(livrosCadastrados);
        } else {
            Swal.fire({
                title: "Erro ao listar os livros",
                icon: "error",
                draggable: true
            });
            reject("Lista de livros vazia");
        }
    })
};