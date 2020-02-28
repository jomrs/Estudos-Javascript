//Classes em ES6.
class Produto {
    constructor(nomeP, descP, precoP) {
        this.nome = nomeP;
        this.desc = descP;
        this.preco = precoP;
    }
    //Metódos em classe as ES6.
    exibeProduto() {
        console.log("Nome: " + this.nome + "\nDescrição:" + this.desc + "\n$:" + this.preco);
    }
};


//Instancia a classe como um objeto.
let fruta = new Produto("Morango", "Morangos vindo do Sul do país, fresquinhos!", 4.58);

//Chama o método como propriedade.
fruta.exibeProduto();

//Herança declaramos um extend para com a classe Pai.
class ProdutoExclusivo extends Produto {
    //No construtor invocamos o construtor do Pai com o super.
    constructor(nomeP, descP, precoP){
        super(nomeP, descP, precoP);
    }
    //Método do Pai sobrescrevido.
    exibeProduto() {
        console.log("[Produto Em Promoção]\nNome: " + this.nome + "\nDescrição:" + this.desc + "\n$:" + this.preco);
    }
}

//Nova Instância agora como ProdutoExclusivo.
let fruta2 = new ProdutoExclusivo("Laranja", "Laranja em promoção!", 3.25);

//checar se é uma instância.
console.log(fruta2 instanceof Produto);
fruta2.exibeProduto();
