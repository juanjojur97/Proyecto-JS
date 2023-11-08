// ***************** INICIO ******************************************

let noticia = document.getElementById("news");

function cargar() {
     $.ajax({
        url: './js/noticias.json',
        type: 'GET',
        success: function (datos) {
        console.log("ok");
            objeto_json = datos;

        let cadena = "";
        for (let i = 0; i < objeto_json.noticias.length; i++) {
                    cadena = cadena + 'Titular: <b>' + objeto_json.noticias[i].titulo + '</b> <br';
                    cadena = cadena + 'Descripción: <b>' + objeto_json.noticias[i].descripcion + '</b> <br>'
        }
        $("#box").html(cadena);
        },
        error: function (xhr, status) {
            alert('Disculpa, existió un problema')
        }
    });
}
noticia.addEventListener('click', () => {
    cargar();
    noticia.style.display = "none";
});
// **********************MAPA*************************
function initMap() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;


        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;

        let inicio = new google.maps.LatLng(latitud, longitud);
        // let final = new google.maps.LatLng(38.04230279720769, -4.172308652967341);
        // const localizacion = {lat:38.042270561492785,lng:-4.172277131898379};
        const localizacionMarker = new google.maps.LatLng(38.04230279720769, -4.172308652967341);

        const indicaciones = document.getElementById("indicaciones");

        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 6,
            center: inicio
        });
        const contenido =
            '<h1 class=map>JuanjoDev</h1>' +
            '<img class=imagenCasa src=/assets/images/casa.png>' +
            '<p><strong>Dirección:</strong> C/Maria Zambrano, 6, 23770, Jaén</p>' +
            '<p><strong>Teléfono:</strong> 625478384</p>';

        const info = new google.maps.InfoWindow({
            content: contenido,
        })

        const marker = new google.maps.Marker({
            position: localizacionMarker,
            map: map,
            draggable: false,
            title: "JuanjoDev"
        })

        marker.addListener('click', () => {
            info.open({
                map: map,
                anchor: marker,
                shouldFocus: false
            })
        })
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(indicaciones);


        directionsService.route({
            origin: inicio,
            destination: localizacionMarker,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response)
            } else {
                alert("ERROR");
            }
        });
    });
}
/********************************FORMULARIO - PRESUPUESTO******************************** */


