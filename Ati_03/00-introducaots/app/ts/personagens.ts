
class Personagem{
    id:number;
    nome:string;
    energia: number;
    constructor(id:number, nome: string, energia:number){
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }

    estaVivo(){
        return this.energia != 0;
    }
    defenderAtaque(valor: number){
        if(valor<= this.energia){
            this.energia -= valor;
        }else{
            this.energia = 0;
        } 
    }
}

class Soldado extends Personagem{
    forca_ataque: number = 10;
    
    atacar(inimigo :Personagem){
        inimigo.defenderAtaque(this.forca_ataque);
    }
    defenderAtaque(valor: number){
        if(valor<= this.energia){
            this.energia -= valor/2;
        }else{
            this.energia = 0;
        } 
    }
}

class Cavaleiro extends Soldado{
    atacar(inimigo :Personagem){
        inimigo.defenderAtaque(this.forca_ataque*2);
    }
    defenderAtaque(valor: number){
        if(valor<= this.energia){
            this.energia -= valor/3;
        }else{
            this.energia = 0;
        } 
    }
}

let per = new Personagem(1,"Carlos",279);
//console.log(per.estaVivo());
//per.defenderAtaque(500)
//console.log(per.estaVivo());
//console.log(per.energia);
let soldado_bananinha = new Soldado(3, "Malucao",120);
let soldado_raso = new Cavaleiro(2, "malvado", 250);
//soldado_raso.atacar(soldado_bananinha);
//console.log(soldado_bananinha.energia);

soldado_bananinha.atacar(soldado_raso);
console.log(soldado_raso.energia);

//soldado_raso.atacar(per);
//console.log(per.energia);
