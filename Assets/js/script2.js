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
// const usuarios =[
// {nome:"Luciano",ramal:"1697"},
// {nome:"Bruno Souza",ramal:"1628"},
// {nome:"Luciano cravas",ramal:"1629"}]



// QUANDO EU PESQUISO NA BARRA DE PESQUISA ESSA FUNÇÃO INICIA

let busca = document.getElementById("btn-search")
    
   

// const superusuarios =[
//     {nome:"Luciano",senha:"1234",token:"",data:""},
//     {nome:"Bruno",senha:"12345",token:"",data:""},
//     {nome:"Wellington",senha:"123456",token:"",data:""}]



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
setTimeout(mostrarlogin,1100)
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
                statuslogin = document.getElementById("status")

            statuslogin.innerHTML="<h3>Seja Bem vindo</h3>"+usuariologado
            }
            
            
            

            
            setTimeout(showme,1700)
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
    setInterval(2000)
    recarregar()
}






