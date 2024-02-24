const timerText = document.querySelector('#timerText');
const stops = document.querySelector('#stops');
const plays = document.querySelector('#plays');
const resets = document.querySelector('#resets');
let clicks = 0;
let pattern = /[0-9]/;
let segundos = 0;
let minutos = "00";
let horas = "00";
let cont = 0;

let parar;
/**
 * Calcula los segundos, minutos y horas con base al contador.
 * @returns El avance del contador en HTML.
 * 
 */
function cronometro() {
    cont++
    segundos = cont % 60 < 10? '0' + cont: cont;
    if (cont == 60) {
        cont  = 0;
        segundos = "00";
        minutos++;
        minutos = minutos < 10 ? "0"+minutos : minutos
        if (minutos == 60) {
            horas++;
            minutos = "00"
        horas = horas < 10 ? "0"+horas : horas;
        }
    }
    
    timerText.textContent = `${horas}:${minutos}:${segundos}`
}
/**
 * Reinicia el cronómetro a cero
 * @returns Retorna el contador a cero y el cronometro en 00 en HTML.
 */
function resetCronometro() {
    let segundos = '00';
    let minutos = "00"
    let horas = "00"
    let cont = 0
    return timerText.textContent = `${horas}:${minutos}:${segundos}` , cont
}

resets.addEventListener("click", ()=> {
    cont = resetCronometro(); 
    clearInterval(parar)
    clicks = 0;
    }
)
plays.addEventListener("click", ()=> {
    clicks++
    if (clicks > 1) {
        return 
    }
    else {
        parar = setInterval(() => cronometro(), 1000);
    }
    } 
);
stops.addEventListener("click", ()=> { 
    clearInterval(parar)
    clicks = 0;
    }
)
