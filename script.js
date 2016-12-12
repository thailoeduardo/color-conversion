(function () {
  //rgb rgba
  var inputColor = document.getElementById('js-color');
  var inputColorOpacity = document.getElementById('js-opacity');
  var colorEnd = document.getElementById('js-resultRgb');
  var colorButton = document.getElementById('js-btnConversorRgb');
  colorButton.addEventListener('click', ShowColor, false);

  function hex2rgb(hex, opacity) {
    var h=hex.replace('#', '');
    h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

    for(var i=0; i<h.length; i++)
    h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

    if (typeof opacity != 'undefined')  h.push(opacity);

    return h.join(',');

  }

  function ShowColor() {

    var colorHtmlInput = inputColor.value;
    var ColorOpacity = inputColorOpacity.value;
    colorEnd.innerHTML = hex2rgb(colorHtmlInput, ColorOpacity);
  }
}());


(function () {
	//hex
		var inputColorHexHtml1 = document.getElementById('ColorvalueHex1');
		var inputColorHexHtml2 = document.getElementById('ColorvalueHex2');
		var inputColorHexHtml3 = document.getElementById('ColorvalueHex3');
		var resultColorHex = document.getElementById('resultColorHexHtml');
		var colorButton = document.getElementById('conversorHEX');

		colorButton.addEventListener('click', ShowColorHEX, false);

		// convert 0..255 R,G,B values to a hexidecimal color string
		RGBToHex = function(r,g,b){
		    var bin = r << 16 | g << 8 | b;
		    return (function(h){
		        return new Array(7-h.length).join("0")+h
		    })(bin.toString(16).toUpperCase())
		}

		function ShowColorHEX() {
			resultColorHex.innerHTML = ('#'+ RGBToHex(inputColorHexHtml1.value,inputColorHexHtml2.value,inputColorHexHtml3.value));
		}
}());
