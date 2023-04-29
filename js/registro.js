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

function updateBar() {
    let numValidInputs = 0;
    requiredInputs.forEach(input => {
        if (input.validity.valid) {
            numValidInputs++;
        }
    });
    progressBar.setAttribute("value", numValidInputs);
}

requiredInputs.forEach(input => {
    input.addEventListener("input", () => {
        check(input);
        updateBar();
    });
    input.addEventListener("blur", () => {
        /* se activa al deseleccionar algo, funciona cuando se usa TAB en el teclado */
        /* Se añade porque la funcion anterior que registra los ingresos de teclado "input" no se activa al usar TAB */
        check(input);
        updateBar();
    })
});

buttonReset.addEventListener("click", () => {
    progressBar.setAttribute("value", 0);
})

function check(input) {
    if (!input.validity.valid) {
        input.style.backgroundColor = "#ffb6c1";
    } else {
        input.style.backgroundColor = "#ffffff";
    }
}

tipoUser.addEventListener("change", () => {
    updateBar();
});

function validate() {
    const regExText = /^[A-Za-zÁÉÍÓÚáéíóú'\s]*$/;
    const regExNumber = /^[0-9]{0,3}$/;
    const regExUser = /^[A-Za-z1-9]{5,25}$/;
    const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regExTipoUser = /Avanzado|Medio|Novato/;
    let camposConErrores = "";
    if (!apellido.value.match(regExText)) {
        camposConErrores += "Apellido\n";
    }
    if (!nombres.value.match(regExText)) {
        camposConErrores += "Nombres\n";
    }
    /* if (!edad.value.match(regExNumber)) {
        noRequeridosConErrores += "Edad\n";
    } */
    if (edad.value != "" && (edad.value < 18 || edad.value > 120)
        || !edad.value.match(regExNumber)) {
            camposConErrores += "Edad\n";
    }
    if (!user.value.match(regExUser)) {
        camposConErrores += "Usuario\n";
    }
    if (!email.value.match(regExMail)) {
        camposConErrores += "Email\n";
    }
    if (!tipoUser.options[tipoUser.selectedIndex].text.match(regExTipoUser)) {
        camposConErrores += "Tipo Usuario\n";
    }
    if (camposConErrores.trim() != "") {
        alert("Los siguiente campos contienen errores:\n" + camposConErrores);
    }
    let requiredIsValid = (user.validity.valid && email.validity.valid && tipoUser.validity.valid);
    let noRequiredIsValid = (apellido.validity.valid && nombres.validity.valid && edad.validity.valid);
    if (requiredIsValid) {
        if (noRequiredIsValid) {
            formulario.submit();
        } else {
            if (confirm("Algunos datos no son necesarios y no son validos, desea borrarlos y enviar solo lo requerido?")) {
                if (!apellido.validity.valid) {
                    apellido.value = "";
                    apellido.style.backgroundColor = "#ffffff";
                }
                if (!nombres.validity.valid) {
                    nombres.value = "";
                    nombres.style.backgroundColor = "#ffffff";
                }
                if (!edad.validity.valid) {
                    edad.value = "";
                    edad.style.backgroundColor = "#ffffff";
                }
                formulario.submit();
            } else {
                alert("No se envio el formulario, por favor corrija sus datos e intentelo de nuevo");
            }
        }
    } else {
        alert("Algunos datos requeridos no son validos, por favor corrijalos e intente de nuevo");
    }
}