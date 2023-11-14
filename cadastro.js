import { validarEmail } from "./utils.js";

// Defina um evento de clique no botão de login
$('#btn-cadastro').click(async (e) => {
    // Obtenha os dados do formulário de login
    const nome             = $('#nome').val();
    const email            = $('#emailCadastro').val();
    const senha            = $('#senhaCadastro').val();
    const confirmacaoSenha = $('#senhaConfirmacaoCadastro').val();
  
    if (nome === "")
      return alert("O campo nome não pode ser vazio!");

    if (email === "")
      return alert("O campo email não pode ser vazio!");

    if (!validarEmail(email))
      return alert("Email inválido! Por favor, informe um email válido!");

    if (senha === "")
      return alert("O campo senha não pode ser vazio!");

    if (confirmacaoSenha === "")
      return alert("O campo confirmar senha não pode ser vazio!");

    if (senha !== confirmacaoSenha)
      return alert("As senhas não podem ser diferentes, por favor verifique as novamente!");

    const url = `http://localhost:3000/cadastro`;

    const body = {
        nome: nome,
        usuario: email,
        senha: senha
    };
  
    try {
      const promise = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      
      if (promise.ok) {
        const data = await promise.json();
        alert(data.mensagem);
        window.location.href = "./login.html";
  
      } else {
        alert((await promise.json()).mensagem);
        window.location.href = "./cadastro.html";
      }
  
    } catch (e) {
      console.log("Error: " + e.message);
    }
    
  });
  
  