


searchbar = document.getElementById('btn-search')


$.getJSON("./data.json", function(data){
//    let  alunos = data.alunos
    

    const sorted = data.usuarios.sort((a,b)=>{
        return a.nome.localeCompare(b.nome)
    })

    myArray= sorted

   
    console.log(myArray)
    

    searchbar.addEventListener('keyup', (key)=>{
        
        const searchtext = key.target.value.toLowerCase()
        
     AlunosFiltrados = myArray.filter((alunos)=>{
            return(
                alunos.nome.toLowerCase().includes(searchtext)||
                alunos.sobrenome.toLowerCase().includes(searchtext)||alunos.setor.toLowerCase().includes(searchtext)
            )
           
        })

      

        result = document.getElementById('result-div')
        result.innerHTML=`<div id="card-tela" class="d-flex justify-content-around flex-wrap">
        </div>`
        
        cards = document.getElementById('card-tela')



        
        cards.innerHTML = null
        
       
        
        if(AlunosFiltrados!=null){
            

            AlunosFiltrados.map((elemento)=>{

               
                nomeshow = elemento.nome; 
                sobrenomeshow= elemento.sobrenome;
                ramalshow = elemento.ramal; 
                setorshow = elemento.setor;
                emailshow = elemento.email; 
                cards.innerHTML += 
                `<div class="box-card">
                <div class="header-card">
                    
                    <p id="colaborador">${nomeshow} ${sobrenomeshow}</p>
                    <p id="setor">${setorshow}</p> 

                    <p id="ramal">${ramalshow}</p>
                    <p id="email">${emailshow}</p>
                    <div class="info">
                        <span class=" d-none material-symbols-outlined">
                        info
                        </span>
                    </div>
                </div>

            </div>
           
            `  
            }) 
        }
        
        if(searchtext.length==""){
           console.log("ta vazio")
           lista = document.getElementById('lista')
           cardshow= document.getElementById('data-card')
           cardshow.parentNode.remove(cardshow)
           location.reload()
           
        }

       
        btn = document.querySelector('#id-email')
        addEventListener('click', function(e) {
        let textArea = emailshow
        
        document.execCommand('copy')
         
        });

        
    })

    

   
})




    

function closeModal(){ 
    $(".informativo").hide()
}


const fav = document.getElementsByClassName('favorito')
const chama = document.getElementsByClassName('chamado')

function showFav(){
    fav.style.display = 'block'
}
function showChama(){
    chama.style.display = 'block'
}