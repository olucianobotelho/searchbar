const statuslogar = false
// VALIDAÇÃO

function recarregarPagina(){
    
    sessionStorage.setItem("recarregou","true")
    window.location.reload();
}


function recarregar(){
    if(recarregou){
        sessionStorage.removeItem("recarregou")
        recarregarPagina()
    }
}


function validar(){
    if(localStorage.getItem('token')!= null){
       
    var buttonlogin = document.getElementById("btn-logar")
    buttonlogin.classList.add("d-none")
    var buttonadm = document.getElementById("btn-showlogin")
    buttonadm.classList.add("d-none")
    var inputlogado = document.getElementById("loginform")
    inputlogado.classList.add("d-none")
    var buttonsair = document.getElementById("btn-sair")
    buttonsair.classList.remove("d-none")

    recarregar()
    statuslogin = document.getElementById("status")
    let usuariologado = localStorage.getItem('nome')
    statuslogin.innerHTML="<h3>Seja Bem vindo</h3>"+usuariologado
}else{
    
}
}
validar()

// VARIAVEL DE TESTE PARA BARRA DE PESQUISA
const usuarios =[
{nome:"Luciano",ramal:"1697"},
{nome:"Bruno Souza",ramal:"1628"},
{nome:"Luciano cravas",ramal:"1629"}]
let busca = document.getElementById("btn-search")


// QUANDO EU PESQUISO NA BARRA DE PESQUISA ESSA FUNÇÃO INICIA
busca.onkeyup = function(){  
    
    ponto = document.getElementById('ponto')
    function carde(card){
        ponto.innerHTML += card 
    }
    if(searchvalid!=true){
        cardnulo = ''
        function cardnull(card){
            ponto.innerHTML = card 
        }
        cardnull(cardnulo)
        console.log("FOi")
    }

for( i = 0; i < usuarios.length; i= i + 1 ){  
    // ZEREI OS VALORES DESSAS VARIAVEIS
    nomedabusca = ''
    ramaldabusca = ''  
    // COMPARO O TEXTO DIGITADO COM O ARRAY CONVERTENDO TUDO PRA MAIUSCULO 
    if( usuarios[i].nome.toUpperCase() == busca.value.toUpperCase() ){     
        // AQUI EU PEGO OS VALORES IDENTIFICADOS NA PESQUISA E JOGO NAS VARIAVES QUE EU CRIEI NA FUNÇÃO
        nomedabusca = usuarios[i].nome
        ramaldabusca = usuarios[i].ramal
        var searchvalid= true
        // ISSO AQUI É SÓ PRA TESTAR SE TA RODANDO BONITINHO NO CONSOLE
         
         console.log(usuarios[i].ramal) 
        
         
        // EU CRIO O CARD NO HTML/CSS E JOGO DENTRO DE UMA VARIAVEL PRA FICAR MAIS ORGANIZADO E PRÁTICO
        let card = `<div id="card-show"><div id="data-card" class="container container-card col d-inline d-flex justify-content-around">
        <div class="card box shadow p-3 mb-5 bg-body rounded" style="width: 18rem; height: 180px;">
        <div name="vouverdepois"></div>
        <div class="card-body">
        <h5 class="card-title">NOME: ${nomedabusca}  <p class="value-card"></p> </h5>
        <p class="PCARD card-text">Ramal: ${ramaldabusca}  <p class="value-card"></p> </p>
        </div></div></div></div>`
       
        
        
        
         //  AQUI EU CRIO A FUNÇÃO QUE GERA O CARD NO HTML
       
        
        // SE OS VALORES DIGITADOS CORRESPONDEREM AO ARRAY, 
        // ESSA FUNÇÃO TAMBÉM VAI SER EXECUTADA(ELA GERA O CARD)  
        carde(card)

    }else{
        
        
        
        
    }
       
    
}
}


const superusuarios =[
    {nome:"Luciano",senha:"1234",token:"",data:""},
    {nome:"Bruno",senha:"12345",token:"",data:""},
    {nome:"Wellington",senha:"123456",token:"",data:""}]



login = document.getElementById('login')
password = document.getElementById('password')


function mostrarlogin(){
    
    var showlogin = document.getElementById("btn-showlogin")
    showlogin.classList.add("d-none");
    
    
    var inputlogin = document.getElementById("loginform")
    inputlogin.classList.remove("d-none")
    var buttonlogin = document.getElementById("btn-logar")
    buttonlogin.classList.remove("d-none")
}

function logar(){


    for( i= 0; i < superusuarios.length; i = i+1 ){
        if(login.value.toUpperCase()==superusuarios[i].nome.toUpperCase() && password.value == superusuarios[i].senha){
            console.log("Logado com Sucesso!") 
            
            let usuariologado = login.value.toUpperCase()
            usuariologado = usuariologado[0].toUpperCase() + usuariologado.slice(1).toLowerCase()
            
            // GERO UM TOKEN VALIDADOR DE LOGIN E ARMAZENO NA SUA CONTA
            let token = Math.random().toString(10).substr(2)
            localStorage.setItem('token', token)
            localStorage.setItem('nome',usuariologado)
            superusuarios[i].token = token
            console.log(superusuarios[i].token)
            // GERO UM HORARIO DO MOMENTO DO LOGIN E ARMAZENO NA CONTA
            superusuarios[i].data = new Date
            // CONVERTO O HORARIO MUNDIAL PARA O PADRÃO BRASILEIRO INCLUINDO HORA E MINUTO, REGISTRANDO ASSIM O ULTIMO LOGIN DO USUÁRIO
            const option ={hour:'numeric',minute:'numeric'}
            console.log(superusuarios[i].data.toLocaleDateString('pt-br',option))
            

            function showme(){
                var buttonlogin = document.getElementById("btn-logar")
                buttonlogin.classList.add("d-none")
                var inputlogin = document.getElementById("loginform")
                inputlogin.classList.add("d-none")
                var inputsair = document.getElementById("btn-sair")
                inputsair.classList.remove("d-none")
            }
            
            setTimeout(showme(),1.0*50000)


            statuslogin = document.getElementById("status")

            statuslogin.innerHTML="<h3>Seja Bem vindo</h3>"+usuariologado
           return recarregar()
            
        }else{
            
        }

    }
    

}




function deslogar(){
    localStorage.removeItem('token')
    
    validar()
    var buttonlogin = document.getElementById("btn-logar")
    buttonlogin.classList.remove("d-none")
    var inputlogin = document.getElementById("loginform")
    inputlogin.classList.remove("d-none")
    var inputsair = document.getElementById("btn-sair")
    inputsair.classList.add("d-none")
    statuslogin.innerHTML=""
    recarregar()
}