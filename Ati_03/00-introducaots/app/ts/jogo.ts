import{Personagem, Cavaleiro, Soldado} from "./personagens"

class Jogo{
    personagens: Array< Personagem> = [];
    constructor(){
    }
    include(personagem:Personagem){
        if(!this.consultar(personagem.id)){
            this.personagens.push(personagem);
        }else{
            console.log("Personagem já existe");
        }
    }
    consultar(id: number){
        for(let personagem of this.personagens){
            if(personagem.id == id){
                return personagem;
            }
        }
        return null;
    }
    atacar(atacante:number, atacado: number){
        let ataque = this.consultar(atacante)
        let defesa = this.consultar(atacado);
        if(ataque && defesa && ataque != defesa){
            if(ataque instanceof Soldado || ataque instanceof Cavaleiro){
                ataque.atacar(defesa);
            }
            else{
                console.log("Voce não tem poder de atque =( ");
            }
        }
    }

    avaliarBatalha(){
        for(let personagem of this.personagens){
            console.log(personagem);
            console.log(personagem.estaVivo());
        }
    }
}

let jogar = new Jogo()
let soldado = new Soldado(3, "Malucao",120);
let soldado_21 = new Soldado(4,"Matador", 120);
let plebeu = new Personagem(12,"Marconde",120);
let capitao = new Cavaleiro(50, "Moura", 250);
jogar.include(soldado);
jogar.include(soldado_21);
jogar.include(plebeu);
jogar.include(capitao);
jogar.atacar(3,12);
jogar.atacar(4,50);
jogar.atacar(50,3);
jogar.atacar(50,12);
jogar.atacar(12,3);
jogar.atacar(12,50);
jogar.atacar(3,50);
jogar.atacar(3,4);
jogar.atacar(50,4);
jogar.avaliarBatalha();
//console.log(jogar.consultar(2));