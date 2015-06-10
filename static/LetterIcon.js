/*
 * Round icon with some letters on it.
 */
L.LetterIcon = L.Icon.extend({
	options: {
		className: 'leaflet-div-icon',
		color: 'black',
		radius: 11,
		borderWidth: 0
	},

	initialize: function(letter, options) {
		this._letter = letter;
		L.setOptions(this, options);
	},

	createIcon: function() {
		var radius = this.options.radius,
			diameter = radius * 2 + 1;
		var div = document.createElement('div');
		div.innerHTML = this._letter;
		div.className = 'leaflet-marker-icon';
		div.style.marginLeft = (-radius-2) + 'px';
		div.style.marginTop  = (-radius-2) + 'px';
		div.style.width      = diameter + 'px';
		div.style.height     = diameter + 'px';
		div.style.borderRadius = (radius + this.options.borderWidth) + 'px';
		div.style.borderWidth = this.options.borderWidth;
		div.style.borderColor = 'white';
		div.style.borderStyle = 'solid';
		div.style.fontSize   = '16px';
		div.style.fontWeight = 'bold';
		div.style.textAlign  = 'center';
		div.style.lineHeight = diameter + 'px';
		div.style.color      = 'white';
		div.style.backgroundColor = this.options.color;
		div.style.padding = '0';
		this._setIconStyles(div, 'icon');
		return div;
	},

	createShadow: function() { return null; }
});

L.letterIcon = function(letter, options) {
	return new L.LetterIcon(letter, options);
};
