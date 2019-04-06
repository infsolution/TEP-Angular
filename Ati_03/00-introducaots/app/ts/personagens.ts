
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
    forca_ataque: number; 
}

let per = new Personagem(1,"Carlos",279);
console.log(per.estaVivo());
per.defenderAtaque(127)
console.log(per.energia);