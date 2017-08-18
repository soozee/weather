function getLocation () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			//API call here

  	 	});
	}
}
window.onload = function() {
	getLocation();	
};


var request = new XMLHttpRequest();