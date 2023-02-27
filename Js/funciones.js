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