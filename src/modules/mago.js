import { Personagem } from "./personagem.js";

// extends sincroniza as informações de personagem com a classe mago
export class Mago extends Personagem {
  elementoMagico
  levelMagico
  inteligencia
  // static coloca em uma informação que não ira mudar nunca
  static tipo = 'Mago'
  static descricao = 'O mago é implacável!'

  constructor(nome, elementoMagico, levelMagico, inteligencia) {
    // super passa o valor do parâmetro para a classe pai(personagem)
    super(nome)

    this.elementoMagico = elementoMagico;
    this.levelMagico = levelMagico;
    this.inteligencia = inteligencia;
  }

  // pegando a function do personagem 
  obterInsignia() {
    if (this.levelMagico >= 5 && this.inteligencia >= 5) {
      return `Mestre do ${this.elementoMagico}`
    }
    // else, chamando a function obterInsignia da class pai(personagem)
    return super.obterInsignia()
  }

}