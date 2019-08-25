$(document).ready(function() {
  console.log("gotowy!");
});

//Zezwolenie na Tooltip wszędzie
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// Zaokrąglanie liczb z zadaną dokładnością -- http://yarpo.pl/2011/03/06/js-zaokraglanie-liczb-z-zadana-dokladnoscia/
Math.decimal = function(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
};

// https://code.sololearn.com/W4ofPkW3K3JG/#js
function convertKmToMs(value) {
  var regex = /[,]/g;
  valueInKm = parseFloat(String(value).replace(regex, ".")).toFixed(2);
  valueInMs = ((value * 1000) / 3600).toFixed(2);
  //return valueInKm + " Km/h = " + valueInMs + " M/s.";
  return valueInMs;
}

// #################################
// Próba obliczenia prędkości
// #################################

// Stałe?

// Zmienne
let money = 0; // $-
let v_max = 15; // km/h
let v_live = 0; // km/h
let sec = 1000; // ms
let stawka = 0.04; // $/m-
let przebyty_dystans = 1100100100100100; // km

// Kliknięcie
function klik() {
  v_live = v_live + (v_max / 10) * (1 - v_live / v_max);
}

// Odświeżenie danych w UI
function odswiez() {
  $("#money").text(Math.decimal(money, 2));
  $(".speed")
    .children("span")
    .text(Math.decimal(v_live, 0));
  $("#speed-max").text(Math.decimal(v_max, 2));
  $(".dystans")
    .children("span")
    .text(Math.decimal(przebyty_dystans, 2));
  $("#stawka").text(Math.decimal(stawka, 2));
}

function spowalnianie() {
  if (v_live > 0) {
    v_live -= 0.1 + v_live / 1000;
    if (v_live < 0) v_live = 0;
  } else v_live = 0;
}

function przelicz() {
  money += stawka * convertKmToMs(v_live);
  przebyty_dystans += parseFloat(convertKmToMs(v_live));
  console.log(convertKmToMs(v_live));
  console.log(przebyty_dystans);
}

setInterval(odswiez, 200);
setInterval(spowalnianie, 100);
setInterval(przelicz, 1000);
