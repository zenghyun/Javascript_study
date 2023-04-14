(function(){"use strict";var __webpack_modules__={440:function(){eval("\n;// CONCATENATED MODULE: ./src/UI/Map.js\nclass Map {\n  constructor(coords) {\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n      return;\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}\n;// CONCATENATED MODULE: ./src/MyPlace.js\n\nclass LoadedPlace {\n  constructor(coordinates, address) {\n    new Map(coordinates);\n    const headerTitleEl = document.querySelector('header h1');\n    headerTitleEl.textContent = address;\n  }\n}\nconst url = new URL(location.href);\nconst queryParams = url.searchParams;\nconst coords = {\n  lat: parseFloat(queryParams.get('lat')),\n  lng: parseFloat(queryParams.get('lng'))\n};\nconst address = queryParams.get('address');\nconsole.log(address);\nnew LoadedPlace(coords, address);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VSS9NYXAuanM/YjU3OSIsIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9NeVBsYWNlLmpzPzVmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoY29vcmRzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGlmKCFnb29nbGUpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgem9vbTogMTZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBtYXA6IG1hcFxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtNYXB9IGZyb20gJy4vVUkvTWFwJztcblxuY2xhc3MgTG9hZGVkUGxhY2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XG4gICAgICAgIG5ldyBNYXAoY29vcmRpbmF0ZXMpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGgxJyk7XG4gICAgICAgIGhlYWRlclRpdGxlRWwudGV4dENvbnRlbnQgPSBhZGRyZXNzO1xuICAgIH1cbn1cblxuY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbmNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbmNvbnN0IGNvb3JkcyA9IHtcbiAgICBsYXQ6IHBhcnNlRmxvYXQocXVlcnlQYXJhbXMuZ2V0KCdsYXQnKSksXG4gICAgbG5nOiBwYXJzZUZsb2F0KHF1ZXJ5UGFyYW1zLmdldCgnbG5nJykpXG59O1xuXG5jb25zdCBhZGRyZXNzID0gcXVlcnlQYXJhbXMuZ2V0KCdhZGRyZXNzJyk7XG5jb25zb2xlLmxvZyhhZGRyZXNzKTtcbm5ldyBMb2FkZWRQbGFjZShjb29yZHMsIGFkZHJlc3MpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///440\n")}},__webpack_exports__={};__webpack_modules__[440]()})();