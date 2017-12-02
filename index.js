//updated after elin Gunner NA

module.exports = function ExitInstantly(dispatch) {

	dispatch.hook('S_PREPARE_EXIT', 1, function(event) {
		dispatch.toClient('S_EXIT', 2, {})		

	});

}