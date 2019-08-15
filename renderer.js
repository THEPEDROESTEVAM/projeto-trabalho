const div = document.getElementById("dados")

div.innerHTML = deputados()

async function deputados(){  

  const response = await fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados/`
  )
  
  const deps = await response.json()
      console.log(deps)

  deps.dados.forEach(function(dep) {
    
    div.innerHTML = `
    <div class="container"> 
      <div  style="display: flex; flex-direction: row;">
        <img class="card-img-top" style="width: 100px; heigh: 100px" src="${dep.urlFoto}" alt="Card image cap">
        <div style="display: flex; flex-direction: column;">
          <h3>Deputado: ${dep.nome}</h3>
          <h3>Partido: ${dep.siglaPartido},   UF: ${dep.siglaUf} </h3>          
          <h3>Email: ${dep.email}</h3>
        </div>
      </div>      
    </div>
    `
    }      
  )  
}

