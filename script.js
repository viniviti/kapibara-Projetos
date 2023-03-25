const lista = [1,8,9,2,1,8,5,4,7,2,3,9,6,4,82,1,2,3,9,10,12,5,22,25,27,31,30,5,9,80,82,50,40,41,50];

const resultado = {};
for (let i = 0; i < lista.length; i++) {
  const num = lista[i];
  if (lista.indexOf(num) !== i) {
    if (num in resultado) {
      resultado[num] += 1;
    } else {
      resultado[num] = 2;
    }
  }
}

console.log(resultado);