let senha = document.getElementById('senha');
let email = document.getElementById('email');

let senhaValida = false;
let emailValido = false;

/* 
o onblur é uma funçao que executa as açoes dentro dela 
quando você clica em um input e em seguida clica fora dele.
faça o teste: abra a tela, clique no input de email e
depois clique fora dele, em qualquer lugar da tela
*/
email.onblur = function () {
  let id = 'erroEmail';
  let errorMessage = 'Insira um email válido';

  //se o campo de email estiver vazio OU não tiver um @, mostra um erro
  if (email.value == '' || !email.value.includes('@')) {
    showError(email, id, errorMessage);
    emailValido = false;
    document.querySelector('button').disabled = true;
  } else {
    //se estiver válido, remove o erro e passa a dizer que o email é válido
    removeError(id);
    emailValido = true;

    //se o campo de email e senha forem válidos, habilitada o botao de submit
    if (emailValido && senhaValida) {
      document.querySelector('button').disabled = false;
    }
  }
};

senha.onblur = function () {
  let id = 'erroSenha';
  let errorMessage = 'Insira uma senha com no mínimo 12 caracteres';

  //se a quantidade de caracteres do valor do campo de senha for menor que 12
  //mostra o erro
  if (senha.value.length < 12) {
    showError(senha, id, errorMessage);
    senhaValida = false;
    document.querySelector('button').disabled = true;
  } else {
    removeError(id);
    senhaValida = true;

    //se o campo de email e senha forem válidos, habilitada o botao de submit
    if (emailValido && senhaValida) {
      document.querySelector('button').disabled = false;
    }
  }
};

//cria o elemento de erro e exibe na tela
function showError(element, id, message) {
  let errorElem = document.getElementById(id);

  //se o elemento de erro ainda nao existir, cria
  //senao, nao faz nada porque o erro ja está sendo mostrado
  if (!errorElem) {
    let erro = document.createElement('div');
    erro.setAttribute('id', id);
    erro.innerText = message;
    erro.style.color = 'red';
    element.after(erro);
  }
}

//remove o erro da tela
function removeError(id) {
  let errorElem = document.getElementById(id);

  if (errorElem) {
    errorElem.remove();
  }
}

//função executada quando o form é enviado
document.querySelector('form').onsubmit = function () {
  alert('Funcionou!');
};
