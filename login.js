// Defina um evento de clique no botão de login
$('#login-btn').click(async (e) => {
  // Obtenha os dados do formulário de login
  const usuario = $('#usuarioLogin').val();
  const senha = $('#senhaLogin').val();

  console.log(usuario);
  console.log(senha);

  const url = `http://localhost:3000/login?usuario=${usuario}&senha=${senha}`;

  try {
    const promise = await fetch(url);
    
    if (promise.ok) {
      const data = await promise.json();
      alert(data.mensagem);
      window.location.href = "./template.html";

    } else {
      alert((await promise.json()).mensagem);
      window.location.href = "./login.html";
    }

  } catch (e) {
    console.log("Error: " + e.message);
  }
  
});

