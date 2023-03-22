let lista = ['Paulier','Mylena','Marilda','Fernando']
let lista2 = ['Antonio','Paulier','Fernando','José','Mylena','Pedro','Marilda']


for (i=0;i<lista.length;i++){
    //console.log(lista2[i])
    console.log(`O item ${lista[i]} esta na posição ${lista2.indexOf(lista[i])+1} da lista 2`)
}

