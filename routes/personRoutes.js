const router = require('express').Router() 
const Person = require('../Models/Person');

router.post('/', async (req, res) => {
  const { name, salary, approved } = req.body
  if(!name){
    res.status(422).json({error: 'O nome é obrigatorio!'})
    return
  }

  const person = {
    name,
    salary,
    approved,
  }

  try {
    await Person.create(person)
    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
  } catch (err) {
    res.status(500).json({ error: error })
  }
})


//Read- leitura de dados
router.get('/', async(req, res)=>{
  try{
    // garante que todos os dados sejam retornados
    const people = await Person.find()
    res.status(200).json(people)

  } catch (err) {
    res.status(500).json({ error: error })
  }
})

// filtrar por pessoas
router.get('/:id', async (req, res) =>{

   // extrair o dado da requisição
  const id = req.params.id
  try{
    const person = await Person.findOne({_id:id})

    if(!person){
      res.status(422).json({message:"O usuario não foi encontrado!"})
      return
    }
    res.status(200).json({person})
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

//Update - atualização de dados(Put(espera que receba uma resposta completa), Path(atualização parcial))
router.patch('/:id',async(req, res)=>{
  const id = req.params.id
  const { name, salary, approved } = req.body

  const person = 
   { name, 
     salary,
     approved,
   } 
   try{
    const updatePerson = await Person.updateOne({_id: id}, person)
    if(updatePerson.matchedCount === 0){
      res.status(422).json({message:"O usuario não foi encontrado!"})
      return
    }
    res.status(200).json({person})
   }catch (err) {
    res.status(500).json({ error: err })
  }
})

// delete Deletar dados 
router.delete('/:id', async(req, res)=>{
  const id = req.params.id
    const person = await Person.findOne({_id: id})
    if(!person){
      res.status(422).json({message:"O usuario não foi encontrado!"})
      return
    }

    try{
      await Person.deleteOne({_id: id})
      res.status(200).json({message:"O usuario removido com sucesso!"})
      } catch (err) {
      res.status(500).json({ error: err })
    }
})
  module.exports = router