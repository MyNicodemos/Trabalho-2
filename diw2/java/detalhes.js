function detalhepd(pdid){
    let permissao = 'https://fakestoreapi.com/products?id='+pdid;
    fetch(permissao)
    .then(resposta=>resposta.json())
    .then(dados=>pesquisa(dados))
}

function pesquisa(pdAtual){
    var prodatual = document.getElementById("row");
    htmlcards = "";
    var id = new URLSearchParams(window.location.search);
    var recebeid = id.get("id");
    let vet = parseInt(recebeid);
    let poscaovet = vet-1;
    var cards = `<div class="col-6 d-flex  mt-5  ">
    <div class="card w-100" style="width: 18rem;">
    <img class="card-img-top " style="height: 300px;" src="${pdAtual[poscaovet].image}" alt="">
    <div class="card-body">
      <h5 class="card-title"><a href="detalhes.html?id=${pdAtual[poscaovet].id}">${pdAtual[poscaovet].title}</h5></a>
      <p class="card-text">$ ${pdAtual[poscaovet].description}</p>
      <p class="card-text">$ ${pdAtual[poscaovet].price}</p>
      <p class="card-text"> ${pdAtual[poscaovet].category}</p>
      <a href="#" class="btn btn-danger">Adicionar ao carrinho</a>
    </div>
  </div>
  </div>`;
  htmlcards+=cards;
  prodatual.innerHTML+=htmlcards;
}
window.onload = () => {
    var id = new URLSearchParams(window.location.search);
    var recebeid = id.get("id");
    detalhepd(recebeid);


}