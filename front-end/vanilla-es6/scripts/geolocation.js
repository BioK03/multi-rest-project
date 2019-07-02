var leafletCenterInserted = false;

getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
};

showPosition = (position) => {
  map.setView([position.coords.latitude, position.coords.longitude], 13);
  if (!leafletCenterInserted) {
    document.getElementsByClassName('leaflet-control-zoom-out')[0].insertAdjacentHTML('afterend', '<a id="leafletCenter" href="#" title="Center"><i class="icon icon1-5x ion-pinpoint"></i></a>');
    document.getElementById('leafletCenter').addEventListener('click', getLocation);
    leafletCenterInserted = true;
  }
};

getLocation();