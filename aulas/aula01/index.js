// variaveis 
let variavel_local = 10; //number
const constante = []; // array
const objeto = {}; // objeto
const msg = "Texto"  //string
let status = false; //bool

// function
function soma (a, b){
    return a + b;

};

let resultado = soma (1, 2);

const multiplica = (a , b) => a * b;
resultado = multiplica (1, 2);


async function tempo(duracao) {
    await new Promise((r) => {
        setInterval(r, duracao);
    });
    
    console.log("passou o tempo");
}

tempo(3000)
// objeto

const pessoa = { nome: "Jose", email: "jose@iesb.br", fone :"8888-8888"};
console.log(pessoa.nome);
pessoa.nome = "jose Reginaldo";
console.log(pessoa.nome);
const { nome } = pessoa;
console.log (nome);

const pessoa_fisica = {cpf:111, ...pessoa};


const lista = [];
lista.push("uva");
const achou = lista.find((item) => item === "uva");

/* for(int 1=0; i<lista.length; i++){
    if(lista[i]) === "uva"){

    }
} */

    const texto = "Ola";
    texto.concat( "Mundo" );
    texto.toUpperCase();

// moculos


export {soma, multiplica}