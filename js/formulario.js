document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const botonEnviar = document.getElementById('botonEnviar');
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    formulario.addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); 
            return;
        }
        event.preventDefault(); 
        setTimeout(function() {
            formulario.reset(); 
            modal.show();          
        }, 1000); 
    });
});

const motivo = document.getElementById("motivo");

function motivoCorreo() {
    const consulta = motivo.value;
    let agrega = '';

    switch (consulta) {
        case "consulta":
            document.getElementById("clas").innerHTML = '';
            agrega = '<label for="textoComentario">Agregar Comentario:</label>';
            agrega += '<textarea id="textoComentario" name="textoComentario" pattern="[A-Za-z0-9\s]{2,200}" class="form-control" required title="No puede estar vacío"></textarea>';
            document.getElementById("consulta").innerHTML = agrega;
            break;

        case "clase":
            document.getElementById("consulta").innerHTML = '';
            agrega = '<label for="estilo">Estilo de baile</label>';
            agrega += '<select id="estilo" class="form-select" onchange="elegirHorario()" required>';
            agrega += '<option selected>Seleccionar</option>';
            agrega += '<option value="reggaeton">Reggaeton</option>';
            agrega += '<option value="afroBeats">Afrobeats</option>';
            agrega += '<option value="streetDance">Street Dance</option>';
            agrega += '<option value="breakDance">Break Dance</option>';
            agrega += '<option value="baileModerno">Baile Moderno</option>';
            agrega += '<option value="hipHop">Hip Hop</option>';
            agrega += '</select>';
            document.getElementById("clas").innerHTML = agrega;
            break;

        default:
            document.getElementById("consulta").innerHTML = '';
            document.getElementById("clas").innerHTML = '';
            document.getElementById("horarios").innerHTML = '';
            break;
    }
}

motivo.addEventListener("change", motivoCorreo);

function elegirHorario() {
    const estilo = document.getElementById("estilo").value;
    let agrega = '';

    switch (estilo) {
        case "reggaeton":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioReggaeton1" name="horariosReggaeton" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioReggaeton1">Juvenil-Adulto | Lunes | 14:00Hs a 16:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioReggaeton2" name="horariosReggaeton" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioReggaeton2">Niños | Miercoles | 18:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioReggaeton3" name="horariosReggaeton" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioReggaeton3">Juvenil-Adulto | Jueves | 20:00Hs a 22:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioReggaeton4" name="horariosReggaeton" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioReggaeton4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioReggaeton5" name="horariosReggaeton" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioReggaeton5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        case "afroBeats":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioafroBeats1" name="horariosafroBeats" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioafroBeats1">Juvenil-Adulto | Lunes | 16:00Hs a 18:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioafroBeats2" name="horariosafroBeats" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioafroBeats2">Niños | Miercoles | 14:00Hs a 16:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioafroBeats3" name="horariosafroBeats" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioafroBeats3">Juvenil-Adulto | Jueves | 14:00Hs a 16:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioafroBeats4" name="horariosafroBeats" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioafroBeats4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioafroBeats5" name="horariosafroBeats" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioafroBeats5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        case "streetDance":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariostreetDance1" name="horariosstreetDance" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariostreetDance1">Juvenil-Adulto | Lunes | 18:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariostreetDance2" name="horariosstreetDance" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariostreetDance2">Niños | Miercoles | 20:00Hs a 22:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariostreetDance3" name="horariosstreetDance" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariostreetDance3">Juvenil-Adulto | Jueves | 16:00Hs a 18:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariostreetDance4" name="horariosstreetDance" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariostreetDance4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariostreetDance5" name="horariosstreetDance" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariostreetDance5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        case "breakDance":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariobreakDance1" name="horariosbreakDance" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariobreakDance1">Juvenil-Adulto | Lunes | 14:00Hs a 16:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariobreakDance2" name="horariosbreakDance" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariobreakDance2">Niños | Miercoles | 18:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariobreakDance3" name="horariosbreakDance" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariobreakDance3">Juvenil-Adulto | Jueves | 16:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariobreakDance4" name="horariosbreakDance" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariobreakDance4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariobreakDance5" name="horariosbreakDance" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariobreakDance5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        case "baileModerno":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioModerno1" name="horariosModerno" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioModerno1">Juvenil-Adulto | Lunes | 16:00Hs a 18:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioModerno2" name="horariosModerno" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioModerno2">Niños | Miercoles | 14:00Hs a 16:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioModerno3" name="horariosModerno" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioModerno3">Juvenil-Adulto | Jueves | 18:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioModerno4" name="horariosModerno" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioModerno4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horarioModerno5" name="horariosModerno" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horarioModerno5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        case "hipHop":
            agrega += '<label>Horarios:</label><br>';
            agrega += '<div class="row">';
            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariohipHop1" name="horarioshipHop" value="lunes10Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariohipHop1">Juvenil-Adulto | Lunes | 18:00Hs a 20:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariohipHop2" name="horarioshipHop" value="miercoles15Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariohipHop2">Niños | Miercoles | 16:00Hs a 18:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariohipHop3" name="horarioshipHop" value="viernes18Presencial" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariohipHop">Juvenil-Adulto | Jueves | 20:00Hs a 22:00Hs (Presencial)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';

            agrega += '<div class="col-12 col-lg-6">';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariohipHop" name="horarioshipHop" value="lunes10Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariohipHop4">Juvenil-Adulto | Martes | 10:00Hs a 12:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '<div class="row">';
            agrega += '<div class="col-1">';
            agrega += '<input type="radio" id="horariohipHop5" name="horarioshipHop" value="martes15Virtual" required>';
            agrega += '</div>';
            agrega += '<div class="col-11">';
            agrega += '<label for="horariohipHop5">Niños | Viernes | 12:00Hs a 14:00Hs (Virtual)</label><br>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            agrega += '</div>';
            break;

        default:
            agrega = '';
            break;
    }
    document.getElementById("horarios").innerHTML = agrega;
}

function validarFormulario() {
    const motivoValue = motivo.value;
    if (motivoValue === "Seleccionar") {
        alert("Por favor, selecciona un motivo de contacto.");
        return false;
    }

    const estilo = document.getElementById("estilo");
    if (motivoValue === "clase" && (!estilo || estilo.value === "Seleccionar")) {
        alert("Por favor, selecciona un estilo de baile.");
        return false;
    }

    return true;
}

motivo.addEventListener("change", motivoCorreo);
