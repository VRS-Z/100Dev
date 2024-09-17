function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Loga o elemento no console para fins de depuração

  // Inicializa uma string vazia para armazenar os resultados formatados
  let resultados = "";

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa,
    // incluindo título, descrição e link para mais informações
    resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
  }

  // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}
