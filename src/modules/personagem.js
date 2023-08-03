export class Personagem {
  nome
  vida = 100
  mana = 100

  // colocando # para encapsular o level, quando temos dados sensiveis temos que encapsular por segurança, para certificar que o valor não será mudado
  #level

  tipo
  descricao

  // constructor iniciado apenas quando instancia é criada, passando parametros que serão pedidos na hora de criar uma instancia nova
  // Apenas um constructor por classe
  constructor(nome) {
    this.nome = nome
    this.#level = 1
  }

  aumentarLevel() {
    this.level += 1
  }

  diminuirLevel() {
    this.level -= 1
  }

  // função get pega o valor do dado encapsulado automaticamente quando o dado é passado pelo super
  get level() {
    return this.#level
  }

  // função set cria uma lógica de negócio onde há uma necessidade de alterar o valor de um dado encapsulado(propriedade privada)
  set level(novoLevel) {
    if (novoLevel >= 1 && novoLevel <= 10) {
      this.#level = novoLevel
    }
  }

  obterInsignia() {
    if (this.#level >= 5) {
      return `Implacável ${this.constructor.tipo}`
    }
    return `${this.constructor.tipo} iniciante`
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return 'Empate!!'
    }
    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
  }

}