/**
 * Realizado por: Jhony Grillet @ch1nux
 * Sistema de rejilla de 12 columnas inspirado en MaterializeCSS
 * desarrollado enteramente en Zepto.js 1.1.6
 */
!function($){
	//Objeto de configuración
	var conf = {
		gridlen: $(window).width(),		//Tamaño del grid
		numcols: 12,									//Número de columnas del grid
	};

	//Tamaño del ancho de la columna (1 espacio de columna por defecto)
	conf.colsize = 100 / conf.numcols;

	function getConfig() {
		return conf;
	}

	function setSize (cols) {
		if (cols && cols > 1) {
			conf.colsize = (100 / (conf.numcols / cols));
		} else {
			conf.colsize = (100 / conf.numcols); //Restaurar valores por defecto
		}
	}

	$.fn.getConfig = getConfig;

	$.fn.setSize = setSize;

	$.fn.asRow = function() {
		if ($(this).selector !== '.zg-row') throw new Error("\".zg-row\" must be the class name for \"asRow()\" function.");
		this.css({
			clear: 'left',
			marginBottom: '10px',
			marginLeft: "auto",
			marginRight: "auto",
			width: "98%"
		});
	};

	$.fn.asWidthColumn = function (cols) {
		if (!/\.zg-col-\d{1,2}/g.test($(this).selector)) throw new Error("\".zg-col-{num}\" must be the class name for \"asWidthColumn()\" function.");
		setSize(cols); //Cambiar el ancho de columna (en espacios)
		this.css({
			width: getConfig().colsize + '%',
			marginTop: "10px",
			marginLeft: 0,
			float: 'left',
			display: 'block'
		});
	};

}(window.Zepto);
