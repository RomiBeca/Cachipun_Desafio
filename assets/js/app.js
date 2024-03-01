// // mi boton llama a jugar 
function jugarCachipun() {
    //     // me pregunte cuantas veces quiero jugar 
    let preguntaAlJugador = prompt("⚔ ¿Cuantas veces deseas jugar? ⚔")
    let vidas = parseInt(preguntaAlJugador)


    // ciclo para vidas 
    for (let i = 0; i < vidas; i++) {
        // me deje elegir una opcion de juego  del 1 al 3 
        const eleccionJugador = parseInt(prompt(`Elige una opcion:
        1.piedra 👊
        2.papel 🖐
        3.tijeras ✌   
        `))
        switch (eleccionJugador) {
            case 1:
                console.log("elegiste piedra 👊")
                break
            case 2:
                console.log("elejiste papel 🖐")
                break
            case 3:
                console.log("elegiste tijeras ✌")
                break
            default:
                console.log("el numero ingresado no corresponde a nunguna de las opciones anteriores")
                break
        }

        // que la maquina genere una respuesta aleatoria 
        const opcionArcade = Math.floor(Math.random() * 3) + 1;
        let eleccionArcade = ""
        switch (opcionArcade) {
            case 1:
                eleccionArcade = ("piedra 👊")
                break
            case 2:
                eleccionArcade = ("papel 🖐")
                break
            case 3:
                eleccionArcade = ("tijeras ✌")
                break
            default:
                console.log("el numero elegido por la maquina esta errado vuelve a intentarlo")
                break
        }
        console.log("la maquina eligio :  " + eleccionArcade)

        // que se procese y compare mi eleccion con la de la maquina 
        if (eleccionJugador === opcionArcade) {
            console.log("😐¡Empate!😐")
            alert(`😐¡Empate!😐! 
            Arcade eligio: ` + eleccionArcade)
        } else if ((eleccionJugador === 1 && opcionArcade === 3) || (eleccionJugador === 2 && opcionArcade === 1) || (eleccionJugador === 3 && opcionArcade === 2)) {
            console.log("🎉¡Ganaste!😎🎉 ")
            alert(`🎉¡Ganaste!😎🎉 
            Arcade eligio: ` + eleccionArcade)
        } else {
            console.log("¡Perdiste!😢 Arcade eligio: " + eleccionArcade)
            alert(`¡Perdiste!😢 
            (mejor suerte para la proxima 🍀) 
            Arcade eligio: ` + eleccionArcade)

        }
    }
}

