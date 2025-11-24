# Async-e-Await

Projeto Async e Await 
Professor Bruno - APW

João Pedro Ronchi Gabini;

Juliana Correa Barbosa;

Mariana Aya Hangai;

Rebeca Santos Silva;

Victoria Américo Nunes.
Explicação
O exemplo consiste em um HTML com três caixas de texto (nome, email e cidade) e um botão. Quando o botão é clicado, uma função JavaScript chamada “carregarDados” é executada. Essa função é assíncrona (usa “async/await”) para buscar um arquivo JSON externo. Primeiro ela usa “fetch” para obter o JSON e espera a resposta com “await”. Depois converte essa resposta em objeto JavaScript, também usando “await”. Em seguida, os valores do JSON são colocados dentro das caixas de texto do HTML usando “document.getElementById”. Se ocorrer algum erro na busca ou leitura do arquivo, ele é capturado por um bloco try/catch. O JSON contém valores simples para nome, email e cidade, que são exibidos automaticamente no HTML quando a função é executada.


