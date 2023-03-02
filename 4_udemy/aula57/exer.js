const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body)
const estilosBodyColor = estilosBody.backgroundColor

// console.log(estilosBodyColor)

for (let p of ps){
    p.style.backgroundColor = estilosBodyColor
    p.style.color = "white"
}
