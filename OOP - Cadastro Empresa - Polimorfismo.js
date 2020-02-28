class Pessoa {
    //construtor da classe
    constructor(nome, tel, email) {
        this.nome = nome;
        this.tel = tel;
        this.email = email;
    }

    getDados() {
        return "nome: " + this.nome;
    };

}

//Exemplo de polimorfismo
class Gerente extends Pessoa {
    constructor(nome, tel, email, setor) {
        super(nome, tel, email);
        this.setor = setor;
    }
    
    getDados() {
        return "Nome: " + this.nome + " - ["+this.setor+"]";
    }

}


class Funcionario extends Pessoa {
    getName() { return this.nome };
}



let pessoa = new Funcionario("john", "322222", "oi@test");
console.log(pessoa.getDados());

let pessoa2 = new Gerente("Jonny", "34444442", "gerente@ya.net", "Supervisor");
console.log(pessoa2.getDados());

