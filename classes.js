// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      // Determina o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "realizou um ataque";
      }
  
      // Exibe a mensagem
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe Heroi
  const mago = new Heroi("Merlin", 100, "mago");
  const guerreiro = new Heroi("Aragorn", 35, "guerreiro");
  
  mago.atacar();        // Saída: O mago atacou usando magia
  guerreiro.atacar();   // Saída: O guerreiro atacou usando espada
  