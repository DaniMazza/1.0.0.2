const anoAtual =  new Date().getFullYear();;
let anoNascimento = 2008;
const idade = anoAtual - anoNascimento;
let nomeUsuario = 'Haru';
let tamplate = null;
if(idade >= 18){
    tamplate =  `Usuário ${nomeUsuario} autorizado para fazer a compra`;
} else {   
    tamplate =  `Usuário ${nomeUsuario} não autorizado para fazer a compra`;

}
console.log(tamplate);
