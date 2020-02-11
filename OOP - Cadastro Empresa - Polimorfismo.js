function Pessoa(nome, tel, email) {
    this.nome = nome;
    this.tel = tel;
    this.email = email;
}

Pessoa.prototype.getDados = function() {
    return "nome: " + this.nome;
}

function Gerente(nome, tel, email, setor) {
    Pessoa.call(this, nome, tel, email);
    this.setor = setor;
}

Gerente.prototype = new Pessoa();
Gerente.prototype.constructor = Gerente;

//Polimorfismo para com pessoa.
Gerente.prototype.getDados = function() {
    return "Nome: " + this.nome + " - ["+this.setor+"]";
}

function Funcionario(nome, tel, email) {
    Pessoa.call(this, nome, tel, email);
}

Funcionario.prototype = new Pessoa();
Funcionario.prototype.constructor = Funcionario;


let pessoa = new Funcionario("john", "322222", "oi@test");
console.log(pessoa.getDados());

let pessoa2 = new Gerente("Jonny", "34444442", "gerente@ya.net", "Supervisor");
console.log(pessoa2.getDados());

