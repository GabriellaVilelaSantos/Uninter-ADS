let botao = document.querySelector("#botao");
botao.style.background="#90EE90";
let BemVindoa=false;
botao.addEventListener("mouseover",e =>{
    if(!Bem-Vindo(a)){
         botao.style.background="#800000";
         botao.style.background="#F8F8FF";
    }
});      
botao.addEventListener("mouseout",e =>{
    if(!Bem-Vindo(a)){
        botao.style.background="#90EE90";
    }
});
botao.addEventListener("click",e =>{
    botao.style.background="#800000";
    botao.innerHTML="Bem-Vindo(a)";
    BemVindoa=true;
});

