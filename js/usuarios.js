import { usuariosCadastrados } from '../Dados/usuarios-cadastrados.js';

export function CadastrarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario) {
            const maiorId = usuariosCadastrados.reduce((maiorIdAteAgora, idAtual) => {
                return idAtual.id > maiorIdAteAgora ? idAtual.id : maiorIdAteAgora;
            }, 0);
            usuario.id = maiorId + 1;

            usuariosCadastrados.push(usuario);

            console.log(usuariosCadastrados);
            resolve(Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuário cadastrado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            }));
        } else {

            reject(Swal.fire({
                title: "Erro ao cadastrar o usuario",
                icon: "error",
                draggable: true
            }));
        }


        console.table(usuariosCadastrados);
    })
};