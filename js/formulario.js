
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const botonEnviar = document.getElementById('botonEnviar');
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 
        setTimeout(function() {
            formulario.reset(); 
            modal.show();          
        }, 1000); 
    });
});

const motivo = document.getElementById("motivo");
function motivoCorreo(){
    const consulta = document.getElementById("motivo").value;
    let agrega = '';
switch(consulta){
    case "consulta":
        document.getElementById("clas").innerHTML = '';
        agrega = '<label for="textoComentario">Agregar Comentario:</label>';
        agrega += '<textarea id="textoComentario" name="textoComentario" pattern="[A-Za-z]{2,200}" class="form-control" required title="No puede estar vacío"></textarea>';
        document.getElementById("consulta").innerHTML = agrega;
        break;

    case "clase":
        document.getElementById("consulta").innerHTML = '';
        agrega = '<label for="estilo">Estilo de baile</label>';
        agrega += '<select id="motivo" class="form-select" required>';
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
}
}
motivo.addEventListener("change", motivoCorreo);


