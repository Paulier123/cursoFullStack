const router = require('express').Router()
const Person = require('../models/person');
router.post('/person', async (req, res) => {


    //req.body

    const { name, salary, approved } = req.body


    if (!name) {
        res.status(422).json({ error: 'ERRO|| Nome não inserido' })
        return
    }
    const person = {
        name,
        salary,
        approved
    }
    //create"
    try {
        //criando dados
        await Person.create(person)
        res.status(201).json({ message: 'Pessoa inserida com sucesso' })

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Read - Leitura

router.get('/person', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})
router.get('/person/:id', async (req, res) => { //construindo rotas dinamicas
    //extrair o dado da requisiçaõ, pela url
    const id = req.params.id
    try {
        const person = await Person.findOne({ _id: id })

        if (!person) {
            res.status(422).json({ message: "O usuário não foi encontrado" })
            return
        }

        res.status(200).json({ person })

    } catch (error) {
        res.status(500).json({ error: error })

    }
})

//atualização de dados

router.patch('/person/:id', async (req, res) => {
    const id = req.params.id

    const { name, salary, approved } = req.body;
    const person = {
        name,
        salary,
        approved
    }

    try {
        const updatePerson = await Person.updateOne({ _id: id }, person);
        if (updatePerson.matchedCount === 0) { //mathechCount verificar se o usuário foi encontrado metodo do mongoose
            res.status(422).json({ message: "O usuário não foi encontrado" })
            return
        }
        res.status(200).json({ message: "Pessoa alterada com sucesso." })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.delete('/person/:id', async (req, res) => {
    const id = req.params.id;
    
    const person = await Person.findOne({ _id: id });
    if (!person) {
        res.status(422).json({ messagem: 'Pessoa não encontrada' })
        return
    }
    
    try {
        await Person.deleteOne({ _id: id })
        res.status(200).json({message:"Pessoa deletada com sucesso"})

    } catch (error) {
        res.status(500).json({ error: error })
    }

})
module.exports = router