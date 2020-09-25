// Exemplo de getElementById
//console.log(document.getElementById('saudacao'));

/* Exemplo de querySelector
let texto = document.querySelector('p');
texto.style.color = 'blue';
*/

/* Exemplo de setAttribute/removeAttribute
document.querySelector('#nome').setAttribute('type', 'text');
document.querySelector('#nome').removeAttribute('name');
*/

/* Exemplo de como "pegar" o valor de um input
document.querySelector('#nome').value; */

/* E quando o valor do input é um número?
document.querySelector('#nome').valueAsNumber; */

/* Exemplo de como alterar o texto de um elemento
document.getElementById('saudacao').innerText = 'Mudei o texto!'; */

/* Exemplo pra adicionar/remover uma classe
//document.getElementById('saudacao').className = 'green';
document.getElementById('saudacao').classList.add('green');
document.getElementById('saudacao').classList.remove('red'); */

/* Exemplo adicionar/remover um elemento
let div = document.createElement('div');
div.innerText = 'Div criada!';
document.body.append(div); 

document.getElementById('saudacao').remove();
*/

/* Exemplo de click
function mostrarMensagem() {
  alert('Oi gurias!');
} */
