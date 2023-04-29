const progressBar = document.getElementById("pbar-progreso");
const formulario = document.getElementById("frm-userInfo");
const apellido = document.getElementById("inpt-apellido");
const nombres = document.getElementById("inpt-nombres");
const edad = document.getElementById("inpt-edad");
const user = document.getElementById("inpt-user");
const email = document.getElementById("inpt-email");
const tipoUser = document.getElementById("slct-tipoUser");
const requiredInputs = document.querySelectorAll("[required]");
const buttonReset = document.getElementById("btn-Reset");

const espacioContador = document.getElementById("div-emptySpace");
let contador = 0;

requiredInputs.forEach(element => {
    element.addEventListener("input", function () {
        let camposValidos = 0;  // variable auxiliar o de apoyo.
        if (element.validity.valid) {
            element.style.backgroundColor = "#63f555";
        } else {
            element.style.backgroundColor = "#ffffff";
        }
        requiredInputs.forEach(input => {
            if (input.validity.valid) {
                camposValidos += 1;
            }
        })
        progressBar.setAttribute("value", camposValidos.toString());
    })
});

buttonReset.addEventListener("click", function () {
    contador += 1;
    espacioContador.textContent = contador;
})