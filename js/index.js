const iva_res = 0.21;
const iva_ind = 0.27;

const servicio_basico = 102;

let costo_zona = 0;
let iva = 0;
let costo_servicio = 0;
let kWh = 0;

function pickData() {
    let zona = document.getElementById("ubicacion").value;
    let kWh = document.getElementById("consumo").value;

    switch (zona) {
        case "centro":
            costo_zona = 5.80;
            break;
        case "sur":
            costo_zona = 5.40;
            break;
        case "oeste":
            costo_zona = 5.35;
            break;
        case "norte":
            costo_zona = 5.60;
            break;
        default:
            costo_zona = 'zona sin seleccion';
            break;
    }

    if (document.getElementById("res").checked) {
        iva = iva_res;
    }
    else if (document.getElementById("ind").checked) {
        iva = iva_ind;
    }
    else {
        iva = 0;
    }

    costo_servicio = servicio_basico + (1 + iva) * costo_zona * kWh;
    document.getElementById("resultado").innerHTML = "$ " + parseFloat(costo_servicio.toFixed(2));
}

function validarDatos() {
    let verIva, verZona, verkWh

    if (document.getElementById("consumo").value > 0) {
        verkWh = true;
    } else {
        verkWh = false;
    }
    if (document.getElementById("ubicacion").value != 0) {
        verZona = true;
    } else {
        verZona = false;
    }
    if ((document.getElementById("res").checked) || (document.getElementById("ind").checked) != ""){
        verIva = true;
    } else {
        verIva = false;
    }


    if (verIva && verZona && verkWh) {
        pickData();
    } else {
        alert("Debe completar todos los campos. El valor de consumo (kHw) debe ser mayor a 0.")
    }
}
