
      let pregunta = prompt("piedra papel o tijera?");  

      function humano() {
        if (pregunta == "piedra") {
            console.log("piedra");
        } else if (pregunta == "papel"){
            console.log("papel");
        }
        else if (pregunta == "tijera")
        {
            console.log("tijera")
        }
        else {console.log("inválido");}
        
        return
      }

         let numero;
    function getComputerChoice (piedra,papel,tijera) {
       let numero = Math.floor(Math.random() * 3);
       
        if (numero == 1) {
            console.log("piedra")}
            else if  (numero == 2) {
                console.log("papel");
            }
            else {
                console.log("tijera");
            }
        
        
    return
    }
    
    humano();
    getComputerChoice(1,2,3);
  