app.directive("map", function() {

  return {
    restrict: "E",
    template: "<div id='map'></div>",
    checkLocation: function(map) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          map.setView([position.coords.latitude, position.coords.longitude], 13);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    link: function($scope, element, attrs) {
      $scope.leafletMap = L.map('map', {}).setView([48.853642, 2.351332], 13);

      var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri and the GIS User Community'
      });

      Esri_WorldTopoMap.addTo($scope.leafletMap);

      this.checkLocation($scope.leafletMap);
    }
  };
});