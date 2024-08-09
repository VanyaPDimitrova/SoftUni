/* eslint-disable quotes */
/* eslint-disable no-undef */

   // Initialize and add the map
   let map;
   async function initMap() {
       // The location of Uluru
       const position = { lat: 42.70052, lng: 23.32276 };
       // Request needed libraries.
       //@ts-ignore
       const { Map } = await google.maps.importLibrary("maps");
       const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

       // The map, centered at Uluru
       map = new Map(document.getElementById("map"), {
           zoom: 16,
           center: position,
           mapId: "DEMO_MAP_ID",
       });

       // The marker, positioned at Uluru
       // eslint-disable-next-line no-unused-vars
       const marker = new AdvancedMarkerElement({
           map: map,
           position: position,
           title: "Uluru",
       });
   }

   export default initMap;

// https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
// https://console.cloud.google.com/apis/credentials?project=steady-method-431817-b5
