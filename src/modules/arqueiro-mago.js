// Juntando duas instancias em uma

// importando
import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro
  ladoMago
  // static coloca em uma informação que não ira mudar nunca
  static tipo = 'ArqueiroMago'
  static descricao = 'Detentor de lancas e flechas mágicas!'

  constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
    super(nome)

    // criando como arqueiro com a variável ladoArqueiro
    this.ladoArqueiro = new Arqueiro(nome, destreza)

    // criando como mago com a variável ladoMago
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
  }

}