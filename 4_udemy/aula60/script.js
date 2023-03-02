const num1 = 100
const num2 = 100.5


getLarger = (num1,num2) =>{
    if (num1===num2){
        console.log("Os numeros são iguais")

    }else{
        if (num1<num2){
            return console.log(`o numero ${num2} é o maior`)
        }else{
            console.log(`O numero ${num1} é o maior`)
        }
    }

}
getLarger(num1,num2)