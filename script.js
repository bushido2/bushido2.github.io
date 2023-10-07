Window.onload = iniciar()

function iniciar() {
  var btnCalcular = document.getElementById("btnCalcular");
  btnCalcular.addEventListener("click", clickbtncalcular);
}

function clickbtncalcular() {
    var txtpeso = document.getElementById("txtpeso");
    var peso = txtpeso.value;

    var txtaltura = document.getElementById("txtaltura");
    var altura = txtaltura.value;

    var imc = peso / (altura * altura)
    alert("Su indice de masa corporal es: " + Math.round(imc));
}
