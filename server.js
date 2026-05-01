app.get('/datahora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    }),
    hora: agora.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo'
    })
  });
});