let lista = ['Fernando','Paulier','João','André','Marilda','Antonio','Mylena']


console.log(`A lista é: [${lista.join(', ')}]`)

//Nesse exercicio tentei usaro o laço for mas não funcionou, ele não tirava os tres útimos elementos da lista

while (lista.length>0) {
    lista.pop()
    console.log(`Removendo o útimo elemento fica: ${lista.join(', ')}`)
}