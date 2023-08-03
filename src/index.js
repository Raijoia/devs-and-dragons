// importando
import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

// criando 
const magoAntonio = new Mago('Antônio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 6)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroJorge = new Guerreiro('Jorge', 8)

// passando pra array que ta na personagemview
const personagens = [
    magoAntonio,
    magaJulia,
    arqueiroBruno,
    arqueiroMagoChico,
    guerreiroJorge,
]

// chamando a função render da personagemview passando personagens
new PersonagemView(personagens).render()
