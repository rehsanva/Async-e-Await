async function carregarDados() {
    try {
        // 1. Fazendo requisição ao arquivo JSON
        const resposta = await fetch("dados.json");

        // 2. Convertendo para objeto JavaScript
        const dados = await resposta.json();

        // 3. Preenchendo caixas de texto no HTML
        document.getElementById("nome").value = dados.nome;
        document.getElementById("email").value = dados.email;
        document.getElementById("cidade").value = dados.cidade;

    } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
    }
}
