var map;

DG.then(function () {
		map = DG.map('map', {
				center: [48.449258, 35.020155],
				zoom: 18,
				maxBounds: [
					[48.0, 34.0],
					[49.0, 36.0]
				],
				minZoom: 9,
		});

	DG.control.location({position: 'bottomright'}).addTo(map);
	DG.control.scale().addTo(map);
	DG.control.ruler({position: 'bottomleft'}).addTo(map);
	DG.control.traffic().addTo(map);
	DG.marker([48.449299, 35.020012]).addTo(map);
});