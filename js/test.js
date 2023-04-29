const form = parent.document.getElementById("frm-userInfo");
let name = form.elements[]

function myFunc() {
    const nombre = document.getElementById("inpt-name");
    const edad = document.getElementById("inpt-edad");
    const domicilio = document.getElementById("inpt-domicilio");

    if (nombre.validity.valid && edad.validity.valid && domicilio.validity.valid) {

        let puntaje1 = 0;
        let puntaje2 = 0;
        let puntaje3 = 0;
        let puntaje4 = 0;
        let puntaje5 = 0;
        let rol;

        let rta1_1 = document.getElementById("chkbox-cafeote");
        let rta1_2 = document.getElementById("chkbox-leche");
        let rta1_3 = document.getElementById("chkbox-tostadas");
        let rta1_4 = document.getElementById("chkbox-limon");
        let rta1_5 = document.getElementById("chkbox-manteca");
        let rta1_6 = document.getElementById("chkbox-mediaslunas");
        let rta1_7 = document.getElementById("chkbox-papas");

        if (rta1_2.checked) {
            puntaje1 += 2;
        }
        if (rta1_3.checked) {
            puntaje1 += 2;
        }
        if (rta1_5.checked) {
            puntaje1 += 1;
        }
        if (rta1_6.checked) {
            puntaje1 += 2;
        }
        if (rta1_1.checked) {
            puntaje1 -= 1 / 7;
        }
        if (rta1_4.checked) {
            puntaje1 -= 1 / 7;
        }
        if (rta1_7.checked) {
            puntaje1 -= 1 / 7;
        }
        if (puntaje1 < 0) {
            puntaje1 = 0;
        }

        let rta2 = document.getElementById("rad-confitar-2");

        if (rta2.checked) {
            puntaje2 += 10;
        }

        let rta3 = document.getElementById("rad-bardar-1");

        if (rta3.checked) {
            puntaje3 += 10;
        }

        let rta4_1 = document.getElementById("chkbox-freidora");
        let rta4_2 = document.getElementById("chkbox-grasera");
        let rta4_3 = document.getElementById("chkbox-parisina");

        if (rta4_3.checked) {
            puntaje4 += 9;
        }
        if (rta4_1.checked) {
            puntaje4 -= 1 / 3;
        }
        if (rta4_2.checked) {
            puntaje4 -= 1 / 3;
        }
        if (puntaje4 < 0) {
            puntaje4 = 0;
        }

        let rta5 = document.getElementById("rad-temp-3");
        if (rta5.checked) {
            puntaje5 += 10;
        }
        puntaje1 = puntaje1 * 0.35;
        puntaje2 = puntaje2 * 0.1;
        puntaje3 = puntaje3 * 0.08;
        puntaje4 = puntaje4 * 0.22;
        puntaje5 = puntaje5 * 0.25;

        let puntajeTotal = puntaje1 + puntaje2 + puntaje3 + puntaje4 + puntaje5;

        if (puntajeTotal >= 8.0) {
            rol = "Concinero";
        } else if (puntajeTotal < 8.0 && puntajeTotal >= 6.0) {
            rol = "Ayudante de cocina";
        } else {
            rol = "Ninguno, test no aprobado";
        }

        let rtaShow1 = document.getElementById("spn-rta1");
        let rtaShow2 = document.getElementById("spn-rta2");
        let rtaShow3 = document.getElementById("spn-rta3");
        let rtaShow4 = document.getElementById("spn-rta4");
        let rtaShow5 = document.getElementById("spn-rta5");
        let puntajeTotalShow = document.getElementById("spn-total");
        let rolShow = document.getElementById("spn-rol");

        rtaShow1.textContent = puntaje1 + "Puntos";
        rtaShow2.textContent = puntaje2 + "Puntos";
        rtaShow3.textContent = puntaje3 + "Puntos";
        rtaShow4.textContent = puntaje4 + "Puntos";
        rtaShow5.textContent = puntaje5 + "Puntos";
        puntajeTotalShow.textContent = puntajeTotal + "Puntos";
        rolShow.textContent = "ROL: " + rol;

    } else {
        alert("Debe llenar el formulario con sus datos personales");
    }
}