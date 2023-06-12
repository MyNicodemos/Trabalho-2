function pesquisarPd(dados){
    var cards = document.getElementById("row")
    var htmlcards = "";
    
    for (let i=0; i<dados.length; i++){
        api.push(dados[i])
    }

    if(api.length == 0){
        var aviso = "<h1>vazio</h1>"
    }
    else{
        for(let i=0; i<api.length; i++){
            var pdAtual = api[i];
            var produto = `<div class="col-8 col-sm-4 col-md-6 col-lg-4 col-xl-3 mt-5  ">
            <div class="card w-100" style="width: 18rem;">
            <img class="card-img-top" style="height: 300px;" src="${pdAtual.image}" alt="">
            <div class="card-body">
              <h5 class="card-title"><a href="detalhes.html?id=${pdAtual.id}">${pdAtual.title}</h5></a>
              <p class="card-text">$ ${pdAtual.price}</p>
              <p class="card-text"> ${pdAtual.category}</p>
              <a href="#" class="btn btn-danger">Adicionar ao carrinho</a>
            </div>
          </div>
          </div>`;

          htmlcards+=produto;
        }
    }

    cards.innerHTML+=htmlcards;

}
function buscar(){
    fetch('https://fakestoreapi.com/products')
            .then(resposta=>resposta.json())
            .then(dados=>pesquisarPd(dados))
}
window.onload = buscar();

function filterCards(searchTerm) {
    let filteredCards = originalCards.filter(function (card) {
      let title = card.title.toLowerCase();
      let description = card.description.toLowerCase();

      return title.includes(searchTerm) || description.includes(searchTerm);
    });

    response = filteredCards;
    currentPage = 1;
    showCards(filteredCards);
    showPagination();
  }

  function resetFilter() {
    response = originalCards;
    currentPage = 1;
    showCards(originalCards);
    showPagination();
    document.getElementById('.txFiltro').value = ''; // Limpa o valor do campo de pesquisa
  }

  

  // Evento de carregamento da página
  fetchProducts('https://fakestoreapi.com/products');

  // Evento de envio do formulário de pesquisa
  document.querySelector('.buscar').addEventListener('submit', function (event) {
    event.preventDefault();
    let searchValue = document.getElementById('.txFiltro').value.toLowerCase().trim();
    filterCards(searchValue);
  });

  function filterCards(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.display = 'none'; // Oculta todos os cards

        // Verifica se a categoria do card corresponde à categoria selecionada
        if (card.dataset.category === category || category === 'all') {
            card.style.display = 'block'; // Exibe os cards correspondentes
        }
    });
}
