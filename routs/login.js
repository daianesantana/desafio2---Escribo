import { Router } from 'express';

const router = Router();

router.post('/api/v1/auth/signin', async (req, res) => {
  const { email, senha } = req.body;

  // Busca o usuário pelo e-mail
  const user = await User.findOne({ email });

  // Verifica se o usuário existe
  if (!user) {
    return res.status(400).json({
      erro: "E-mail não cadastrado",
    });
  }

  // Verifica se a senha está correta
  const senhaValida = bcrypt.compareSync(senha, user.senha);
  if (!senhaValida) {
    return res.status(401).json({
      erro: "Usuário e/ou senha incorretos",
    });
  }

  // Gera um token de autenticação
  const token = user.gerarToken();

  // Retorna o usuário com o token
  res.json({
    id: user.id,
    data_criacao: user.data_criacao,
    data_atualizacao: user.data_atualizacao,
    ultimo_login: user.ultimo_login,
    token,
  });
});

export default router;
