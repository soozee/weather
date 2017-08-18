function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var longitude = position.coords.longitude;
			var latitude = position.coords.latitude;
			getWeather(longitude, latitude);
		});
	}
}
function getWeather(longitude, latitude) {
	var request = new XMLHttpRequest();
	request.open(
		"GET",
		"https://fcc-weather-api.glitch.me/api/current?lon=" +
			longitude +
			"&lat=" +
			latitude,
		true
	);
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// Typical action to be performed when the document is ready:
			var response = JSON.parse(request.responseText);
			renderWeather(response);
		}
	};
	request.send();
}
function tempConvert(tempInCel) {
	return	Math.round(tempInCel*(9/5)+32);
}
function renderWeather(weatherResponse) {debugger;

	document.getElementById('city').innerHTML = weatherResponse.name;
	document.getElementById('temp').innerHTML = tempConvert(weatherResponse.main.temp) + ' degrees';
	document.getElementById('humid').innerHTML = weatherResponse.main.humidity + '%';
	document.getElementById('weather-icon').src = weatherResponse.icon;
}

window.onload = function() {
	getLocation();
};
