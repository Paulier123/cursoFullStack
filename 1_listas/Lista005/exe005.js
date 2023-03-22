let lista = ['Paulier', 'Mylena']

let lista2 = ['Fernando','Paulier','João','André','Marilda','Antonio','Mylena']

let ultimo = lista.pop() /*atribui uma variável para o útimo pois 
ao colocar escrito diretamente no console.log o 
JS estava somando a posição do último a posição da lista 2 */

console.log(`O item ${ultimo}, que é o ultimo da lista 1,
esta na posição ${lista2.lastIndexOf(ultimo)+1} da lista 2`)
  


