// Iván Aurelio Márquez Morales
//
// Completar JS aqui

var modal = document.getElementById("ventanaModal");

var boton = document.getElementById("abrirModal");

var close = document.getElementsByClassName("cerrar")[0];



boton.addEventListener("click", function () {
    modal.style.display = "block";
});

close.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

document.getElementById("datos").addEventListener('submit', validar);

function validar() {
    alert("Datos mandados correctamente");
}