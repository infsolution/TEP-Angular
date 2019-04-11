"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagens_1 = require("./personagens");
var Jogo = (function () {
    function Jogo() {
        this.personagens = [];
    }
    Jogo.prototype.include = function (personagem) {
        if (!this.consultar(personagem.id)) {
            this.personagens.push(personagem);
        }
        else {
            console.log("Personagem já existe");
        }
    };
    Jogo.prototype.consultar = function (id) {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            if (personagem.id == id) {
                return personagem;
            }
        }
        return null;
    };
    Jogo.prototype.atacar = function (atacante, atacado) {
        var ataque = this.consultar(atacante);
        var defesa = this.consultar(atacado);
        if (ataque && defesa && ataque != defesa) {
            if (ataque instanceof personagens_1.Soldado || ataque instanceof personagens_1.Cavaleiro) {
                ataque.atacar(defesa);
            }
            else {
                console.log("Voce não tem poder de atque =( ");
            }
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        for (var _i = 0, _a = this.personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            console.log(personagem);
            console.log(personagem.estaVivo());
        }
    };
    return Jogo;
}());
var jogar = new Jogo();
var soldado = new personagens_1.Soldado(3, "Malucao", 120);
var soldado_21 = new personagens_1.Soldado(4, "Matador", 120);
var plebeu = new personagens_1.Personagem(12, "Marconde", 120);
var capitao = new personagens_1.Cavaleiro(50, "Moura", 250);
jogar.include(soldado);
jogar.include(soldado_21);
jogar.include(plebeu);
jogar.include(capitao);
jogar.atacar(3, 12);
jogar.atacar(4, 50);
jogar.atacar(50, 3);
jogar.atacar(50, 12);
jogar.atacar(12, 3);
jogar.atacar(12, 50);
jogar.atacar(3, 50);
jogar.atacar(3, 4);
jogar.atacar(50, 4);
jogar.avaliarBatalha();
//console.log(jogar.consultar(2)); 
//# sourceMappingURL=jogo.js.map