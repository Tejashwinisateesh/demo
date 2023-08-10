// import React, { useState, useEffect } from 'react';

// const Map = (props) => {
//   const [markers, setMarkers] = useState([]);
//   const [infoWindow, setInfoWindow] = useState(null);

//   useEffect(() => {
//     initMap();
//   }, []);

//   const showInfoWindow = (marker) => {
//     infoWindow.setContent(marker.name);
//     infoWindow.open(marker.map, marker);
//   };

//   const initMap = () => {
//     let options = {
//       zoom: props.zoom,
//       center: props.center,
//       mapTypeId: window.google.maps.MapTypeId.ROADMAP
//     };

//     let map = new window.google.maps.Map(document.getElementById("map"), options);
//     setInfoWindow(new window.google.maps.InfoWindow({}));

//     let bounds = new window.google.maps.LatLngBounds();

//     props.data.forEach(item => {
//       const marker = new window.google.maps.Marker({
//         map: map,
//         id: item.locationId,
//         position: item.locationCoords,
//         title: item.locationName,
//         name: item.name,
//       });

//       marker.addListener("click", () => {
//         showInfoWindow(marker);
//       });

//       bounds.extend(marker.getPosition());
//       setMarkers(prevMarkers => [...prevMarkers, marker]);
//     });

//     map.fitBounds(bounds);
//   };

//   useEffect(() => {
//     if (props.selectedItem) {
//       let selectedMarker = markers.find(m => m.id === props.selectedItem.locationId);
//       if (selectedMarker) {
//         showInfoWindow(selectedMarker);
//       }
//     }
//   }, [props.selectedItem, markers]);

//   return (
//     <div id="map" />
//   );
// };

// export default Map;
