//let peso = Number(window.prompt ('Digite um peso: '))
//let altura = Number(window.prompt('Digite sua altura:'))

function verificar(){
    let pe = window.document.getElementById('txtpeso');
    let al = window.document.getElementById('txtaltura');
    let sex = window.document.getElementsByName('radsex')
    res = window.document.querySelector('div#res')
    peso = Number(pe.value);
    altura = Number(al.value)
    imc = peso/(altura**2);
    let img = window.document.createElement('img') 
        if (sex[0].checked){
            if (imc < 18.5){
                //document.write(`Seu imc é de ${imc.toFixed(2)},você esta a baixo do ideal`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A atura Informada foi de ${altura} m, o calculo do 
                seu IMC foi de ${imc}.<p> <strong> Você esta com a baixo do peso ideal</strong></p>`
                img.setAttribute('src','imc-m.png')
                res.appendChild(img)
            } else if (imc >=18.5 & imc <= 24.9){
                    //document.write(`Seu imc é de ${imc.toFixed(2)}, Você esta no peso ideal`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}.<p> <strong> Você esta no peso ideal</strong></p>`
                    img.setAttribute('src','imc-m2.png')
                    res.appendChild(img)
            } else if (imc >24.9 & imc <=29.9){
                    //document.write(`Seu IMC  é de ${imc.toFixed(2)}, você esta com sobrepeso`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A atura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}.<p> <strong> Você esta com sobrepeso</strong></p>`
                    img.setAttribute('src','imc-m3.png')
                    res.appendChild(img)
            } else if (imc >29.9 & imc <=34.9 ){
                    //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso I` )
                res.innerHTML = `O peso informado foi de ${peso} Kg. A altura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}. <p> <strong> Você esta com acima do peso ideal Sobrepeso I</strong></p>`
                    img.setAttribute('src','imc-m4.png')
                    res.appendChild(img)
            } else if (imc >34.9 & imc <= 39.9){
                    //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso II`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC é de
                    ${imc}.<p> <strong> Você esta com acima do peso ideal Sobrepeso II </strong></p>`
                    img.setAttribute('src','imc-m5.png')
                    res.appendChild(img)
            }else {
                //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso I`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC é de 
                ${imc}.<p><strong> Você tem obesidade Morbida, procure um médico nutricionista</strong></p>`
                img.setAttribute('src', 'obesidade.png')
                res.appendChild(img)
            }
            }
        //res.innerHTML = `O peso informado foi de ${peso} e a Altura infomado foi de ${altura}`
        else if (sex[1].checked){        
            if (imc < 18.5){
                //document.write(`Seu imc é de ${imc.toFixed(2)},você esta a baixo do ideal`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A atura Informada foi de ${altura} m, o calculo do 
                seu IMC foi de ${imc}.<p> <strong> Você esta com a baixo do peso ideal</strong></p>`
                img.setAttribute('src','imc-f.png')
                res.appendChild(img)
            } else if (imc >=18.5 & imc <= 24.9){
                    //document.write(`Seu imc é de ${imc.toFixed(2)}, Você esta no peso ideal`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}.<p> <strong> Você esta no peso ideal</strong></p>`
                    img.setAttribute('src','imc-f2.png')
                    res.appendChild(img)
            } else if (imc >24.9 & imc <=29.9){
                    //document.write(`Seu IMC  é de ${imc.toFixed(2)}, você esta com sobrepeso`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A atura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}.<p> <strong> Você esta com sobrepeso</strong></p>`
                    img.setAttribute('src','imc-f3.png')
                    res.appendChild(img)
            } else if (imc >29.9 & imc <=34.9 ){
                    //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso I` )
                res.innerHTML = `O peso informado foi de ${peso} Kg. A altura digitada foi de ${altura} m, o calulo do seu IMC
                    é de ${imc}. <p> <strong> Você esta com acima do peso ideal Sobrepeso I</strong></p>`
                    img.setAttribute('src','imc-f4.png')
                    res.appendChild(img)
            } else if (imc >34.9 & imc <= 39.9){
                    //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso II`)
                res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC é de
                    ${imc}.<p> <strong> Você esta com acima do peso ideal Sobrepeso II </strong></p>`
                    img.setAttribute('src','imc-f5.png')
                    res.appendChild(img)
            }else {
                //document.write(`Seu IMC é de ${imc.toFixed(2)}, você está acima do seu peso ideal. Sobrepeso I`)
                    res.innerHTML = `O peso informado foi de ${peso} Kg. A Altura digitada foi de ${altura} m, o calulo do seu IMC é de 
                    ${imc}.<p><strong> Você tem obesidade Morbida, procure um médico nutricionista</strong></p>`
                    img.setAttribute('src', 'obesidade.png')
                    res.appendChild(img)
            }
        }
    }