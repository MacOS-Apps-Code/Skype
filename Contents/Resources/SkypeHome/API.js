/** External JS API */
SH.API = function() {
	
	var _api = false;
	
	//setup api if it exists
	try {
		if (window.external && typeof window.external.getapi == "unknown") {
			_api = window.external.getapi(0);
		} else {
			_api = false;
		}
	} catch(e) {
		_api = false;
	};
	
	return _api;
}();