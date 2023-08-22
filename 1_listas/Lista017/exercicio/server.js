const express = require('express');
const app = express();
const port = 8585
app.use(express.json())
 app.get('/hello',(req,res)=>{
  res.status(201).send(`Hello`)
 })

 app.post('/message',(req,res)=>{
 res.status(201).send(`Message`)
 })

 app.put('/update',(req,res)=>{
	res.status(201).send(`Objeto alterado com sucesso`)

 })

 app.delete('/delete',(req,res)=>{
res.status(201).send("Objeto deletado com sucesso")
 })

const users =[
		{
			id: "akjfhskjfhslkdfbsl",
			nome: "Liz Maya Bárbara da Costa",
			idade: 61,
				
		},
		{
			id: "amnc0cs45f",
			nome: "Martin Danilo Pietro Teixeira",
			idade: 53,
		},
	]


app.get('/users/:id', (req, res) => {
	
		const id = String(req.params.id);
		const user = users.find((el) => el.id === id)		
		
		if(user){
			res.status(200).json(user)
		}else{
			res.status(404).send("Produto não encontrado")
	}
})
	
app.listen(port, () => {
	console.log(`Server funcionando em http://127.0.0.1:${port}`)
})