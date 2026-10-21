export function exibirEstatisticas(livros) {
    return new Promise((resolve, reject) => {
        if (livros.length > 0) {
            const totalLivros = livros.length;
            const livrosDisponiveis = livros.filter(item => item.disponivel).length;
            const livrosIndisponiveis = totalLivros - livrosDisponiveis;
            const totalDePaginas = livros.reduce((total, item) => total + item.paginas, 0);
            const mediaPaginasPorLivros = totalDePaginas / totalLivros;
            
            let acervoLivros ={
                acervo: totalLivros,
                acervoDisponivel: livrosDisponiveis,
                acervoIndisponivel: livrosIndisponiveis,
                totalPaginasAcervo: totalDePaginas,
                mediaPaginasAcervo: mediaPaginasPorLivros
            };
            console.log(acervoLivros);
            resolve(acervoLivros);
            
        } else {
            
            reject("Erro ao exibir estatísticas.");
        }
    })
};