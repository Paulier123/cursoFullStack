let lista = ['Paulirr','Mylena','Marilda','Manoel','fernando','Cristiano']
let lista2 = ['Paulier','Mylena','Marilda','Manoel','Antonio','Cristiano']

    for (i=0; i<lista2.length;i++)

    for (i=0; i<lista.length;i++)
    
    if (lista.includes(lista2[i])==true){

        console.log(`O item ${lista2[i]} é igual nas duas listas`)

    }else if (lista.includes(lista2[i])=='') {

        console.log(`Não existe correspondente para o item ${lista[i]} na lista 2`)

    }else{

        console.log(`O item ${lista2[i]} não é iguas nas duas listas`)
    }
            