const produto = {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: .05
}

const clone = o => ({...o});

const produto2 = clone(produto);
produto2.nome = 'Caneta BIC Azul';

console.log(produto, produto2);