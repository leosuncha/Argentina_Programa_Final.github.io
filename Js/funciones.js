document.getElementById('boton').addEventListener('click', function(){
    console.log("Se ha ingresado un número telefónico");
    document.getElementById("demo").style.display='contents';
 })

/**document.getElementById('boton').addEventListener('click', function(){
    console.log("Se ha ingresado un número telefónico");
    document.getElementById("demo").innerHTML = "Me comunicaré contigo a la brevedad";
})*/ 

var x = document.getElementById("demo2");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

const d = new Date();
document.getElementById("fecha").innerHTML = d;


document.getElementById('exp').addEventListener('click', function(){
    let numeroA = document.getElementById('numero').value;
    console.log("El numero A es:" +numeroA);
    let resultado=exp(parseFloat(numeroA));
    console.log("El resultado del exponencial del número es:" +resultado)
    document.getElementById('resultado').innerHTML=resultado;
    document.getElementById('contenedorResultado').style.display='block';
});

function exp(a){
    return Math.exp(a);
}

document.getElementById('sumar').addEventListener('click', function(){
    let numeroA = document.getElementById('numero1').value;
    console.log("El numero A es:" +numeroA);

    let numeroB = document.getElementById('numero2').value
    console.log("El numeroB es:" +numeroB);

    let resultado2=sumar(parseFloat(numeroA), parseFloat(numeroB));
    console.log("El resultado de la suma es:" +resultado2)

    document.getElementById('resultado2').innerHTML=resultado2;
    document.getElementById('contenedorResultado2').style.display='block';
});

function sumar(a,b){
    return a+b;
}