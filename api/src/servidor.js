import express from "express";
import cors from "cors"
import bodyParser from "body-parser";

import { encontrarUsuarios, atualizaUsuarios, obterUsuarios, adicionarUsuarios, excluirUsuarios } from "./usuariosDb.js"

const app = express(cors());
app.use(cors({
	origin: '*'
}))

app.use(bodyParser.json());

const porta = process.env.porta || 3000;

app
.get('/', (req, res) =>
  res.send("<h3>Rotas no Express</h3><p>Rota '/'")
)
.get("/usuarios", async (_req, res) => {
  const resposta = await obterUsuarios();

  return res.status(200).json(resposta);
})
.get("/login",  encontrarUsuarios)

.post("/cadastro", adicionarUsuarios)
.post("/atualizar-usuario", atualizaUsuarios)

app.listen(porta, () => 
  console.log('Servidor iniciado na porta 3000')
);