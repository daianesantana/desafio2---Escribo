const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const authMiddleware = require('../middlewares/authMiddleware'); 

const router = express.Router();

router.get('/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ['nome', 'email', 'telefone', 'data_criacao', 'data_atualizacao', 'ultimo_login', 'token'],
    });

    if (!user) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
});

module.exports = router;
