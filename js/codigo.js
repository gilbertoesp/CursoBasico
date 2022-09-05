function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
      resultado = "Piedra 🪨"
    } else if (jugada == 2) {
      resultado = "Papel 📃"
    } else if (jugada == 3) {
      resultado = "Tijeras ✂️"
    } else {
      resultado = "ELEGISTE MAL❎"
    }
    return resultado
  }
  // Cuando ganas regresa 1, cuando pierdes -1, empate es 0
  function juego(jugador, adversario) {
    if (adversario == jugador) {
      alert("EMPATE📩")
      return 0
    } else if (
      (jugador == 1 && adversario == 3) ||
      (jugador == 2 && adversario == 1) ||
      (jugador == 3 && adversario == 2)) {
      alert("GANASTE✌️")
      return 1
    } else {
      alert("PERDISTE🕊️")
      return -1
    }
  }

  // Torneo, juegas hasta que ganas o pierdes 3 veces e imprime el resultado
  function torneo(triunfos, perdidas) {
    let resultado = 0
    while (triunfos < 3 && perdidas < 3) {
      pc = aleatorio(1, 3)
      jugador = prompt("Elige 1 para PIEDRA🪨, 2 para PAPEL📰, 3 para TIJERAS✂️")
              
      resultado = juego(jugador, pc)
      if(resultado == 1){
        triunfos = triunfos + 1
      } else if(resultado == -1){
        perdidas = perdidas + 1
      }
    }
    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
  }
  // 1 es piedra, 2 es papel 3 es tijera
  let triunfos = 0
  let perdidas = 0

  torneo(triunfos, perdidas)
