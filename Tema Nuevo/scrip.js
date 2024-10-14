function enviar(){
    localStorage.setItem("puntaje", 0)
    window.location.href = "otrpagina.html"
}
function volver(){
    window.location.href = "index.html"
}
puntos = localStorage.getItem("puntaje")
document.getElementById("puntos").innerHTML = puntos
function correcta(ubi){
    puntos++;
    localStorage.setItem("puntaje", puntos)
    window.location.href = ubi
}
puntos = localStorage.getItem("puntaje")
function incorrecta(ubi){
    puntos--;
    localStorage.setItem("puntaje", puntos)
    window.location.href = ubi
}
