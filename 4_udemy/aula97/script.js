let cpf = '705.484.450-52'
//remover todo conteudo que não for numero
let cpflimpo =  cpf.replace(/\D+/g, "");

//precisa reconverter para array
let arrayCpf = Array.from(cpflimpo) 
//remover os útimos dois digitos
arrayCpf.pop(arrayCpf.length)
console.log(arrayCpf)