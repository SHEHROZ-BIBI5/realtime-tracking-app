 const socket = io();
const map = L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data © OpenStreetMap contributors",
}).addTo(map);

const markers = {};
let myHistory = [];

let userName = localStorage.getItem('userName') || prompt("Enter your name:");
localStorage.setItem('userName', userName);

let userColor = localStorage.getItem('userColor') || '#' + Math.floor(Math.random()*16777215).toString(16);
localStorage.setItem('userColor', userColor);

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      // Emit location with metadata
      socket.emit("send-location", {
        latitude,
        longitude,
        name: userName,
        color: userColor
      });

      // Update my path
      myHistory.push([latitude, longitude]);
      if (myHistory.length > 1) {
        if (window.myPolyline) map.removeLayer(window.myPolyline);
        window.myPolyline = L.polyline(myHistory, { color: "green" }).addTo(map);
      }

    },
    (error) => {
      console.error("Location error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

socket.on("receive-location", (data) => {
  const { latitude, longitude, id, name, color } = data;

  map.setView([latitude, longitude], 16);

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.circleMarker([latitude, longitude], {
      color: color || "#3388ff",
      radius: 10
    }).addTo(map).bindPopup(`<b>${name || "Unknown"}</b>`);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
