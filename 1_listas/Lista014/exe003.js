function Livro(titulo, autor,ano){
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;

    this.exibirDados = function(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ano: ${this.ano}`)
    }
    
}
const livro = new Livro("O foco","Damiel Golleman", 2003)

livro.exibirDados()
