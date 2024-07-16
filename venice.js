//45.4404° N, 12.3160° E -> 45.4404, 12.3160
let map = L.map("map", {
  center: [45.4404, 12.3160],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 45.426447715753646, 12.341322503052655 - Hoter Cipriani
L.circle([45.426447715753646, 12.341322503052655], {
  fillcoler: 'lime',
  color: 'green',
  radius: 10
}).addTo(map);
