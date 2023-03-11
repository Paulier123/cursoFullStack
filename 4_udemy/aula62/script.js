const numero = 30

const calcular = (num) => {
    
        if(!isNaN(num)===true){
            if(num<=100){
            if(num%3===0 && num%5===0){
                return console.log("FIZZBUZZ")
            }else if (num%3===0){
                return console.log(`FIZZ`)
            }else if(num%5===0){
                return console.log("BUZZ")
            }else if(num%3!==0 && num%5!==0){
                return console.log(num)
            }
        }else{
        console.log(`Numero inválido! Digite um numero entre 0 a 100`)
    }   
    }else{
    console.log(`||ERRO|| O valor "${num}" digitado não é um numero, tente novamente!`)
    }
}

calcular(numero)

