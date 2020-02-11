//Classes são funções
function Produto (nomeP, descP, precoP) {
    this.nome = nomeP;
    this.desc = descP;
    this.preco = precoP;
};

//métodos são prototipos
Produto.prototype.exibeProduto = function () {
    console.log("Nome: " + this.nome + "\nDescrição:" + this.desc + "\n$:" + this.preco);
};

//Instancia como um objeto.
let fruta = new Produto("Morango", "Morangos vindo do Sul do país, fresquinhos!", 4.58);

//Chama o método como propriedade.
fruta.exibeProduto();

//Herança
function ProdutoExclusivo(nomeP, descP, precoP) {
    //chama o pai, passando os atributos.
    Produto.call(this, nomeP, descP, precoP);
}
//Herda o pai.
ProdutoExclusivo.prototype = new Produto();
//Arrumando o ponteiro do construtor.
ProdutoExclusivo.prototype.constructor = ProdutoExclusivo;

//Sobrescrevendo o método do pai.
ProdutoExclusivo.prototype.exibeProduto = function () {
    console.log("[Produto Em Promoção]\nNome: " + this.nome + "\nDescrição:" + this.desc + "\n$:" + this.preco);
};

//Nova Instância.
let fruta2 = new ProdutoExclusivo("Laranja", "Laranja em promoção!", 3.25);

//checar se é uma instância.
console.log(fruta2 instanceof Produto);
fruta2.exibeProduto();
