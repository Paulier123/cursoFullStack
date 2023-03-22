function verificar(){
    let pais = window.document.querySelector('input#txtext1');
    let result = window.document.querySelector('div#result');
    let calc = String(pais.value)
    //let img = window.document.getElementById('imagem')
    //let faustao = window.document.getElementById('')
    let lista = ['Brasil','Argentina','Uruguai','Paraguai','Bolivia'];
    let comp = lista[Math.floor(Math.random() * lista.length)];
    let img =  window.document.createElement('img');
   
    result.innerHTML =  `<p>Você digitou:  <strong>${calc}</strong></p>`;
    result.innerHTML += `  O computador escolheu <strong>${comp}</strong>`;

    
    if (calc == comp) {
        result.innerHTML += ` <p> Você Acertou!!</p>`;
        //img.src ='download.jpeg';
        img.setAttribute('src', 'download.jpeg');
        result.appendChild(img)
    }
    else {
        result.innerHTML += '  <p>Você Errou</p>'; 
        //img.src ='faustao.jpg';
        img.setAttribute('src', 'faustao.jpg');
        result.appendChild(img)
    } 

    }


