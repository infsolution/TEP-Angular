var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personagem = (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }
    Personagem.prototype.estaVivo = function () {
        return this.energia != 0;
    };
    Personagem.prototype.defenderAtaque = function (valor) {
        if (valor <= this.energia) {
            this.energia -= valor;
        }
        else {
            this.energia = 0;
        }
    };
    return Personagem;
}());
var Soldado = (function (_super) {
    __extends(Soldado, _super);
    function Soldado() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forca_ataque = 10;
        return _this;
    }
    Soldado.prototype.atacar = function (inimigo) {
        inimigo.defenderAtaque(this.forca_ataque);
    };
    Soldado.prototype.defenderAtaque = function (valor) {
        if (valor <= this.energia) {
            this.energia -= valor / 2;
        }
        else {
            this.energia = 0;
        }
    };
    return Soldado;
}(Personagem));
var Cavaleiro = (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cavaleiro.prototype.atacar = function (inimigo) {
        inimigo.defenderAtaque(this.forca_ataque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valor) {
        if (valor <= this.energia) {
            this.energia -= valor / 3;
        }
        else {
            this.energia = 0;
        }
    };
    return Cavaleiro;
}(Soldado));
var per = new Personagem(1, "Carlos", 279);
//console.log(per.estaVivo());
//per.defenderAtaque(500)
//console.log(per.estaVivo());
//console.log(per.energia);
var soldado_bananinha = new Soldado(3, "Malucao", 120);
var soldado_raso = new Cavaleiro(2, "malvado", 250);
//soldado_raso.atacar(soldado_bananinha);
//console.log(soldado_bananinha.energia);
soldado_bananinha.atacar(soldado_raso);
console.log(soldado_raso.energia);
//soldado_raso.atacar(per);
//console.log(per.energia);
//# sourceMappingURL=personagens.js.map