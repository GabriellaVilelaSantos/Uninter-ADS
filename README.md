# Uninter-ADS<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body class="pagina">
    <h1 class="titulo">Gabriella Vilela Santos da Silva</h1>
    <p class="paragrafo">Olá sou a Gabriella, mas pode me chamar de Gabi tenho 21 anos, natural do Rio de Janeiro. atualmente sou estudante da 
      área de <b>Análise e Desenvolvimento de Sistema. </b> Meus interesses sempre foram na área da tecnologia com: jogos, aplicativo(App), redes sociais.</p>
   
      <ul class="lista" >
        <li>Desenhar</li>
              <img src="imagem/Desenho.jpg" height="120">
        

        <li>Culinaria</li>
              <img src="imagem/palha-italiana.jpeg" height="90"> 
        

        <li>jogos</li>
             <img src="imagem/jogos.jpg" width="130">
    </ul>


   <table class="tabela">
    <tr class="país">

        <th>Japão</th>
        <th>Canadá</th>
        <th>Peru</th>
    </tr>
    <td > 
        <a href="japão">
            <img src="imagem/japão.jpg" height="100"  style="border-radius: 20px;"> 
         </a>
     </td>
   
     <td>
        <a href="Canadá">
            <img src="imagem/Canadá.jpg" height="100" width="170" style="border-radius: 20px;">
        </a>
     </td>
        
     <td>
        <a href="Peru">
            <img src="imagem/Peru.jpg" height="100" width="170" style="border-radius: 20px;">
        </a>
    </td>
   </table>
   
   <a class="Instagram" href="https://www.instagram.com/gabriella__vilela/">Instagram</a>
      
   <button id="botao">Clique para ver uma mensagem!</button>
   <script src="script.js"></script>
</body>
</html>
.pagina{
    background-color: #c5fdcc ;
}

.titulo{
    background-color:#8ab186;
    border-radius: 20px;
    font-size: 35px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 570px;

}
.paragrafo{
    font-size: 120%;
    width: 90%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: oblique;
    text-align: center;
    height: 90px;
    
}
.país{
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 20%;
}
.lista{
    text-align:left;
    white-space: 20px;
    list-style: inherit;
    white-space-collapse: 30%;
}
.tabela{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
}
.Instagram{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
}

