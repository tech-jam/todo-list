export default function SpinnerConfigProvider(usSpinnerConfigProvider){
	// defaults
	usSpinnerConfigProvider.setDefaults({
		lines: 13, // The number of lines to draw
		length: 4, // The length of each line
		width: 3, // The line thickness
		radius: 7, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		// color: '#FFFFFF', // #rgb or #rrggbb
		// color: '#9AC43C', // #rgb or #rrggbb
		color: '#183669', // #rgb or #rrggbb
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		// shadow: true, // Whether to render a shadow
		shadow: false, // Whether to render a shadow
		hwaccel: true, // Whether to use hardware acceleration
		zIndex: 2000000000 // The z-index (defaults to 2000000000)
	});

	usSpinnerConfigProvider.setTheme('filter', {});
}

