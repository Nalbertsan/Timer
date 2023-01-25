function relogio() {

  const relogio = document.querySelector('.relogio');
  const iniciar = document.querySelector('#iniciar');
  const pausar = document.querySelector('#pausar');
  const zerar = document.querySelector('#zerar');
  let seg = 0;
  let timer;
  
  iniciar.disabled = false;
  pausar.disabled = true;
  zerar.disabled = true;

  function cronometro(seg) {
    let date = new Date(seg * 1000);
    return date.toLocaleTimeString('pt-BR', { timeZone: "UTC", hour12: false });
  }

  const timerIniciar = function () {
    relogio.style.color = "black";
    timer = setInterval(function () {
      seg++;
      relogio.innerHTML = cronometro(seg);
    }, 1000)
  }

  function pausarCronometro() {
    clearInterval(timer);
    relogio.style.color = "red";
  }

  function zerarCronometro(){
    seg = 0;
    pausarCronometro();
    relogio.style.color = "black";
    relogio.innerHTML = cronometro(seg);
    
  }

  iniciar.addEventListener('click', function (event) {timerIniciar(); iniciar.disabled = true; pausar.disabled = false;
    zerar.disabled = false;});

  pausar.addEventListener('click', function (event) {pausarCronometro(); iniciar.disabled = false; pausar.disabled = true;
    zerar.disabled = false;});

  zerar.addEventListener('click', function (event) {zerarCronometro(); iniciar.disabled = false; pausar.disabled = true;
    zerar.disabled = true;})

  
 
}

relogio()
