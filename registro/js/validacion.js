function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos").checked;

    if (nombre && apellido && email && password1 && password2 && terminos && password1 !== "" && password1 === password2 && password1.length >= 6 && password2.length>= 6) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
    })



