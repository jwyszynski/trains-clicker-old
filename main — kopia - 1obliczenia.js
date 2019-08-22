$(document).ready(function() {
    console.log('gotowy!');
});


// Zaokrąglanie liczb z zadaną dokładnością -- http://yarpo.pl/2011/03/06/js-zaokraglanie-liczb-z-zadana-dokladnoscia/
Math.decimal = function(n, k) 
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}



// Próba obliczenia prędkości

let v_max = 100;
let v_live = 0;
let sec = 1000;

// Kliknięcie

function klik() {
    v_live = v_live + (v_max/10) * (1 - (v_live/v_max));
}

console.log(v_live);

// for (let i = 0; i < 30; i++) {
//     klik();
//     console.log(v_live);
    
// }

function odswiez() {
    $('#speed').text(Math.decimal(v_live, 2));
}

function spowalnianie() {
    if (v_live>0) {
        v_live-=(0.1+v_live/1000);
        if (v_live<0) v_live=0;
    }
    else
        v_live=0;
}


setInterval(odswiez, 100);
setInterval(spowalnianie, 100);


