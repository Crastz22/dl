function cambiarColor() {
    var parrafo = document.getElementById("color");

    parrafo.style.color = "orange";
}

function crearTexto() {
    var texto = document.getElementById("n_text");

    var n_text = " Hola Mundo() ";

    texto.innerHTML = n_text;
}

function addTexto() {
    var nombreInput = document.getElementById("nombreInput");
    var agregar = " Mundo() ";
    nombreInput.value += agregar;
}

/*-----------*/
function removerOpcionDesplegable() {
    var desplegable = document.getElementById("dropdown-list");
    desplegable.remove(desplegable.selectedIndex);
}

function abrirVideoYoutube() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function mostrarAlertaNombre() {
    var nombreInput = document.getElementById("nombreInput").value
    alert("Hola, " + nombreInput);
}

function imprimirConsola() {
    let nombre = document.getElementById("nombreInput").value
    console.log(nombre)
}

function imprimirEstado() {
    let rev = document.getElementById("Checkbox")
    let estado = document.getElementById("estado")
    estado.textContent = "Estado: ";
    if (rev.checked) {
        const mensaje = document.createTextNode(" marcado")
        estado.appendChild(mensaje)
    } else {
        const mensaje = document.createTextNode(" No marcado")
        estado.appendChild(mensaje)
    }
}

function imprimirRadio() {
    let radios = document.getElementsByName("fruta");
    let estado = document.getElementById("estado2");

    estado.textContent = "Estado: ";

    radios.forEach((radio) => {
        if (radio.checked) {
            const mensaje = document.createTextNode(radio.value);
            estado.appendChild(mensaje);
        }
    })
}

function validarTexto() {
    let val = document.getElementById("textoOwO").value
    const verif = /[0-9]/.test(val)
    if (verif) {
        alert("Su texto contiene numeros")
    } else {
        alert(" No hay numeros en su texto")
    }
}

/*----------- API--------------*/
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var tabla = document.getElementById('datosPokemon');

        data.results.forEach(function(pokemon, index) {
            fetch(pokemon.url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(pokemonData) {
                    var fila = tabla.insertRow();
                    var celdaNumero = fila.insertCell(0); 
                    var celdaNombre = fila.insertCell(1);
                    var celdaTipos = fila.insertCell(2); 

                    // Llenar las celdas con datos del Pokémon
                    celdaNumero.textContent = pokemonData.id;
                    celdaNombre.textContent = pokemonData.name;
                    celdaTipos.textContent = pokemonData.types.map(function(type) {
                        return type.type.name;
                    })
                })
        });
    })
