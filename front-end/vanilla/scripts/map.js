var map = L.map('map', {}).setView([48.853642, 2.351332], 13);

var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri and the GIS User Community'
});

Esri_WorldTopoMap.addTo(map);

function createLayer() {
  return L.layerGroup();
}

function addPointerToLayer(event, layer) {
  var marker = L.marker([event.latitude, event.longitude], {
    icon: L.ExtraMarkers.icon({
      icon: event.icon,
      markerColor: event.color,
      prefix: 'icon'
    })
  });

  marker.on("click", function(e) {
    manageClickEventOnPointer(event);
  });
  marker.addTo(layer);
}

function addLayerToMap(layer) {
  layer.addTo(map);
}

function manageClickEventOnPointer(event) {
  sideManager.hide();
  sideManager.setContent("event", templates.setEvent(event));
  sideManager.deploy();
}