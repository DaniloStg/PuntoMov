document.addEventListener('DOMContentLoaded', function() {
    fetch('Json/eventos.json')
        .then(response => response.json())
        .then(data => {
            mostrarEventos(data.eventos);

            document.getElementById('selectEstiloBaile').addEventListener('change', aplicarFiltros);
            document.getElementById('selectEdad').addEventListener('change', aplicarFiltros);
            document.getElementById('inputFecha').addEventListener('input', aplicarFiltros);
            document.getElementById('clearFecha').addEventListener('click', () => {
              document.getElementById('inputFecha').value = '';
              aplicarFiltros();
          });
        })
        .catch(error => {
            console.error('Error al cargar eventos:', error);
        });

    const eventosContainer = document.getElementById('eventos-container');

    function mostrarEventos(eventos) {
        const eventosHTML = eventos.map(evento => {
            return `
                <div class="col-md-4 mb-4 mt-2">
                    <div class="card bg-transparent border-0">
                        <img src="${evento.imagen}" class="card-img-top fixed-size-img border" alt="Imagen del evento">
                        <div class="card-body bg-transparent text-white">
                            <h5 class="card-title text-center"><strong>${evento.nombre}</strong></h5>
                            <p class="card-text text-center">${evento.descripcion}</p>
                            <p class="card-text text-center">${evento.estilo_de_baile}</p>
                            <p class="card-text text-center"><small><i class="bi bi-calendar"></i> ${evento.fecha}, ${evento.hora}</small></p>
                            <p class="card-text text-center"><small><i class="bi bi-geo-alt"></i> ${evento.direccion}</small></p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        eventosContainer.innerHTML = eventosHTML;
    }

    function aplicarFiltros() {
      fetch('Json/eventos.json')
          .then(response => response.json())
          .then(data => {
              const estiloSeleccionado = document.getElementById('selectEstiloBaile').value;
              const edadSeleccionada = document.getElementById('selectEdad').value;
              const fechaSeleccionada = document.getElementById('inputFecha').value;
  
              const eventosFiltrados = data.eventos.filter(evento => {
                  const cumpleEstilo = estiloSeleccionado === 'todos' || evento.estilo_de_baile === estiloSeleccionado;
                  const cumpleEdad = edadSeleccionada === 'todas' || evento.edad_de_participantes === edadSeleccionada;
                  let cumpleFecha = true;
                  
                  if (fechaSeleccionada) {
                      const eventoFecha = new Date(evento.fecha).toISOString().split('T')[0];
                      cumpleFecha = eventoFecha === fechaSeleccionada;
                  }
  
                  return cumpleEstilo && cumpleEdad && cumpleFecha;
              });
  
              mostrarEventos(eventosFiltrados);
          })
          .catch(error => {
              console.error('Error al cargar eventos:', error);
          });
  }
});
