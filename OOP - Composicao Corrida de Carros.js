//Classe dos Carros
class Carro {
    constructor(modelo, piloto) {
        this.modelo = modelo;
        this.piloto = piloto;
    }
}

//Classe do Piloto
class Piloto {
    constructor(nomePiloto) {
        this.piloto = nomePiloto;
    }

    correr() {
        console.log(`Ó ${this.piloto} está correndo...`);
    }
}

//Classe corrida com composição.
class Corrida {
    constructor(nomePiloto, modeloCarro) {
        this.piloto = new Piloto(nomePiloto);
        this.carro = new Carro(modeloCarro, this.piloto);
    
        this.iniciar();
    }

    iniciar() {
        this.piloto.correr();
    }
}

let corrida = new Corrida("John", "Maserati");