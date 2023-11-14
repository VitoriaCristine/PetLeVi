import { usuariosColecao } from "./dbConnect.js";

import "./dbConnect.js"


async function obterUsuarios() {
  try {
    const usuarios = await usuariosColecao.find().toArray();

    return usuarios;
  } catch (e) {
    return { mensagem: e.message, tipo: e.name };
  }
}


async function adicionarUsuarios(req, res) {
  try {
    const nome    = req.body.nome; 
    const usuario = req.body.usuario;
    const senha   = req.body.senha;

    const resultado = await usuariosColecao.insertOne({
      nome:    nome,
      usuario: usuario,
      senha:   senha
    });

    return res.status(200).json({ resultado, mensagem: "Usuario criado com sucesso!" });
  } catch (e) {
    return res.status(500).json({ mensagem: e.message, tipo: e.name });
  }
}


async function encontrarUsuarios(req, res) {
  try {
    const usuario = req.query.usuario;
    const senha   = req.query.senha;

    console.log("encontrarUsuarios")
    console.log(usuario)
    console.log(senha)

    const user = await usuariosColecao.findOne({ 
      usuario: usuario,
      senha: senha
    });

    if (!user) 
      throw new Error("Usuario ou senha estão incorretos!");
  
    return res.status(200).json({ usuario: user, mensagem: "Usuario logado com sucesso!" });
  } catch (e) {
    return res.status(500).json({ mensagem: e.message, tipo: e.name });
  }
}

async function atualizaUsuarios(req, res) {
  try {
    const usuario = req.body.usuario;
    const senha   = req.body.senha;

    const atualizacao = await usuariosColecao.updateOne(
      {
        nome
      },
      {
        $set: { texto }
      }
    );
  
    return res.status(200).json({ atualizacao });
  } catch (e) {
    return res.status(500).json({ mensagem: e.message, tipo: e.name });
  }
}

async function excluirUsuarios(req, res) {
  try {
    const usuario = req.body.usuario;
    const senha   = req.body.senha;

    const resultado = await usuariosColecao.deleteOne({
      nome
    });
  
    return res.status(200).json({ resultado });
  } catch (e) {
    return res.status(500).json({ mensagem: e.message, tipo: e.name });
  }
}

export { encontrarUsuarios, atualizaUsuarios, obterUsuarios, adicionarUsuarios, excluirUsuarios };
