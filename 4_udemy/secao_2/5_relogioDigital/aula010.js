
function background(){
    const data = new Date()
    let hora = data.getHours()
    let body = document.querySelector("body#corpo")
    let novoPlano = document.createElement("img")

    if(hora>=6 && hora < 12){
        body.innerHTML += ` <p>`
        novoPlano.setAttribute("src", './img/manha.png')
        body.appendChild(novoPlano)

    }else if(hora>=12 && hora<18){
        body.innerHTML += ` <p>`
        novoPlano.setAttribute("src",'./img/tarde.png')
        body.appendChild(novoPlano)
    }else{
        body.innerHTML += ` <p>`
        novoPlano.setAttribute('src','./img/noite.png')
        body.appendChild(novoPlano)
    } 
    
}
function horaAtual (){
    const data = new Date()
    let horas = data.getHours()
    let div = document.getElementById('relogio')
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    if(horas >=6 && horas <12){

        if (horas<10){
            let horaTotal = `<p><strong>Bom dia!! <br> </sttrong></br> São: 0${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (minutos<10){
            let horaTotal = `<p><strong>Bom dia!! <br> </sttrong></br> São: ${horas} : 0${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (segundos<10){
            let horaTotal = `<p><strong>Bom dia!! <br> </sttrong></br> São: ${horas} : ${minutos} : 0${segundos}`
            div.innerHTML = `${horaTotal}`
        }else{
            let horaTotal = `<p><strong>Bom dia!! <br> </sttrong></br> São: ${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`

        }

    } else if (horas>=12 && horas <18){

        if (horas<10){
            let horaTotal = `<p><strong>Boa Tarde!! <br> </sttrong></br> São: 0${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (minutos<10){
            let horaTotal = `<p><strong>Boa Tarde!! <br> </sttrong></br> São: ${horas} : 0${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (segundos<10){
            let horaTotal = `<p><strong>Boa Tarde!! <br> </sttrong></br> São: ${horas} : ${minutos} : 0${segundos}`
            div.innerHTML = `${horaTotal}`
        }else{
            let horaTotal = `<p><strong>Boa Tarde!! <br> </sttrong></br> São: ${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`

        }

    } else {

        if (horas<10){
            let horaTotal = `<p><strong>Boa noite!! <br> </sttrong></br> São: 0${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (minutos<10){
            let horaTotal = `<p><strong>Boa noite!! <br> </sttrong> </br> São: ${horas} : 0${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`
       
        }else if (segundos<10){
            let horaTotal = `<p><strong>Boa noite!! <br> </sttrong> </br> São: ${horas} : ${minutos} : 0${segundos}`
            div.innerHTML = `${horaTotal}`
        }else{
            let horaTotal = `<p><strong>Boa noite!! <br> </sttrong> </br> São: ${horas} : ${minutos} : ${segundos}`
            div.innerHTML = `${horaTotal}`

        }
    }

    
}

background()
horaAtual()
setInterval(horaAtual,1)