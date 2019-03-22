/*let nome : string = "Type Script"
console.log("Hello, " + nome);
let numero : number = 10;
console.log(numero);
let letra : string = "Cicero é foda";
console.log(letra);

let bin : number = 0b1001001001;
let exad : number = 0xfad43;
let octa : number = 0o34123;
let real : number = 2.564654;
console.log(bin);
console.log(exad);
console.log(octa);
console.log(real);

for (let i : number = 0 ; i< 3;i++)
    console.log(i)
console.log(i)


for (var i : number = 0; i<3 ;i++){
    console.log(i)
}
let numeros =[4,5,6];
for(let i = 0; i< numeros.length; i++){
    numeros[i] =  numeros[i]* 2;
    console.log(numeros[i]);
}
let numeros1 =[7,15,21];
for (let numero of numeros){
    console.log(numero);
}

let numeros1 =[7,15,21];
for (let numero in numeros){
    console.log(numero);
}

let a = function add (x:number, y:number): number{
    return x+y;
}

function add (x:number, y:number): number{
    return x+y;
}
console.log(add(7,4));

console.log(a(19,3));

console.log(typeof(a));

function somar(...numeros: number[]){
    let soma = 0;
    for (let numero of numeros){
        soma += numero;
    }
    return soma;
}
console.log(somar(1,5,8));

let a = (numero) => numero * 2;
console.log(a(21));
let numeros : number[] = [11,12,33,47];
numeros = numeros.map(x => 1*x+2*x-1);
console.log(numeros);*/
//EXERCICIO QUESTÕES 01 A 07
//O1
var a = 10;
//a = "10"; //Não compila porque foi infrido que a variavel 'a' é do timpo number quando da sua atribuição inicial;
//console.log(a);
var b = 10;
b = "t"; // 
//console.log(b);//Compila pois ao tipo any pode ser atribuido qualquer valor
var c = 10;
c = 2; //Compila pois c é do tipo number e tá sendo atribuido um numero
//onsole.log(c);
//02
function soma(x, y) {
    return x + y;
}
//console.log(soma(1,2));
//console.log(soma(1,"2"));
//console.log(soma(1));
//03
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["MA"] = 1] = "MA";
    Estados[Estados["CE"] = 2] = "CE";
})(Estados || (Estados = {})); //com "of" ele não iterage e não compila com o "in" ele exibe o indice e o valor
for (var estado in Estados) {
    console.log(estado);
}
console.log(Estados[0]);
//05 
//# sourceMappingURL=app.js.map