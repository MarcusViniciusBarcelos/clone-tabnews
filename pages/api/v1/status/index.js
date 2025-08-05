function status(request, response) {
  response.status(200).json({chave:"Alunos do curso.dev sao alunos acima da média"});
}

export default status;