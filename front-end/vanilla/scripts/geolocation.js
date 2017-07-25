var leafletCenterInserted = false;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  map.setView([position.coords.latitude, position.coords.longitude], 13);
  if (!leafletCenterInserted) {
    document.getElementsByClassName("leaflet-control-zoom-out")[0].insertAdjacentHTML('afterend', '<a id="leafletCenter" href="#" title="Center"><i class="icon icon1-5x ion-pinpoint"></i></a>');
    document.getElementById("leafletCenter").addEventListener("click", function() {
      getLocation();
    });
    leafletCenterInserted = true;
  }

}

getLocation();