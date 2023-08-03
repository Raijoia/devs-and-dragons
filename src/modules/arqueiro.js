import { Personagem } from "./personagem.js";

// extends sincroniza com a class principal Personagem
export class Arqueiro extends Personagem {
  // static coloca em uma informação que não ira mudar nunca
  static tipo = 'Arqueiro';
  static descricao =  'Você tem o meu arco!'
  destreza

  constructor(nome, destreza) {
    // super manda os dados pra class pai(personagem)
    super(nome)
    this.destreza = destreza
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flechas`
    }
    // else, chamando a function obterInsignia da class pai(personagem)
    return super.obterInsignia()
  }

}