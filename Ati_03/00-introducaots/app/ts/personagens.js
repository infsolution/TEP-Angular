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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Soldado;
}(Personagem));
var per = new Personagem(1, "Carlos", 279);
console.log(per.estaVivo());
per.defenderAtaque(127);
console.log(per.energia);
//# sourceMappingURL=personagens.js.map