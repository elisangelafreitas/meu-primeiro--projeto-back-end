const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Elisangela Freitas',
    imagem: 'c:\Users\ElisangelaCristinada\OneDrive - BBNK SOLUCOES TECNOLOGICAS\Área de Trabalho\Pessoal\Elis\foto eli2.png',
    minibio: 'Mulher, mãe, dev e feliz'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
} 

app.use(router.get('/mulher', mostraMulher))
app.listen(porta,mostraPorta)