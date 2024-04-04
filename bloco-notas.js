// routes/bloco-notas.js
const express = require('express');
const router = express.Router();
const BlocoNota = require('../models/blocoNota');

// Rota para obter todos os blocos de notas
router.get('/', async (req, res) => {
  try {
    const blocosNotas = await BlocoNota.find();
    res.json(blocosNotas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para criar um novo bloco de notas
router.post('/', async (req, res) => {
  const blocoNota = new BlocoNota({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  });
  try {
    const novoBlocoNota = await blocoNota.save();
    res.status(201).json(novoBlocoNota);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
