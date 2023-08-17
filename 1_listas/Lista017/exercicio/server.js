const express = require('express');
const app = express();
const port = 8585
app.use(express.json())

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