const fechaObjetivo = new Date('2024-06-24 15:00:00'); // Ajusta la fecha y hora objetivo

function actualizarCuentaRegresiva() {

  const ahora = new Date();

  const tiempoRestante = fechaObjetivo.getTime() - ahora.getTime();

  const dias =  formatoHora( Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)));

  const horas = formatoHora(Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  const minutos = formatoHora(Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)));

  const segundos = formatoHora(Math.floor((tiempoRestante % (1000 * 60)) / 1000));

  document.getElementById('dias').textContent = dias;

  document.getElementById('horas').textContent = horas;

  document.getElementById('minutos').textContent = minutos;

  document.getElementById('segundos').textContent = segundos;
  
 
}

const formatoHora = (hora) => {
    if (hora < 10) {
        hora = "0" + hora;
        return hora;
    }
    if(hora >= 10) {
        hora = hora;
        return hora;
    }
}
setInterval(actualizarCuentaRegresiva, 1000);