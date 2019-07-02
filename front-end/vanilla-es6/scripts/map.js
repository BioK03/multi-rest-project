var map = L.map('map', {}).setView([48.853642, 2.351332], 13);

var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri and the GIS User Community'
});

Esri_WorldTopoMap.addTo(map);

createLayer = () => L.layerGroup();

addPointerToLayer = (event, layer) => {
  const marker = L.marker([event.latitude, event.longitude], {
    icon: L.ExtraMarkers.icon({
      icon: event.icon,
      markerColor: event.color,
      prefix: 'icon'
    })
  });

  marker.on('click', () => manageClickEventOnPointer(event));
  marker.addTo(layer);
};

addLayerToMap = (layer) => layer.addTo(map);

manageClickEventOnPointer = (event) => {
  sideManager.hide();
  sideManager.setContent('event', templates.setEvent(event));
  sideManager.deploy();
};