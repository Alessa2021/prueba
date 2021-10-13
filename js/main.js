/* variables globales */
let refPersonales = [
    {nombre: "Alejandra Casado", dia:6, mes: 12, anio: 1969},
    {nombre: "Laura Ronchieri", dia:28, mes: 11, anio: 1998},
    {nombre: "Ananda Ronchieri", dia:24, mes: 10, anio: 2000},
    {nombre: "Olga Wozniak", dia:13, mes: 6, anio: 1942},

]
let crearLista = true
let ul

/* funciones globales */

function borrarRef(index){
 console.log("borrarRef", index)
 
 refPersonales.splice(index,1)
 renderRefPerson()
}

function cambiarDia(index, el){
    let dia = parseInt(el.value)
    refPersonales[index].dia = dia
    console.log('cambiar Dia', index, dia)

}
function cambiarMes(index, el){
    let mes = parseInt(el.value)
    refPersonales[index].mes = mes
    console.log('cambiar Mes', index, mes)
}
function cambiarAnio(index, el){
    let anio = parseInt(el.value)
    refPersonales[index].anio = anio
    console.log('cambiar Anio', index, anio)
}

function renderRefPerson(){
    if(crearLista){
    ul = document.createElement('ul')
    ul.classList.add('demo-list-icon','mdl-list', 'w-100')
    
}
    ul.innerHTML = ''
    refPersonales.forEach((item,index) => {
        ul.innerHTML +=
        ` <li class="mdl-list__item">
              
              <!-- nombre de referencia a agendar -->
              <span class="mdl-list__item-primary-content w-40">
                ${item.nombre}
              </span>
              <!-- dia de referencia a agendar -->
              <span class="mdl-list__item-primary-content w-dia">
                <!-- Textfield with Floating Label -->

                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <input onchange="cambiarDia(${index},this)" value="${item.dia}" class="mdl-textfield__input" type="text" id="dia-${index}" />
                  <label class="mdl-textfield__label" for="dia-${index}">
                    Día (1-31)
                  </label>
                </div>
              </span>
              <!-- mes de referencia a agendar -->
              <span class="mdl-list__item-primary-content w-dia p-item">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <input onchange="cambiarMes(${index},this)" value="${item.mes}" class="mdl-textfield__input" type="text" id="mes-${index}" />
                  <label class="mdl-textfield__label" for="mes-${index}">
                    Mes (1-12)
                  </label>
                </div>
              </span>
              <!-- año de referencia a agendar -->
              <span class="mdl-list__item-primary-content w-anio p-item">
                <div
                  class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
                >
                  <input onchange="cambiarAnio(${index},this)" value="${item.anio}" class="mdl-textfield__input" type="text" id="anio-${index}" />
                  <label class="mdl-textfield__label" for="anio-${index}">
                    Año (1-3500)
                  </label>
                </div>
              </span>
              <!-- borrar la referencia  -->
              <span class="mdl-list__item-colored-content w-5" >
                <!-- Colored FAB button with ripple -->
                <button onclick="borrarRef(${index})" class="mdl-button mdl-button--colored"><i class="material-icons btn-red mar-r">cancel</i></button>
               
                  
                </button>
              </span>
            </li>`
    }
    )

    if(crearLista){
        document.getElementById("refPerson").appendChild(ul)
    }else{
        componentHandler.upgradeElements(ul)
    }
    
          
          crearLista= false
}
function configurarListeners(){
    document.getElementById('btn-entrada-nombre').addEventListener('click',() => {
        console.log('btn-entrada-nombre')

        let input = document.getElementById('ingreso-nombre')
        let nombre = input.value
        console.log(nombre)
        if(nombre){
            refPersonales.push({nombre: nombre , dia: 1 , mes: 1, anio: 1})
            renderRefPerson()
            input.value = null
        }
    })
    /* Borrado total de referencias */
    document.getElementById('btn-borrar-nombres').addEventListener('click',() => {
        console.log('btn-borrar-nombres')
        if(confirm('¿Desea borrar todas las referencias?')){
            refPersonales = []
            renderRefPerson()
        }
    })


}

function registrarServiceWorker(){
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      this.navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('el sw se registró correctamente', reg)
      })
      .catch(err => {
        console.error('error al registrar al sw', err)
      })
    })

  }else{
    console.error('serviceWorker no está disponible en Navigator')
  }
}


function start(){ 
  console.log("Con Ciencia Solar")
registrarServiceWorker()
configurarListeners()
renderRefPerson()

}


/* Ejecución */
start()

