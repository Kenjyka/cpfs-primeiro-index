var usuarioC = document.querySelector("#usuario-c")
var senhaC = document.querySelector("#senha-c")
var usuario, senha
var submitC = document.querySelector("#submit-c")
var submitL = document.querySelector("#submit-l")
var usuarioL = document.querySelector("#usuario-l")
var senhaL = document.querySelector("#senha-l")
const loginDiv = document.querySelector("#login")
const cadastroDiv = document.querySelector("#cadastro")


submitC.addEventListener("click", e => {
    e.preventDefault()
    usuario = usuarioC.value
    senha = senhaC.value
    if (usuario.length > 0 && senha.length > 0) {
        someAparece()

    } else {
        alert("digite uma senha válida")
        
    }
})

submitL.addEventListener("click", e => {
    e.preventDefault()

    if(senhaL.value == senha && usuarioL.value == usuario) {
        alert("logado")
        window.location.href = "index.html"
    }
})

function someAparece () {
    loginDiv.classList.toggle("none")
    cadastroDiv.classList.toggle("none")
}