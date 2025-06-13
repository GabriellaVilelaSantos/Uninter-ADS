let botao = document.querySelector("#botao");
botao.style.background="#90EE90";
let BemVindoa=false;
botao.addEventListener("mouseover",e =>{
    if(!BemVindoa)
      botao.style.background="#FFDAB9";
      botao.style.color="white";
});
botao.addEventListener("mouseout",e =>{
    if(!Bem-Vindo(a)){
        botao.style.background="#90EE90";
    }
});
botao.addEventListener("click",e =>{
    botao.style.background="#FFDAB9";
    botao.innerHTML="Bem-Vindo(a)";
});
