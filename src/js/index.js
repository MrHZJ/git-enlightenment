(function(window){
	var coms = window.document.querySelectorAll(".comment");
	
	for (var i =  coms.length - 1; i >= 0; i--) {
		var item = coms[i];

		item.innerHTML = '+ ' + item.innerHTML;
	}

	var subcoms = window.document.querySelectorAll(".subcom");
	
	for (var i =  subcoms.length - 1; i >= 0; i--) {
		var item = subcoms[i];
		
		item.innerHTML = '- ' + item.innerHTML;
	}
})(window)