function validacion() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value 
    let inputbonito = document.querySelectorAll('.inputbonito')
    let emailST = document.getElementById('email')
    let passwordlST = document.getElementById('password')
    let loadert = document.getElementById('loader')
    if (email == '1234' && password == '1234') {
        emailST.style.color = 'black'
        passwordlST.style.color = 'black'
        inputbonito.forEach(function(input) {
            input.style.border = 'none'
            input.style.borderRadius = '0px'
        })
        loadert.style.display = 'block'
        document.getElementById('bonito').style.display = 'block'
        document.getElementById('bonito2').style.display = 'block'
    } else {
        emailST.style.color = 'red'
        passwordlST.style.color = 'red'
        inputbonito.forEach(function(input) {
            input.style.border = '3px solid red'
            input.style.borderRadius = '5px'
        })
    }
}

function mostrar() {
    let type = document.getElementById('password').type
    if (type == 'password') {
        document.getElementById('password').type = 'text';
        document.getElementById('mostrar').innerText = 'Ocultar Contraseña'
    } else {
        document.getElementById('password').type = 'password';
        document.getElementById('mostrar').innerText = 'Mostrar Contraseña'
    }
}