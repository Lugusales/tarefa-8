const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/datahora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR'),
    hora: agora.toLocaleTimeString('pt-BR')
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});