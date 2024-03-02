//FUNCIONES

function saludo(saludo) {
    console.log(saludo);
    return 9;
}

console.log(saludo('Buenos días estrellitas'));

function sumar(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return 'No se puede sumar';
    }
    return x + y;
}

console.log(sumar(1, 3));

//Scope

//Lexical Scope

function bankRobbery() {
    const heroes = ['Batman', 'Chapulin', 'Rey Misterio'];
    return function cryForHelp() {
        for (let hero of heroes) {
            console.log(`HELP ${hero}`);
        }
    }
}

bankRobbery()();

//Function expressions

const square = function(num) {
    return num ** 2;
}

console.log(square(10));

//THIS

this.a = 40;
function alpha() {
    this.b = 90;
    console.log(this);
}



alpha();


const objeto = {
    value: 2,
    greet: function() {
        console.log(this.value + 7)
    }
}

objeto.greet();