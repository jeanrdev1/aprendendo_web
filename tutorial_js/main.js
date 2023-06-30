var nome = 'jean'
var nome = 'teste'

let novo = 'Jean2'
novo = 'Jean9'

let idade = 29

const casado = true;

const teste = {
    nome: 'Jean',
    idade: 29
}

console.log(teste.idade)


let teste2 = ['teste', 'abc']
console.log(teste2[1])

let pessoa = {
    primeiroNome: 'Jean',
    ultimoNome: 'Ribeiro'
}


let objeto1 = {
    prop1: 'TESTE',
    prop2: 2023
}

console.log(objeto1)
console.log(objeto1.prop1)
console.log(objeto1['prop1'])

let objeto2 = {
    'prop1': 'TESTE2',
    'prop2': 20232,
    'prop3': false
}

console.log(objeto2)
console.log(objeto2.prop2)
console.log(objeto2['prop3'])

let objeto3 = [
    'TESTE3',
    20233,
    true
]

console.log(objeto3)
console.log(objeto3[2])

let texto = 19.95

console.log('ASPAS SIMPLES R${231}' + texto)
console.log("ASPAS DUPLAS " + texto)
console.log(`ASPAS INVERTIDAS: R\$${texto}`)


function mostrarAlerta() {
    alert('Hello World!')
    
    return 'MOSTRAR ALERTA'
}

var minhaFuncao;

minhaFuncao = function() {
    console.log('minhaFunção');
    (function() {
        console.log('valor')
    })();
}

function algoritmos() {
    
    for (let index = 0; index < 5; index++) {
        console.log(index)
    }

    let sw = 'ABC'

    switch (sw) {
        case 'ABC':
            console.log('ABC')
            break;
        default:
            console.log('nao encontrado')
            break;
    }

    objeto3.forEach(element => {
        console.log(element)
    });

    var rodando = true;
    var contador = 1;

    while (rodando) {
        console.log(rodando, contador)
        if (contador > 5) {
            rodando = false;
        }
        contador++;
    }

    if (rodando) {
        
    } else if (!rodando) {

    }
}