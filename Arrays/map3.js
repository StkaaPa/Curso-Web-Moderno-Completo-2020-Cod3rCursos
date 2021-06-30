//! para map2() estar definida, tem que criar a função map2()
Array.prototype.map2 = function(callback){
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        //* this[i]- elemento atual, i - indice, this - array
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

const jsonParaObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;
const resultado = carrinho.map2(jsonParaObjeto).map2(apenasPreco);
console.log(resultado)
// -> [ 3.45, 13.9, 41.22, 7.5 ]